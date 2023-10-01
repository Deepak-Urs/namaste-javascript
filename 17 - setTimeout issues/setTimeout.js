console.log('Start');

setTimeout(function cb() {
    console.log('CB called after 5 seconds');
}, 5000)

//mimicing million of lines of code execution
let startDate = new Date().getTime()
let endDate = startDate
while(endDate < startDate + 10000) {
    endDate = new Date().getTime()
}
console.log('While Loop done!');

function setTimeoutZero() {
    console.log('Start setTimeoutZero');

    setTimeout(function cb() {
        console.log('CB called after 0 seconds');
    }, 0)

    console.log('End setTimeoutZero');
}
setTimeoutZero()