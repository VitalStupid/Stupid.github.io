const snapWrap = document.querySelector(".snap-wrap");
const panels = [...document.querySelectorAll(".panel")];
const mouseHints = [...document.querySelectorAll(".mouse-hint")];

const markActivePanel = () => {
  const triggerPoint = window.innerHeight * 0.52;
  panels.forEach((panel) => {
    const rect = panel.getBoundingClientRect();
    const isActive = rect.top <= triggerPoint && rect.bottom >= triggerPoint;
    panel.classList.toggle("active", isActive);
  });
};

mouseHints.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    if (!targetId || !snapWrap) {
      return;
    }

    const target = document.querySelector(`#${targetId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

if (snapWrap) {
  snapWrap.addEventListener("scroll", markActivePanel, { passive: true });
}

window.addEventListener("resize", markActivePanel);
markActivePanel();
