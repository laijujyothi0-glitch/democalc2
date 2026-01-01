function appendNumber(number) {
  document.getElementById('result').value += number;
}

function appendOperator(operator) {
  document.getElementById('result').value += operator;
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function calculate() {
  let result = document.getElementById('result').value;
  try {
    document.getElementById('result').value = eval(result);
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}