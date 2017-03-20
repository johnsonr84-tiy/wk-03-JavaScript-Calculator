
var savedNumber = undefined
var shouldReset = false
var operation = ""

function clickedNumber(x) {
  let display = document.getElementById("display");
  if(shouldReset) {
    shouldReset = false
    display.innerHTML = ""
  }
  let value = display.innerHTML
  display.innerHTML = value + x.toString()
}

function doOperation() {
  let display = document.getElementById("display");
  let currentNumber = parseInt(display.innerHTML);
  }


  else if(operation === "clear") {
    console.log("clear")
    savedNumber = savedNumber + currentNumber;
  }
  else if(operation === "+/-") {
    console.log("+/-")
    savedNumber = savedNumber + currentNumber;
  }
  else if(operation === "percent") {
    console.log("percent")
    savedNumber = savedNumber % currentNumber;
  }
  else if(operation === "add") {
    console.log("adding")
    savedNumber = savedNumber + currentNumber;
  }
  else if(operation === "multiply") {
    console.log("mutiply")
    savedNumber = savedNumber * currentNumber;
  }
  else if(operation === "divide") {
    console.log("divide")
    savedNumber = savedNumber / currentNumber;
  }
  else if(operation === "subtract") {
    console.log("subtract")
    savedNumber = savedNumber - currentNumber;
  }

}




//click functions for simple math
function clickedDivide() {
  if(shouldReset) {
    operation = "divide";
    return
  }

  doOperation();
  operation = "divide";
}

function clickedSubtract() {
  if(shouldReset) {
    operation = "subtract";
    return
  }

  doOperation();
  operation = "subtract";
}

function clickedPlus() {
  if(shouldReset) {
    operation = "add";
    return
  }

  doOperation();
  operation = "add";
}

function clickedTimes() {
  if(shouldReset) {
    operation = "multiply";
    return
  }

  doOperation();
  operation = "multiply";
}

function clickedEquals() {
  if(shouldReset) {
    operation = "";
    return
  }

  doOperation();
  operation = "";
}

function clickedclear() {
  if(shouldReset) {
    operation = "";
    return
  }

  doOperation();
  operation = "";
}

function clickedPlus_Minus() {
  if(shouldReset) {
    operation = "plusMinus";
    return
  }

  doOperation();
  operation = "plusMinus";
}

function clickedPercent() {
  if(shouldReset) {
    operation = "percent";
    return
  }

  doOperation();
  operation = "percent";
}


for(let i = 0; i <= 9; i++) {
  let id = "number" + i;
  let button = document.getElementById(id);
  button.addEventListener("click", function() {
    clickedNumber(i)
  });
}

let plusButton = document.getElementById("operatorPlus");
plusButton.addEventListener("click", function() {
  clickedPlus();
});

let timesButton = document.getElementById("operatorMultiply");
timesButton.addEventListener("click", function() {
  clickedTimes();
});

let divideButton = document.getElementById("operatorDivide");
divideButton.addEventListener("click", function() {
  clickedDivide();
});

let subtractButton = document.getElementById("operatorSubtract");
subtractButton.addEventListener("click", function() {
  clickedSubtract();
});

let equalsButton = document.getElementById("operatorEquation");
equalsButton.addEventListener("click", function() {
  clickedEquals();
});

clearButton = document.getElementById("operatorClear");
clearButton.addEventListener("click", function() {
  clickedClear();
});

let percentButton = document.getElementById("operatorPercent");
percentButton.addEventListener("click", function() {
  clickedPercent();
});

let plus_minusButton = document.getElementById("plusMinus");
plusMinusButton.addEventListener("click", function() {
  clickedPercent();
});
