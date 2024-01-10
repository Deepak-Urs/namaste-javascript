const p1 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("P1 Success"), 3000);
    //setTimeout(()=> reject("P1 Error"), 2000);
})

const p2 = new Promise((resolve, reject) => {
    //setTimeout(()=> resolve("P2 Success"), 3000);
    setTimeout(()=> reject("P2 Error"), 2000);
})

const p3 = new Promise((resolve, reject) => {
    //setTimeout(()=> resolve("P3 Success"), 3000);
    setTimeout(()=> reject("P3 Error"), 2000);
})


// PROMISE APIs

// 1. promise.all()             ----> fail-fast technique at nth time
//console.log("Promise.all() demo");
//Promise.all([p1, p2, p3]).then(res=> {
//    console.log(res);
//})
//.catch((err) => {
//    console.error(err);
//})
//console.log("-----------");

// 2. promise.allSettled()      ----> return partial-results at nth time
//console.log("Promise.allSettled() demo");
//Promise.allSettled([p1, p2, p3]).then(res=> {
//    console.log(res);
//})
//.catch((err) => {
//    console.error(err);
//})
//console.log("-----------");



// 3. promise.race()            ----> returns first settled result       
//console.log("Promise.race() demo");
//Promise.race([p1, p2, p3]).then(res=> {
//    console.log(res);
//})
//.catch((err) => {
//    console.error(err);
//})
//console.log("-----------");


// 4. promise.any()             ----> returns first resolved result
console.log("Promise.any() demo");
Promise.any([p1, p2, p3]).then(res=> {
    console.log(res);
})
.catch((err) => {
    console.error(err);
})
console.log("-----------");