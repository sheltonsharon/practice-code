//dataTypes
console.log(typeof true); //boolean
console.log(typeof 3.14); //number
console.log(typeof 73426827647812684722746124612949124178n); //bigint
console.log(typeof null); //object
//primitive data types are passed by value and non-primitive datatypes are passed by reference
var num = 10;
var b = num;
num = 100; //assignment operator
console.log(b); //prints 10 since the value is only passed from num and not the reference

//comma operator
console.log("comma operator");
var x = ("a", "b", "c"); //evaluates all the expressions and returns the last expression's value
console.log(x); // prints c //without the parenthesis 'a' will be printed

//comparison operator
console.log(10 == "10"); //prints true, since only the values are checked and implicit type conversion takes place
console.log(10 === "10"); // prints false, since the type is also compared and implicit type conversion takes place

//for in loop
const arr = ["a", "b", "c", "d"];
console.log("for-in loop");
for (let i in arr) {
  console.log(i); // 0 1 2 3
}
//for of loop
console.log("for-of loop");
for (let i of arr) {
  console.log(i); // a b c d
}

//while loop
b = 1;
while (b <= 5) {
  b++;
  console.log(b); //2 3 4 5 6
}

//break
b = 1;
while (b <= 5) {
  b++;
  if (b == 4) break;
  console.log(b); //2 3
}

//continue
b = 1;
while (b <= 5) {
  b++;
  if (b == 4) continue;
  console.log(b); //2 3 5 6
}

//do-while loop
do {
  console.log("do-while loop"); //will be printed once
} while (false);

//Set is traversed in the order of the insertion
//Nan can be stored in a set
const set1 = new Set([1, 1, 2, 3, 3, 5]);
console.log(set1);
console.log(set1.has(5)); //returns true
set1.add(6);
console.log(set1);
console.log(set1.delete(10)); //returns false since 10 is not in the set
console.log(set1.delete(6)); //returns true
console.log(set1.size); //returns 4
set1.forEach((x) => {
  console.log(x + " Yes"); //printed 4 times
});
//WeakSet can store only objects
//const set2 = new WeakSet([1, 2, 3]);//will produce invalid value in weakset
let foo = { a: 1 };
let bar = { a: 2 };
const set2 = new WeakSet([foo, bar]);
console.log(set2.has(foo)); //returns true
//map
var m = new Map();
m.set("a", 1);
m.set("b", 2);
console.log(m.get("a")); //returns 1
console.log(m.size); //returns 2
console.log(m); //{ 'a' => 1, 'b' => 2 }
for (let i of m) {
  console.log(i[0]); //returns the key
  console.log(i[1]); //returns the value
}
//Date
let d = new Date();
console.log(d);

console.log(1, 2, 3); //prints 1 2 3

//implicit type conversion
console.log("Implicit type conversion");
console.log(3 + true); //returns 4
console.log(3 + "true"); //returns 3true
//explicit type conversion
console.log(typeof Number("3")); //returns number

//closure
function outer() {
  let a = 10;
  return function () {
    console.log(a);
    console.log("Inner");
  };
}
let a = 100;
outer()(); //prints 10 \n "Inner"
let temp = outer();
temp(); //still prints 10 \n "Inner"

//Constructor functions
//constructor functions are created with the new keyword
//they are used to create objects
function counter() {
  var count = 0;
  this.increment = () => {
    count++;
    console.log("count: " + count);
  };
  this.decrement = () => {
    count--;
    console.log("count: " + count);
  };
}

counter_obj_0 = new counter();
counter_obj_1 = new counter();
counter_obj_0.increment();
counter_obj_0.increment();
counter_obj_0.increment();
counter_obj_0.decrement();
counter_obj_1.increment();

let sym = Symbol("sharon");
console.log(sym);
console.log(typeof sym);
console.log(Symbol.for("sharon"));

//Iterator
const numbers = [1, 2, 3];
const numbersIterator = numbers[Symbol.iterator]();
console.log(numbersIterator); //prints Object [Array Iterator] {}
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
//for of loop is internally based on iterator

//Generators
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const obj = generator();
console.log(obj.next());
console.log(obj.return()); //exits out of the generator
console.log(obj.next());
//async-await are internally based on generators
//can create iterator

//try-catch-finally
try {
  throw Error("error");
} catch (err) {
  console.log("Error occurred");
} finally {
  console.log("This will be executed finally");
}
