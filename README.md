# practice-code
Pushing my practice js code into this respository
```
-->var can allow the same variable to be declared more than once
-->let(ES6) does not allow the same variable to be declared more than once
-->const(ES6) variables are read-only variables
-->increment can be done with ++ in JS(decrement --)
-->"+" operator is also used for concatenation in JS
--> "length" property will return the length of the string literal
-->Eg: name.length (or) "Sharon".length
-->Strings are immutable meaning that particular characters in the string cannot be changed but can be reassigned as a whole
-->Not possible: let myStr = "Bob"; myStr[0] = "J";
-->What is possible : let myStr = "Bob"; myStr = "Job";
-->Multiple datatypes can be stored in a single array
-->We can nest arrays within arrays
-->For eg: [["Bulls", 23], ["White Sox", 45]];
-->const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];//multi-dimensional array
-->arr[3][0][1];//returns 11
--> .push() takes one or more parameters and pushes it to the end of the array
-->Eg: const arr1 = [1,2,3]; -->arr1.push(4);
--> .pop() removes the last element from an array. 
-->The popped element can be assigned to another variable.
--> .shift() is used to pop the first element of the array
--> unshift() works just like push but it pushes to the beginning of the array.
--> eg: unshift("Happy"); will add it to the beginning of the array
-->Local variable always takes precedence over the global variable
-->When return statement is not metioned explicitly, it returns undefined
-->Queue is an abstract data type 
-->arr.shift() for dequeing and arr.push() for enqueing
--> == operator will convert to other data type if they are not of the same type
--> Whereas === does strict comparison without converting to the other type
-->Typeof a variable can be found with the typeof operator
-->Just like == , comparison operator will also convert variable types
-->eg: 7 > '3' //true
-->"else if" statements are avaiable in JS
-->"else if" can be chained
-->switch case values are checked for strict equality ===
-->If else chains can be replaced with switch statements
-->Why switch didn't replace the traditional if-else is because it can check for only strict equality.
-->objects are similar to arrays: separated by comma, instead of index they have propeties
-->properties of objects can be accessed with dot operator
-->They can also be accessed with the help of []
-->eg: const a = obj.a (or) const a = obj["a"]
-->Property names with space must be enclosed in single/double quotes
-->Adding new properties to the object is same as that of modifying a pre-existing property.
-->delete obj.property will delete that particular property from that object.
-->Objects can be used just like a dictionary to store the key value pairs.
-->To check if a property exists in an object, we have to use the .hasOwnProperty(Propname) method of objects.
-->An object can contain another object.
-->Sub-properties of objects can be accessed by chaining the dot operator.
-->variables declared with let is local to the block
-->const just prevents reassigning of the data. 
-->It doesn't prevent arrays declared as const from being modified as individual elements.
-->Object.freeze(object_name) will make the object non-changeable i.e, the properties cannot be changed.


ES6:
-->In arrow function if the function has only one parameter, the bracket enclosing the parameter can be omitted.
-->Eg: const doubler = (item) => item * 2;
-->This can be written as const doubler = item => item * 2; 
-->arr.concat(arr2) will append contents of arr2 to arr
-->default parameter is used when the argument is not passed manually
-->eg:const greeting = (name = "Anonymous") => "Hello " +name;
-->If name is not passed as an argument, "Anonymous" will be used.
-->...args means "rest parameter"
-->It lets the function to take in variable number of arguments.
-->These arguments are stored in an array and they can be used inside the function.
-->function howMany(...args){return "You have passed "+args.length+" arguments.";}
-->array.reduce(callbackFn[,initialValue])
-->A function that is passed into another function as argument is known as callback function.
-->The callback function is usually an anonymous function that is, it does not have any name.
-->Math.max() takes in comma separated arguments. So just passing in array will return NaN
-->Hence the ...(spread operator) is used to unpack the array into comma separated values.
-->const arr1 = ['JAN','FEB'];
-->let arr2;
-->arr2 = [...arr1];
-->console.log(arr2); //will return the arr1 contents
-->Destructuring assignment
-->const user = { name: 'John Doe', age: 34 };
-->const name = user.name;
-->const age = user.age;
-->This can be replaced with:
-->const { name, age } = user;
-->const {today:highToday(new name),tomorrow:highTomorrow} = HIGH_TEMPERATURES;//can give userdefined names
-->class className{
-->constructor(para){
-->this.property = para;
-->}}
-->const obj = new className(args); //this will create an object for the class
-->Inside an object, if we call the this keyword inside a method, it will refer to the name of that object.
-->Simply calling this will refer to the global object.
-->  const person = {
-->  firstName: "John",
-->  lastName : "Doe",
-->  id       : 5566,
-->  fullName : function() {
-->    return this.firstName + " " + this.lastName;
-->  }
-->};
-->


OBJECTS:--------------
-->Creating an object with object literal will cause changes in one instance of the object to be reflected in all the instances.
-->While creating with new() does not reflect the changes in all the instances.
-->In multi-word properties, the dot operator does not work.
-->let bag = {
-->[fruit]: 5,//computed properties
-->};//take the name of key from the fruit vaiable
-->If 0 is used as a property, it will be automatically converted into a string "0"
-->Find if a property exists:
-->user.name === undefined //true means no such property//doesn't work when the user.name exists and is set to undefined
-->alert("age" in user); //true, user.age exists
-->iterate over keys in object "i in obj"
-->functions are stored in objects just like key-value pairs
-->sayHi: function(){}
-->(or) sayHi(){}
-->Garbage Collection in JavaScript is known as Mark-and-Sweep
-->All objects except marked ones are removed.
-->GC cannot be forced or prevented in JS
-->typeof new Number(0)//object
-->Primitives are not objects//strings are not objects

FUNCTIONS:-----------------
-->Parameters are passed into the functions as values.
-->If object is passed as a parameter and the function changes the value the property,
the changes will be reflected outside of the function as well.
-->function declration loads before any code is executed 
-->Function expressions are executed only when that line is reached by interpreter
-->Function expressions need not have any name, they can be called with the variable name in which they are stored
-->The value of the parameters by default is "undefined"
-->rest parameter allows to represent an indefinite number of arguments as an array.
-->If a function is a part of an object, it is known as a method


call():
-->This is used to borrow methods from other objects.
-->borrow_from_object.function_to_be_borrowed.call(borrowing_object);
-->changes the 'this' reference to the object specified in the bracket

Linting:
-->Linting is the process of making the code consistent and avoiding bugs.
-->To execute linting in a file:
-->npm install eslint --save-dev//installing
-->npm init @eslintconfig //assumes that package.json file is already present
-->if just want to run it on a file
-->npm init
-->npx eslint file_name.js

Rome
-->Has better linting features
-->It provides information on how to fix the error
-->issues can be resolved in CLI itself


-->"npm init -y" will create a package.json file

MODULE BUNDLERS:-------------------------------
-->Most of the dependencies use CJS syntax which isn't going to work with ESM syntax.
-->npm init -y-->will create a package.json file in that folder
-->npm install lodash-->creates node modules and add lodash to dependency object in package.json
-->create index.html file in public folder in main folder. Create a boiler plate code for html and then include the path of the js file in the script scr tag.
-->browser doesn't know how to resolve the lodash code
-->in other words, we are asking it to find something which it has no idea where to find
-->there is where something like webpack can help us out
-->To use it we need to install it as a development dependency "npm install --save-dev webpack webpack-cli"
-->include "build":"webpack" in scripts object of the package.json for production
-->run webpack by running the command "npm run build" from command line
-->webpack will anayse the code in the index.js file and then compile it to a dist/main.js file which is our production code.
--> Production code is the code that is shipped to the end user in the browser
-->Now in index.html change the path of the scr to main.js file of dist
-->But right now it is the default webpack config
-->it looks for the source index.js file, if the file name is something else, this won't work
-->In most cases, we will want to customize the behavior of the webpack
-->In that case we can create a webpack.config.js
-->It is a module which exports an object that customises the behavior of the webpack
-->import sass file in index.js file so that it is made known to the webpack
-->trying to compile this file will throw an error that no loader has been configured to process this file
-->In webpack loader is used to preprocess a file that aren't JS
-->npm install --save-dev css-loader style-loader sass-loader
-->in webpack.config file, create an object called module, that assigns some rules for which loader to process which files
-->so now when we have defined which loader is for which file, scss will be processed to normal css and then to js so that it is eventually injected into an HTML page

-->Assigning same value to all the objects of the function constructor can be done with the help of prototype
-->eg: Person.prototype.age = 20

```
