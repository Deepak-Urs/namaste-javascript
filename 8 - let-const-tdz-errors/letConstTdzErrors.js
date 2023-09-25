// Ex-1
console.log(a);
console.log(b);
let a = 10;
var b = 100;
//console.log(a);
//            ^
//ReferenceError: Cannot access 'a' before initialization

//// Ex-2
console.log(d);
const d = 100;
//console.log(d);
//            ^

//ReferenceError: Cannot access 'd' before initialization

// Ex-3
console.log(e);
var e = 1
console.log(e);
e = 10;
console.log(e);
//undefined
//1
//10

//// Ex-4
console.log(x);
var f = 10
//console.log(x);
//            ^

//ReferenceError: x is not defined

// Ex-5
let g = 100
let g = 1000
//let g = 1000
    //^

//SyntaxError: Identifier 'g' has already been declared

//// Ex-6
const b = 100;
b = 1;
//b = 1;
//  ^

//TypeError: Assignment to constant variable.
