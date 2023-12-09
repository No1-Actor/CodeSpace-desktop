function foo(n, m) {
    console.log(this.a, n, m);
}

var obj1 = {
    a: 2
}
var obj2 = {
    a: 3
}
// this 显示绑定
foo.call(obj1, 100, 200)
foo.apply(obj2, [100, 200]) // apply 要用数组类型接收
var bind = foo.bind(obj1, 100, 200) // bind 返回一个函数体，执行需调用这个函数
bind()