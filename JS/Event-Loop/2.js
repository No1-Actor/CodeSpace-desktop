console.log('start');

setTimeout(() => {
  console.log('setTimeout');
  setTimeout(() => {
    console.log('inner');
  })
  
  console.log('end');
}, 1000)

new Promise((resolve, reject) => {
  console.log('Promise');
  resolve();
})
// 微任务
.then(() => {
  console.log('then');
})
console.log('end');


// console.log("Start");

// setTimeout(() => {
//   console.log("这是宏任务");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("这是微任务");
// });

// console.log("End");