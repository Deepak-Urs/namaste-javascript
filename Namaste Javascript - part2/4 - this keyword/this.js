// THIS keyword

"use strict"

//global scope

console.log(this);
//returns a WINDOW object

function x() {
    console.log(this);
}
x()
window.x();

// diff between a function and a method
//console.log('fn call-')
//x(); //--> acting as a simple fn call
//console.log('method call')
//window.x(); //--> acting as a method call of global object


// diff between a function and a method
const a = {
    a: 10,
    x: function() {
        console.log(this)
    }
}
console.log('method call')
a.x(); // method call
console.log('fn call-')
x(); // function call