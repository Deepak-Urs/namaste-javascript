// callback functions

setTimeout(() => { console.log('callback function inside setTimeout'), 1000})


function updateCounter() {
    let count = 0
    document.getElementById('btn').addEventListener('click', () => {console.log(count++)});
}
updateCounter()