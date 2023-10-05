// ex1: using bind()
console.log('\n ex1: using Bind')
let multiply = function (x,y) {
    console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(3)

let multiplyBy2 = multiply.bind(this)
multiplyBy2(2, 3)

//but
let multiplyb2 = multiply.bind(this, 2, 3)
multiplyb2(5)

// another sample
let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(6)

// ex2: using Closures
console.log('\n ex2: using Closures')
let multiplyClosure = function (x) {
    return function(y) {
        console.log(x * y);
    }
}

let mcTwo = multiplyClosure(2)
mcTwo(5)

let mcThree = multiplyClosure(3)
mcThree(6)
