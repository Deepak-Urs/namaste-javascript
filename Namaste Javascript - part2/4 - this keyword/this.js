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
    value: 10,
    x: function(v1, v2) {
        console.log(this.value, v1, v2)
    }
}
console.log('method call')
a.x(); // method call
console.log('fn call-')
a.x('v1', 'v2'); // function call

// overriding of values
const b = {
    value: 20
}

a.x.call(b, 'b1', 'b2')
a.x.apply(b, ['b1', 'b2'])
var t = a.x.bind(b, 'b1', 'b2')
t()

// 'this' and arrow function, enclosing lexical context
const c = {
    a: 10,
    x: () => {
        console.log(this);
    }
}
c.x()
// arrow function is not considered as a method of the object and does not support the 'this' keyword. Thus the above this access leads to the enclosed lexical scope and not the current lexical scope

// ex-2 of above
const d = {
    a: 20,
    x: function () {
        const y = () => {
            console.log(this);
        }
        y()
    }
}
d.x()
// The above will print the object-d as the result. This is because y() is enclosed inside x() and arrow function can be considered to be virtually not present in the current location (as similar to the previous case)/ Since y() is in x() and x() lexical scope is object-d, we see d.x() provide the object-d as answer