//Functions

//Function expressions
//useful in IIFE->Immediately invoked function expressions
const a = function () {
  console.log("Hi");
};
a();

//Normal function declaration

function normal() {
  console.log("Hello World");
}

normal();

//arrow function
const arrow = (name) => {
  console.log(`Hi ${name}`);
};
arrow("Sharon");

// count = 0;
// setInterval(() => {
//   console.log(count++);
// }, 2000);

//some built-in functions
console.log(isFinite(1 / 0));
console.log(parseFloat("2.14"));

//Closure-->Function along with its lexical scope bundled together is called a closure
//Function along with the lexical scope forms a closure
//functions can be passed as a parameter to functions, returned from a function etc
//When a function is returned from a function, it also binds the lexical environment along with the returned function.
//eg:

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
  //this is equivalent to return function y(){console.log(a);}
}
var z = x();
z(); //returns 7 //a's reference is returned along with the function, not the value
//Not only the function is retured, but also the lexical environment is given to the caller. This is called closure

//Local and Global scope
var num = 1;
fun1();
fun2();
console.log("num: " + num);

function fun1() {
  var num = 10;
  console.log("num: " + num);
}

function fun2() {
  var num = 100;
  console.log("num: " + num);
}

//IIFE--> Immediately Invoked Function Expression
(() => {
  console.log("IIFE");
})();

let multiply = function (x) {
  return function (y) {
    return x * y;
  };
};

//currying
console.log(multiply(5)(2));
//In the absence of one of the variables, it will return the function
//If both the variables are given separately, then it will perform the calculation and return it
