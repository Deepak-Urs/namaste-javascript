console.log("T1.js linked!");

// Event Capturing / Trickling - 1st Priority
//document.getElementById('gp').addEventListener('click', () => {
//    console.log('GP clicked!');
//}, useCapture = true)

//document.getElementById('p').addEventListener('click', () => {
//    console.log('P clicked!');
//}, true)

//document.getElementById('c').addEventListener('click', () => {
//    console.log('C clicked!');
//}, true)
//GP -> P -> C


// Event Bubbling
//document.getElementById('gp').addEventListener('click', () => {
//    console.log('GP clicked!');
//})

//document.getElementById('p').addEventListener('click', () => {
//    console.log('P clicked!');
//})

//document.getElementById('c').addEventListener('click', () => {
//    console.log('C clicked!');
//})
// C -> P -> GP


document.getElementById('gp').addEventListener('click', () => {
    console.log('GP clicked!');
})

document.getElementById('p').addEventListener('click', () => {
    console.log('P clicked!');
})

document.getElementById('c').addEventListener('click', () => {
    console.log('C clicked!');
})

document.querySelector('#p').addEventListener('click', (e) => {
    console.log('stopPropogation seen');
    e.stopPropagation()
})
// Click Child, we get P,C,GP because E-C/T has first priority