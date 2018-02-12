var hello = require('./hello.js');
hello.world();
hello.test(3);
hello.printMyInfo(25,"lixiaoqiang");
var area = hello.area(5);
console.log(area);

function Person (name){
    this.name = name;
    this.eat = function(){
        console.log(this.name+"eat");
    }
}
Person.prototype.run = function(){
    console.log(this.name + 'running');
}

var p1 = new Person('leo');
p1.run();
p1.eat();
console.log(global.a);