//promise chaining
const taskOne = (callback) => {
    console.log('Task 1');
    callback();
};

const taskTwo = (callback) => {
        console.log('Task 2 ')
        callback()
}
const taskThree = (callback) => {
    console.log('Task 3');
    callback();
}
const taskFour = (callback) => {
    console.log('Task 4')
    callback();
}
const taskFive = () => {
    console.log('Task 5')
}

taskOne(()=>{
    taskTwo(()=>{
       taskThree(()=>{
        taskFour(()=>{
            taskFive();
        })
       })
    })
})