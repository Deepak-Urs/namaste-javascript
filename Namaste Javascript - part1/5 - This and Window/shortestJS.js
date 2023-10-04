var a = 10

function b() {
    var x = 100
}

console.log(window.a);
console.log(this.a);
console.log(a);

console.log(this === window);