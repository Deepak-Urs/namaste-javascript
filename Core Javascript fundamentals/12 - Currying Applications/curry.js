// Curry Implementation
//const add = (a, b) => {
//    return a + b
//}

//const curry = (func) => {
//    return function curried(...args) {
//        if(args.length >= func.length) {
//            return func.apply(this, args)
//        }

//        return (arg) => arg === undefined ? curried.apply(this, args) : curried.apply(this, [...args, arg])
//    }
//}

//const sum = curry(add)
//console.log(sum(1)(2))

let sum = function (a){
    return function(b) {
        if(b) {
            return sum(a+b)
        }
        return a
    }
}

// ES6
let sum2 = (a) => (b) => b ? sum2(a+b) : a


console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)())
console.log(sum2(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)())