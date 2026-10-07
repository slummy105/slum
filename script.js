// Tiny interaction: clicking a link gives it a brief press animation.
document.querySelectorAll('.link-card').forEach(card => {
  card.addEventListener('pointerdown', () => {
    card.style.transform = 'scale(.985)';
  });
  card.addEventListener('pointerup', () => {
    card.style.transform = '';
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});
