//higher order function
function x() {
    console.log('inner function');
}

const y = () => {
    x()
    return function() {
        console.log('outer function');
    }
}

z = y()
z()

// Functional programming

const area = (r) => {return r*r;}
const circumference = (r) => parseFloat((2 * Math.PI * r).toFixed(4));
function diameter(r){ 
    return 2 * r 
}

const calculate = (radiusList, fn) => {
    op = []
    for(let i = 0; i< radiusList.length; i++) {
        op.push(fn(radiusList[i]))
    }
    return op
}

arr = [1,2,3,4]
console.log(calculate(arr, area));
console.log(calculate(arr, circumference));
console.log(calculate(arr, diameter));
