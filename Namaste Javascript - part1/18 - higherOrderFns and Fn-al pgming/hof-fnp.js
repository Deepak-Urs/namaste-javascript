//// ex-1

function x() {
    console.log('x');
}
function y(x) {
    console.log(x);
}
y()

// functional programming:
const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius) {
    return Math.PI * radius
}

const diameter = function (radius) {
    return 2 * radius
}

const calculate = function (radiusList, logic) {
    const output = []
    for(let i=0; i< radiusList.length; i++) {
        output.push(logic(radiusList[i]))
    }
    return output
}

radiuss = [3,1,2,4]
console.log(calculate(radiuss, diameter))
console.log(calculate(radiuss, circumference))
console.log(calculate(radiuss, area))

// ex-3:
Array.prototype.calculateCustom = function (logic) {
    const output = []
    for(let i=0; i< this.length; i++) {
        output.push(logic(this[i]))
    }
    return output
}
console.log('calculateCustom being used');
console.log(radiuss.calculateCustom(area))

// ex-4
Array.prototype.mapC = function (logic) {
    const op = []
    for(let i=0; i< this.length; i++) {
        op.push(logic(this[i]))
    }
    return op
}
console.log('polyfill mapC being used');
console.log(radiuss.mapC(area))