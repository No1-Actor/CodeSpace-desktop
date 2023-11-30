// 栈
// let stark = []

// 队列
let queue = [] // 只能用push和shift 先进先出

queue.push('a')  // 向数组的末尾添加一个或多个元素
queue.push('b')
queue.push('c')

while(queue.length) {
  const top = queue[0]
  queue.shift() // 移除数组的第一个元素
  console.log(top)
}