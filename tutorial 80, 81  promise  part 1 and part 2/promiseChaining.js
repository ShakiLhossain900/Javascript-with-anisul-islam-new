//promise chaining
//async function 
//Synchronous = happens at the same time. Asynchronous = doesn't happen at the same time
const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task -> one is not completed");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
     setTimeout(() =>{
        resolve("task -> two is completed");
     },2000)
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    resolve("task -> Three is completed");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task -> Four is completed");
  });
};

taskOne()
.then((res) => {console.log(res)})
.then(taskTwo)
.then(res => {console.log(res)})
.then(taskThree)
.then(res => {console.log(res)})
.then(taskFour)
.then(res => {console.log(res)})
.catch((error) => {console.log(error)})
