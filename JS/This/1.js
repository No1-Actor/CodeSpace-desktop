// console.log(this);

// var a = 1
// console.log(window.a);

// 函数identify，返回this.name转换为大写
function identify() {
    return this.name.toUpperCase()      //toUpperCase将小写字符串转换为大写
}

//函数speek，返回一个问候语
function speek() {
    var greeting = "hello, I'am " + identify.call(this)
    console.log(greeting);
}

//定义一个me对象，name属性值为'Tom'
var me = {
    name: 'Tom'
}

//定义一个you对象，name属性值为'Jerry'
var you = {
    name: 'Jerry'
}

//console.log(identify());
//speek.call(me)
//调用speek函数，传入me对象
speek.call(me)