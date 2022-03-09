//Asynchronous Javascript
//setTimeout
//setTimeout() returs the timeoutID-->which can be passed to clearTimeout() to cancel the timeout
setTimeout(() => {
  console.log("callback executed after 2 seconds");
}, 2000);

//To call a function, every N milliseconds setInterval() can be used
count = 1;
var interval_id = setInterval(() => {
  console.log("Called every one second");
  if (count == 5) {
    clearInterval(interval_id);
  }
  count++;
}, 1000);

//callback functions
//functions that are passed to other functions
//the function to which the function has been passed will call this passed function sometime later
//Hence they are named as callback functions

//A promise ""object" represents the completion or failure of an asynchronous operation
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Failure");
  });

//async functions are used to prevent usage of promise chaining therby making the code look more like synchronous code
async function a() {
  console.log("Async-await");
  const res = await promise1;
  console.log(
    "This line will be executed only after the previous line finishes execution"
  );
  console.log("end of await: " + res);
}

a();
