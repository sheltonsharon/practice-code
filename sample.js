function myFun(num) {
  console.log("Inside function: " + num);
}

myFun(10);

const car = {
  color: "red",
  type: "SUV",
};
Object.freeze(car);
car.color = "violet"; //will not be altered
console.log(car.color);

//anonymous function
const a = function () {
  return 5;
};

const b = () => a() + 10; ///can be called with the variable it is assigned to

console.log(b());

const myFunc = function () {
  const myVar = "value";
  return myVar;
};

console.log(myFunc());

setTimeout(function () {
  console.log("Displayed after 2 seconds");
}, 2000); //passed as a callback to the setTimeout function

(function () {
  console.log("Immediately executed");
})();

const greet = () => {
  console.log("Hello");
}; //assigning to const meaning that we are not intending to change the function within greet in future

greet();

let arr = [1, 2, 3];
for (let i in arr) {
  console.log(i);
}

for (let i of arr) {
  console.log(i);
}

function returnThis() {
  return this;
}

//console.log(returnThis());

class Animal {
  static belly = [];
  eat() {
    Animal.belly.push("food");
  }
}

let an = new Animal();
an.eat();
console.log(an.belly); //returns undefined
console.log(Animal.belly[0]);

const pro = new Promise((resolve, reject) => {
  if (false) {
    resolve("Yes");
  } else {
    reject("No");
  }
});

pro
  .then((result) => console.log("Yeahhhh"))
  .catch((error) => console.log("Noooooo"));
