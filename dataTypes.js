//Primitive DataTypes, Strings

console.log(typeof 5);
console.log(typeof new Number(5));
console.log(1 / 0);
var a = 7;
console.log(a.toString(2)); //converts to binary

//Strings
function add(a, b) {
  return a + b;
}
console.log(`The sum of 5 and 10 is ${add(5, 10)}`);
let message = "Good Morning";
console.log(message.length); //length property returns length of the string
console.log(message.charAt(0));
message[0] = "A"; //strings are immutable, hence the change will not be reflected
console.log(message);
str = message;
str = "Hello";
console.log(str); //since strings are not objects but primitive data types,
//they do not share the same memory location, hence the changes arenot reflected in the other string
console.log(message.indexOf("Z")); //returns -1 since it is not there in the string
console.log(message.indexOf("d")); //returns 3
//Getting a substring from a string
console.log(message.slice(2)); //returns characters after 2nd index
console.log(message.slice(0, 5)); //returns characters from 0 to 4th index(5 not included)
console.log(message.slice(-7, -1)); //starts from reverse //7th character to character before last //-1 exclusive
console.log(message.substring(0, 5));
