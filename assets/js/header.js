(() => {
  const header = document.querySelector('[data-parallax-header]');
  const logo = document.querySelector('[data-parallax-logo]');
  if (!header || !logo) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let scheduled = false;

  const update = () => {
    const bounds = header.getBoundingClientRect();
    const offset = Math.min(bounds.height, Math.max(0, -bounds.top));
    logo.style.transform = reducedMotion.matches
      ? ''
      : `translateY(${offset * 0.35}px)`;
    scheduled = false;
  };

  const schedule = () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  reducedMotion.addEventListener('change', schedule);
  update();
})();
