/*Simple Functions*/

function addNum (num1, num2) {
  var sum = num1 + num2;
  sum = Math.floor(sum *10000000000)/10000000000;
  console.log(sum);
  return sum;
}

function subtNum (num1, num2) {
  var answer = parseFloat(num1 - num2);
  sum = Math.floor(answer *10000000000)/10000000000;
  console.log(answer);
  return answer;
}

function multNum (num1, num2) {
  let product = parseFloat(num1 * num2);
  sum = Math.floor(product *10000000000)/10000000000;
  console.log(product);
  return product;
}

function divNum (num1, num2) {
  if (num2 ===0) {return "illegal divide by zero request"};
  let quotient = parseFloat(num1 / num2);
  quotient = Math.floor(quotient *10000000000)/10000000000;
  console.log(product);
  return quotient;
}

function modulus (num1, num2) {
  let result = parseFloat(num1 % num2);
  result = Math.floor(result *10000000000)/10000000000;
  console.log(result);
  return result;
}



// DOM manipulation
  function onLoad () {
    var buttonNodeList = document.querySelectorAll("button");
    console.log(buttonNodeList)
  }
    window.onload = onLoad;
    console.log('script loaded');





  // var numberone = document.getElementById("numberone");
  //
  // numberone.addEventListener("click", function () {
  //   console.log("1");
  // })

  // var clear = document.getElementById("clear");
  // console.log(clear)
  //
  // clear.addEventListener("click", function () {
  //   console.log("this is 1");
  //
  // document.getElementById("output").innerHTML = 0;
  // });


  // document.getElementById("output").innerHTML = 0;
