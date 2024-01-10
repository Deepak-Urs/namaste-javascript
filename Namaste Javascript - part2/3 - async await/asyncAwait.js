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