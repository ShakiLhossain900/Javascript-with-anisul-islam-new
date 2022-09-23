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
        reject("task -> three is not completed");
    });
};

const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("task -> four is completed");
    })
}

// totokkhoon move kortece na jotokkhon tar kaj ses na hocce 
const callAllTasks = async () => {
 
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