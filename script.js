
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
display.value="";
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    
    // Handling different button clicks
    if (buttonText === 'C') {
      display.value = '';
    } else if (buttonText === 'Del') {
      display.value = display.value.slice(0, -1);
    } else if (buttonText === '=') {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      display.value += buttonText;
    }
  });
});