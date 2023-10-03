// DATA-1
numbers = [5, 1, 3, 2, 4]

// ex1: map
function double(x) {
    return x * 2
}

function triple(x) {
    return x * 3
}

let res = numbers.map(double);
console.log('result-double', res);
res = numbers.map(triple);
console.log('result-triple', res);

// ex2: filter
//filter out values greater than or equal to 3
function helper(x) {
    return x >= 3
}
console.log(numbers.filter(helper))

// ex3: reduce
// get the max value of an array (unique result)
res = numbers.reduce(function (acc, curr) {
    if(acc < curr){
        acc = curr
    }
    return acc
}, 0)
console.log('max value', res);

// NOTE the above translation in simple code:
//function findMax(arr) {
//    let max = 0;
//    for (let i = 0; i < array.length; i++) {
//        if(max < arr[i]) {
//            max = arr[i]
//        }   
//    }
//}
//res = findMax(arr)


// DATA-2
const users = [
    { firstName: "a", lastName: "s", age: 26},
    { firstName: "b", lastName: "t", age: 75},
    { firstName: "c", lastName: "u", age: 50},
    { firstName: "d", lastName: "v", age: 26}
]

// ex4: map
// map() to get the fullname out of the users array
res = users.map( (i) => i.firstName + " " + i.lastName)
console.log('Mapped fullName', res);

// ex5: reduce
// reduce() to get the count of each age count
res = users.reduce(function (acc, curr) {
    if(acc[curr.age]) {
        acc[curr.age] += 1
    }
    else {
        acc[curr.age] = 1
    }
    return acc
}, {})
console.log('Reduce - count object', res)

// ex6: map
// map filter chaining to get the result
// get the firstName of the person whose age is 50
res = users.filter(i => i.age == 50).map(e => e.firstName)
console.log('chained result - firstName ', res);