console.log("welcome");


const promise1 = new Promise((resolve, reject) =>{

  let completedPromise = true;
  if (completedPromise ){
    resolve("completed Promise 1");
  }
  else{
    reject("Not promise 1 completed")
  }

});

promise1.then()

console.log("end")