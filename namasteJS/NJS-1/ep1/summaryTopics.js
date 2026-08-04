// 1a
function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}

//outer()();


// 1b
function outer() {
    function inner() {
        console.log(a);
    }
    var a = 10;
    return inner;
}

//outer()();


// 1c
function outer1(b) {
    function inner1() {
        console.log(a, b);
    }
    let a = 10;
    return inner1;
}
//outer1("sample param")();


// 1d
function outest11(){
    var c = 15;
    function outer11(b) {
        function inner11() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner11;
    }
    return outer11;
}
//outest11()(12)();


// 1e
function outest11(){
    var c = 15;
    function outer11(b) {
        function inner11() {
            console.log(a, b, c);
        }
        //let a = 10;
        return inner11;
    }
    return outer11;
}
let a = 100;
//outest11()(12)();



// data hiding OR abstraction
function counter() {
    var count = 0;
    return function incrementCounter() {
        //console.log(count);
        count++;
        console.log(count);
    }
}
var c1 = counter();
//c1();
//c1();
//c1();
//c1();


function Counter() {
    var count = 0;
    this.incrementCounter = function(){
        //console.log(count);
        count++;
        console.log(count);
    }

    this.decrementCounter = function(){
        //console.log(count);
        count--;
        console.log(count);
    }
}
var c1 = new Counter();
c1.incrementCounter();
c1.incrementCounter();
c1.incrementCounter();
c1.decrementCounter();
c1.decrementCounter();


// garbage collection and closures
function a1() {
    var x = 19, z = 20;
    return function() {
        console.log(x);
    }
}
var y = a1();
y();