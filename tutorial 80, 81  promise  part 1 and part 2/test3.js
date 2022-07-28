// //promise is always async
// console.log("welcome");

// const promise1 = new Promise((resolve, reject) => {
//   let completedPromise = true;
//   if (completedPromise) {
//     setTimeout(() => {
//       resolve("completed Promise 1");
//     }, 2000);
//   } else {
//     reject(new Error("Not promise 1 completed"));
//   }
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("completed Promise 2");
//   }, 1000);
// });

// //race jar time kom take niye kaj korbe and take age dekhiye debe output y
// Promise.race([promise1, promise2]).then((res) => console.log(res));

// //at the same time we can call the promise

// // Promise.all([promise1, promise2]).then(([res1, res2]) =>
// //   console.log(res1, res2)
// // );

// // promise1
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((err) => {
// //     console.log(err.message);
// //   });

// console.log("end");
