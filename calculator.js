function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
  return  (operator === 'add') ? add(num1, num2) : 
          (operator === 'subtract') ? subtract(num1, num2) :
          (operator === 'multiply') ? multiply(num1, num2) :
          (operator === 'divide') ? divide(num1, num2) :
          "Invalid entry!";
}

let output = document.createElement("h2")
output.setAttribute('id', 'output')
output.textContent = "Result: "
document.body.appendChild(output)

function equals() {
let num1 = document.getElementById('num1').value
let num2 = document.getElementById('num2').value
num1 = parseInt(num1)
num2 = parseInt(num2)
let operator = document.getElementById('operator').value
let result = operate(operator, num1, num2)
let results = document.getElementById('output')
results.textContent = "Result: " + result
}

