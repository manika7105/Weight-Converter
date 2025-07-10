const input = document.getElementById('poundsInput');
const result = document.getElementById('result');

let resetTimeout; // to store timeout ID

input.addEventListener('input', () => {
  const pounds = parseFloat(input.value);
  
  if (!isNaN(pounds)) {
    const kg = (pounds * 0.453592).toFixed(2);
    result.textContent = `Your weight in kg is: ${kg}`;
    
    // Clear old timer
    clearTimeout(resetTimeout);
    
    // Set new timer
    resetTimeout = setTimeout(() => {
      result.textContent = 'Your weight in kg is:';
      input.value = '';
    }, 10000);

  } else {
    result.textContent = 'Your weight in kg is:';
    clearTimeout(resetTimeout); // Stop any running timer if input is invalid
  }
});
