function updateStyles(selectedRadio) {
  document.querySelectorAll('.option').forEach((option) => {
     document.querySelectorAll('.option').forEach((option) => {
      option.style.background = '#fff'; 
      option.style.border = '0.9px solid #C8C8C8'; 
      const optionsContainer = option.querySelector('.options');
      if (optionsContainer) {
        optionsContainer.style.display = 'none'; 
      }
    });
  });

  // css to clicked radio box
  const parentOption = selectedRadio.closest('.option');
  parentOption.style.background = '#FFF9FA'; 
  parentOption.style.border = '2px solid #FF6B82'; 
  const optionsContainer = parentOption.querySelector('.options');
  if (optionsContainer) {
    optionsContainer.style.display = 'block';
  }
}
//onchange radio box
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener('change', function () {
    updateStyles(this);
  });
});
// default checked radio
const defaultChecked = document.querySelector('input[type="radio"]:checked');
if (defaultChecked) {
  updateStyles(defaultChecked);
}
