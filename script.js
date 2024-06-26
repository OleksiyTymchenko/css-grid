const checkbox = document.getElementById('myCheckbox');
const icon = document.querySelector('.checkbox-container .icon');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    icon.style.display = 'block';
  } else {
    icon.style.display = 'none';
  }
});