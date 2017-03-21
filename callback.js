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

  (function() {
    const button =  document.querySelector("#equalButton");
    console.log("the roof is on fire", button);
    button.addEventListener("click", function() {
      equalButton(button.value);
    })
  })();

  const equalButton = function() {
    input = inputString.split(" ");
    console.log(input);
    let a = parseFloat(input[0]);
    let b = parseFloat(input[2]);

    if (input[1] == "+") {
      calculate(a, b, add);
      document.querySelector(".display").innerHTML = calculate(a, b, add);
      inputString = calculate(a, b, add);
      console.log(calculate(a, b, add));
    };
    if (input[1] == "−") {
      calculate(a, b, subtract);
      document.querySelector(".display").innerHTML = calculate(a, b, subtract);
      inputString = calculate(a, b, subtract);
      console.log(calculate(a, b, subtract));
    };
    if (input[1] == "*") {
      calculate(a, b, multiply);
      document.querySelector(".display").innerHTML = calculate(a, b, multiply);
      inputString = caculate(a, b, multiply);
      console.log(calculate(a, b, multiply));
    };
    if (input[1] == "/") {
      calculate(a, b, divide);
      document.querySelector(".display").innerHTML = calculate(a, b, divide);
      inputString = calculate(a, b, divide);
      console.log(calculate(a, b, divide));
    };
    if (input[1] == "%") {
      calculate(a, b, Modulus);
      document.querySelector(".display").innerHTML = calculate(a, b, modulus);
      inputString = calculate(a, b, modulus);
      console.log(calculate(a, b, modulus));
    };
    console.log(inputString);
    console.log(input);
  };

  const calculate = function(a, b, cb) {
    return cb(a, b);
    console.log(cb(a,b));
  };

  (function () {
    const buttons = document.querySelectorAll(".number")
    console.log("buttons are:", buttons)
    for(let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      console.log("button is:", button)
      button.addEventListener("click", function() {
        numToString(button.value);
      });
    }

  })();

  (function () {
    const buttons = document.querySelectorAll(".operator")
    for(let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener("click", function() {
        operToString(button.value);
      });
    }
  })();

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
