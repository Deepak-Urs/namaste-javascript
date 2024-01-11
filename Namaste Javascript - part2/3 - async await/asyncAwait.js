// Async scenario - 1
async function getData() {
    return "Namaste JS"
}

getData().then((res) => {
    console.log(res);
})

// Async scenario - 2
const p = new Promise(function(resolve, reject) {
    resolve('Resolved Value of a Promise!')
})

async function getData2() {
    console.log(typeof(p));
    return p
}

getData2().then((res) => {
    console.log(res);
})



// // //// ////////////////
// 2. Order of execution
console.log('// 2. Order of execution');
const pe = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Promise resolved!'), 5000)
})

// a) Regular handling
console.log('// a) Regular handling');
function getData21() {
    pe.then(res => console.log(res));
    console.log('Namaste JS-1');
}
getData21()


// b) async await
console.log('// b) async await');
const getData22 = async () => {
    const val = await pe;
    console.log(val);
    console.log('Namaste JS-2');
}
getData22()


// (1) Multiple promises
const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Promise resolved!'), 5000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Promise resolved!'), 10000)
})

// if p1 = 5s and p2 = 10s
async function getData211() {
    console.log('Hello World!');

    const v1 = await p1;
    console.log('Namaste JS-1');
    console.log(v1);

    const v2 = await p2;
    console.log('Namaste JS-2');
    console.log(v2);
}
getData211()
// Hello World!
// Promise resolved!
// Namaste JS-1         ----> after 5s
// Promise resolved!
// Namaste JS-2         ----> after 10s


// if p1 = 10s and p2 = 5s
// Hello World!
// Promise resolved!
// Namaste JS-1         ----> after 10s
// Promise resolved!
// Namaste JS-2         ----> after 10s