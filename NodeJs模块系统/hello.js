const {PI} = Math;
//不带参数的方法
function hello(){
    console.log("hello world");
}
//带参数方法，
function test1(i){
    console.log(i);
}
//方法带多个参数
function printMyInfo(age,name){
    console.log("我的名字是"+name+"我的年龄是"+age);
}
global.a = 200;
exports.area = (r) => PI * r ** 2;
exports.world = hello;
exports.test= test1;
exports.printMyInfo = printMyInfo;