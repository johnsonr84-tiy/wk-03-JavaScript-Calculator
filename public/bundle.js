/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// Calc Functions redone with callbacks
const onLoad = (function() {

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
    for(let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
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
    mudulos: modulus,
    numToString: numToString,
    operToString: operToString,
    equalButton: equalButton,
    calculate: calculate
  }

})();

module.export = onLoad;
window.onload = onLoad;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map