// Calc Functions redone with callbacks

var Input = [];
var inputString = "";

function Add(a, b) {
  return a + b;
}

function Subtract(a, b) {
  return a - b;
}

function Multiply(a, b) {
  return a * b;
}

function Divide(a, b) {
  return a / b;
}

function Percent(a, b) {
  return a % b;
}

function numToString(clicked_id) {
  inputString += clicked_id;
  console.log(inputString);
  document.querySelector(".display").innerHTML = inputString;
}

function operToString(clicked_id) {
  inputString += " " + clicked_id + " ";
  console.log(inputString);
  document.querySelector(".display").innerHTML = inputString;
}


function equalButton() {
  Input = inputString.split(" ");
  console.log(Input);
  let a = parseFloat(Input[0]);
  let b = parseFloat(Input[2]);
  if (Input[1] == '+') {
    Calculate(a, b, Add);
    document.querySelector(".display").innerHTML = Calculate(a, b, Add);
    inputString = Calculate(a, b, Add);
    console.log(Calculate(a, b, Add));
  }
  if (Input[1] == '−') {
    Calculate(a, b, Subtract);
    document.querySelector(".display").innerHTML = Calculate(a, b, Subtract);
    inputString = Calculate(a, b, Subtract);
    console.log(Calculate(a, b, Subtract));
  }
  if (Input[1] == '*') {
    Calculate(a, b, Multiply);
    document.querySelector(".display").innerHTML = Calculate(a, b, Multiply);
    inputString = Calculate(a, b, Multiply);
    console.log(Calculate(a, b, Multiply));
  }
  if (Input[1] == '/') {
    Calculate(a, b, Divide);
    document.querySelector(".display").innerHTML = Calculate(a, b, Divide);
    inputString = calcCalculate(a, b, Divide);
    console.log(Calculate(a, b, Divide));
  }
  if (Input[1] == '%') {
    Calculate(a, b, Percent);
    document.querySelector(".display").innerHTML = Calculate(a, b, Percent);
    inputString = Calculate(a, b, Percent);
    console.log(Calculate(a, b, Percent));
  }
  console.log(inputString);
  console.log(Input);
}

function Calculate(a, b, cb) {
  return cb(a, b);
  console.log(cb(a,b));
}
