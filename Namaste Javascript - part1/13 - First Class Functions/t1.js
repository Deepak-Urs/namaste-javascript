//fn defn aka fn statement
function a() {
    console.log('hello world!');
}
a()

//fn expression
var b = function() {
    console.log('function expression, it has an anonymous function assigned to it');
}
b()

// named fn expression
var b = function xyz() {
    console.log('fn expression, it has a named fn assigned to it');
}
b()
//xyz() --> this does not work

// parameters and args:
function q(p1, p2) {
    console.log(p1, p2);
}
q('a1', 'a2')



//first class functions
var b = function xyz(p1) {
    console.log('example of first class functions', p1);
}
b(function test(){console.log('first class function')})