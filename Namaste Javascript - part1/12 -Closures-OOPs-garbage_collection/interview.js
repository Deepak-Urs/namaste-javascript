// ex-1
// Closures
function Outest() {
    var c = 20
    function outer(b) {
        function inner() {
            var a = 10;
            console.log(a, b, c);
        }
        inner()
    }
    return outer
}

var x = Outest()
x('hello world!')

// ex-2
// Closure application -- Data hiding and encapsulation
function Counter() {
    var count = 1
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}
var fc = new Counter()
fc.incrementCounter()
fc.incrementCounter()
fc.decrementCounter()
var fc2 = new Counter()
fc2.incrementCounter()

// ex-3
// Closures and garbage collection
function q() {
    var a = 5, b = 6;
    function r() {
        console.log(a);
    }
    r()
}
q()