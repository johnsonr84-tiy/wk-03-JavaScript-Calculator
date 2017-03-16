
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

  if(operation === "") {
    savedNumber = currentNumber
  }
  else if(operation === "add") {
    console.log("adding")
    savedNumber = savedNumber + currentNumber;
  }
  else if(operation === "multiply") {
    console.log("adding")
    savedNumber = savedNumber * currentNumber;
  }
  display.innerHTML = savedNumber
  shouldReset = true;
}

function clickedDivide() {
  if(shouldReset) {
    operation = "divide";
    return
  }

  doOperation();
  operation = "divide";
}

function clickedMinus() {
  if(shouldReset) {
    operation = "minus";
    return
  }

  doOperation();
  operation = "minus";
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

let equalsButton = document.getElementById("operatorEquation");
equalsButton.addEventListener("click", function() {
  clickedEquals();
});
