// creating the promise for async and await operations

const taskOne = () => {
    return new Promise((resolve, reject) =>{
        resolve("task -> one is completed");
    })
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
        reject("task -> three is completed");
    });
};

const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("task -> four is completed");
    })
}