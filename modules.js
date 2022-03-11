//CJS , ESM are used to improve modularity of the code
//CJS --> Common JavaScript
//node uses CJS module format
//const doSomething = require("./node_modules/node-fetch") -->Importing in CJS
// module.exports = function add(){return 1+1}
//When CJS imports, it will give a copy of the imported object

//ESM stands for ES modules
//Asynchronous in nature
//import React from 'react
//export default function(){...}

//for a default export, the paricular function/variable can be exported only once per module
//for default import(values that are exported as default) curly braces are not necessary
const fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });
