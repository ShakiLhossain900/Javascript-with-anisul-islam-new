//promise chaining
//async function
//Synchronous = happens at the same time. Asynchronous = doesn't happen at the same time
const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task -> one is completed");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task -> two is completed");
    }, 2000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    reject("task -> Three is not completed");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task -> Four is completed");
  });
};

//async await

// async function callAllTasks (){
const callAllTasks = async () => {
  //this async await is mostly work if t1 is completed the it will run for t2

  try {
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
  } catch (e) {
    console.log(e);
  }
};

callAllTasks();

//promise chaining er modde call koreci
// taskOne()
// .then((res) => {console.log(res)})
// .then(taskTwo)
// .then(res => {console.log(res)})
// .then(taskThree)
// .then(res => {console.log(res)})
// .then(taskFour)
// .then(res => {console.log(res)})
// .catch((error) => {console.log(error)})
