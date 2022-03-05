//Objects-->Stores data in key-value pairs
const user = {}; //object literal
const new_user = user;
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
new_user.age = 25; //this will be reflected in all instances
console.log(user);
const obj = function () {
  this.name = "Ravi";
};
const independent_object1 = new obj();
const independent_object2 = new obj();
independent_object1.name = "Ram"; //changing this does not affect the other object
console.log(independent_object1.name);
console.log(independent_object2.name);

//add all the values of the properties
const salary = {
  John: 10000,
  Peter: 15000,
  David: 50000,
};
let sum = 0;
for (let i in salary) {
  console.log(salary[i]);
  sum += salary[i];
}
console.log("Sum: " + sum);

//sorting of integer keys
const integer_keys = {
  5: "history",
  3: "hello",
};
console.log(integer_keys); //keys will be sorted--> 3 and then 5; this sorting happens only for integer keys
console.log(5 in integer_keys); //returns true since this key is present

//computed properties
const variable = "Hello";
const an_object = {
  [variable]: "World",
  "Very Good": "Morning",
};
console.log(an_object); //variable's value i.e, Hello will be placed in that property name
console.log(an_object["Very Good"]); //dot operator cannot be used to access multi-word properties
