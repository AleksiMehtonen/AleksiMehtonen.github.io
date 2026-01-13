// Plain JS toggle for Reflection section
const toggleBtn = document.getElementById('reflectionToggle');
const reflection = document.getElementById('reflection');

toggleBtn.addEventListener('click', () => {
  if (reflection.style.display === 'none') {
    reflection.style.display = 'block';
    toggleBtn.textContent = 'Piilota reflektio';
  } else {
    reflection.style.display = 'none';
    toggleBtn.textContent = 'Näytä reflektio ja analyysi';
  }
});
