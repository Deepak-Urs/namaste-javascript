// Javascript(JS) is a synchronous single threaded language
// Everything in JS works in an 'Execution Context' [EPCRM]

// sample program
var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
console.log(square(2));
console.log(square(4));



//HOISTING

// sample program:
// Namaste JS!
// 9
// function a1() {
//    console.log("Namaste JS!");
//}

var x = 9;
function a1() {
    console.log("Namaste JS!");
}

a1();
console.log(x);
console.log(a1);


// hoisting #1
// Namaste JS!
// undefined
// function a1() {
//    console.log("Namaste JS!");
//}

a1();
console.log(x);
console.log(a1);

var x = 9;
function a1() {
    console.log("Namaste JS!");
}


// hoisting #2
// Namaste JS!
// UNKNOWN REFERENCE ERROR
a1();
console.log(x);
console.log(a1);

function a1() {
    console.log("Namaste JS!");
}

// hoisting #3
// TYPE ERROR: a1 is not a function

a1();
console.log(x);
console.log(a1);

var x = 9;
var a1 = function() {
    console.log("Namaste JS!");
}