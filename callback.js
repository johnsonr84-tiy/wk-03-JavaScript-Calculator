// Calc Functions redone with callbacks
const calc = (function() {

  // const button = document.querySelectorAll('input[type=button]')
  var input = [];
  var inputString = "";

  const add = function(a, b) {
    return a + b;
  };

  const subtract = function(a, b) {
    return a - b;
  };

  const multiply = function(a, b) {
    return a * b;
  };

  const divide = function(a, b) {
    return a / b;
  };

  const modulus = function(a, b) {
    return a % b;
  };

  const invert = function(b) {
    return b * -1;
  }


  const numToString = function(clicked_id) {
    inputString += clicked_id;
    console.log(inputString);
    document.querySelector(".display").innerHTML = inputString;
  };

  const operToString = function(clicked_id) {
    inputString += " " + clicked_id + " ";
    console.log(inputString);
    document.querySelector(".display").innerHTML = inputString;
  };

  const equalButton = function() {
    input = inputString.split(" ");
    console.log(input);
    let a = parseFloat(input[0]);
    let b = parseFloat(input[2]);

    let operator
    if (input[1] == "+") {
      operator = add;
    }
    else if (input[1] == "-") {
      operator = subtract;
    }
    else if (input[1] == "*") {
      operator = multiply;
    }
    else if (input[1] == "/") {
      operator = divide;
    }
    else if (input[1] == "%") {
      operator = modulus;
    }
    
    let result = calculate(a, b, operator);
    document.querySelector(".display").innerHTML = result;
    inputString = result;
    console.log(result);
  };

  const calculate = function(a, b, cb) {
    return cb(a, b);
    console.log(cb(a,b));
  };

  function addListenerForEquals() {
    const button =  document.querySelector("#equalButton");
    button.addEventListener("click", function() {
      equalButton(button.value);
    });
  };

  function addListenerForNumbers() {
    const buttons = document.querySelectorAll(".number")
    for(let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener("click", function() {
        numToString(button.value);
      });
    };
  };

  function addListenerForOperators() {
    const buttons = document.querySelectorAll(".operator")
    for(let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener("click", function() {
        operToString(button.value);
      });
    };
  };

  addListenerForEquals()
  addListenerForNumbers()
  addListenerForOperators()

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    modulus: modulus,
    numToString: numToString,
    operToString: operToString,
    equalButton: equalButton,
    calculate: calculate
  }

})();

module.export = calc;
window.onload = calc;
