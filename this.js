//this keyword
//method->obj(part of a function)
//function->global object

console.log(typeof this); //object
console.log(this); //{}
function this_for_this_fun() {
  console.log(this); //global object //this is also known as default binding
}
console.log(this_for_this_fun());
//if a function is called using new keyword(constructor function), this will point to an empty object
function fun1(title) {
  this.title = title;
  console.log(this); //will point to fun1
}
const obj1 = new fun1("parameter");

//External binding-->Objects passed as parameter to call(), apply(), bind()
const obj11 = {
  name: "shelton",
  getName: function () {
    console.log(this.name);
    console.log(this); //points to obj12 since that is what passed as a parameter to the call() method
  },
};

const obj12 = {
  name: "rina",
  age: "21",
};
obj11.getName.call(obj12); //rina will be displayed

//Prototype
const obj = {
  name: "Sharon",
};
let arr = [1, 2, 3];
console.log(Object.prototype);
console.log(obj.__proto__); //same as Object.prototype
console.log(arr.__proto__); //same as Array.prototype
console.log(arr.__proto__.__proto__); //same as Object.prototype
console.log(arr.__proto__.__proto__.__proto__); //returns null
//So everything in JS is basically an object.. -->This chaining is known as prototype chaining
Function.prototype.every_function_has_this_property = function () {
  console.log("function defined at prototype level");
};

function fun() {
  fun.__proto__.every_function_has_this_property();
}

fun();

console.log(Object.getPrototypeOf(arr)); //returns prototype of arr which is Object(0) []

//Shadowing properties
const myDate = new Date(1995, 11, 17);
console.log(myDate.getFullYear);
myDate.getFullYear = function () {
  console.log("Something else");
};
console.log(myDate.getFullYear()); //prints "Something else"
//the JS engine will look if the property is present in myDate and checks the prototype only if its not present in it

//we can specify an object to be used as the prototype of another object
const personPrototype = {
  greet() {
    console.log("Hello");
  },
};

const new_obj = Object.create(personPrototype);
new_obj.greet(); //prints "Hello" since it is defined in its prototype
