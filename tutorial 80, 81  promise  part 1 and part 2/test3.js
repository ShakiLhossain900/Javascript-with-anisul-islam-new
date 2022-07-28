//promise is always async
console.log("welcome");

const promise1 = new Promise((resolve, reject) => {
  let completedPromise = false;
  if (completedPromise) {
    resolve("completed Promise 1");
  } else {
    reject(new Error("Not promise 1 completed"));
  }
});






promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log("end");

