// Example 1
console.log(a);
var a = 7;
console.log(a);
//undefined
//7

// Example 2
var b;
if(b === undefined) {
    console.log('b is undefined');
}
else {
    console.log('b is NOT undefined');
}
//b is undefined

// Example 3
var c;
console.log(c);
c = 10;
console.log(c);
c = 'Hello world!';
console.log(c);
//undefined
//10
//Hello world!

// Example 4
var d = undefined
console.log(d);
// undefined
// Avoid this practice of assigning undefined values