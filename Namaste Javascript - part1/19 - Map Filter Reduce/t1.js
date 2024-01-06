// Map
var arr= [1,2,3,4]

var op1 = arr.map(function binary(x) { return x.toString(2)})
function binary2(x) { return x.toString(2)}
var op2 = arr.map(binary2)

var op3 = arr.map((x) => {return x.toString(2)})
var op4 = arr.map((x) => x.toString(2))

console.log(op1);
console.log(op2);
console.log(op3);
console.log(op4);


// Reduce
var arrF = [1,2,3,4]
var opF1 = arrF.filter(function (x){ return x%2 == 0});
var opF2 = arrF.filter(x => x > 2);
console.log(opF1);
console.log(opF2);


var arrR = [5,1,3,9,6]
var opR1 = arrR.reduce(function (acc, cur) {
    acc += cur;
    return acc
}, 0)
var opR2 = arrR.reduce((a,c) => a += c)
var opR3 = arrR.reduce((a,c) => {
    if(a < c){
        a = c
    }
    return a
}, 0)
var opR3 = arrR.reduce((a,c) => a > c ? a : a = c, 0)

console.log(opR1);
console.log(opR2);
console.log(opR3);

const users = [
    { firstName: "a", lastName: "s", age: 26},
    { firstName: "b", lastName: "t", age: 75},
    { firstName: "c", lastName: "u", age: 50},
    { firstName: "d", lastName: "v", age: 26}
]

// Map to find full names of users array
var op1 = users.map(x => x.firstName + ' ' + x.lastName);
console.log(op1);

// Filter to filter out the people with age = 26
var op2 = users.filter(x => x.age == 26)
console.log(op2);

// Get a hashmap to find the category of different aged people
var op3 = users.reduce((a,c) => {
    if(c.age in a) {
        a[c.age] += 1
    }
    else{
        a[c.age] = 1
    }
    return a
}, {})
console.log(op3);

// firstName of all the people whose age is > 30
var op4 = users.filter(x => x.age > 30).map(i => i.firstName)
console.log(op4);

var op5 = users.reduce((a, c) => {
    if(c.age > 30) {
        a.push(c.firstName)
    }
    return a
}, [])
console.log(op5);