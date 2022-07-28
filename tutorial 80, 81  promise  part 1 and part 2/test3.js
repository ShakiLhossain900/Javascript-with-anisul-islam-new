console.log("welcome");


const promise1 = new Promise((resolve, reject) =>{

  let completedPromise = false;
  if (completedPromise ){
    resolve("completed Promise 1");
  }
  else{
    reject("Not promise 1 completed")
  }

});

// console.log(promise1)

promise1.then((res) => {
  console.log(res)
})
.catch((err) => {
  console.log(err)
})



console.log("end")

//target for todays work promise will be done and async and awit will be complete