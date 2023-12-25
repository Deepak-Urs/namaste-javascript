// function currying

//using bind
function multiply(a, b) {
    console.log(a*b);
}

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(3)

let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(3)


// using the closures

function multiplyByClosure(a) {
    return function(b) {
        console.log(a*b);
    }
}

let multiplyByFive = multiplyByClosure(2)
multiplyByFive(5)

let multiplyBySeven = multiplyByClosure(7)
multiplyBySeven(5)