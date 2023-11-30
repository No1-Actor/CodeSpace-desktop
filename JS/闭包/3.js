// 闭包
function a() {
    function b() {
        console.log(aaa); 
    }
    var aaa = 123
    return b
}
console.log(a()());
