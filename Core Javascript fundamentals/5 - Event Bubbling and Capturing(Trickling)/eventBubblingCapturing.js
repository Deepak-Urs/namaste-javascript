//ex1: Bubbling
document.querySelector('#grandparent').
addEventListener('click', () => {
    console.log('Grandparent called!')
})

document.querySelector('#parent').
addEventListener('click', () => {
    console.log('Parent called!')
})

document.querySelector('#child').
addEventListener('click', () => {
    console.log('Child called!')
})


//ex2: Capturing
document.querySelector('#grandparent').
addEventListener('click', () => {
    console.log('Grandparent called!')
}, true)

document.querySelector('#parent').
addEventListener('click', () => {
    console.log('Parent called!')
}, true)

document.querySelector('#child').
addEventListener('click', () => {
    console.log('Child called!')
}, true)


//ex3: Combination-1: Click the CHILD
document.querySelector('#grandparent').
addEventListener('click', () => {
    console.log('Grandparent called!')
}, true)

document.querySelector('#parent').
addEventListener('click', () => {
    console.log('Parent called!')
}, false)

document.querySelector('#child').
addEventListener('click', () => {
    console.log('Child called!')
}, true)
// O/P--> GP, C, P

//ex4: Combination-2: Click CHILD
document.querySelector('#grandparent').
addEventListener('click', () => {
    console.log('Grandparent called!')
}, true)

document.querySelector('#parent').
addEventListener('click', () => {
    console.log('Parent called!')
}, false)

document.querySelector('#child').
addEventListener('click', () => {
    console.log('Child called!')
}, false)
// O/P--> GP, C, P

//ex5: stopPropagation -- Case1: Click CHILD
document.querySelector('#grandparent').
addEventListener('click', (e) => {
    console.log('Grandparent called!')
}, false)

document.querySelector('#parent').
addEventListener('click', (e) => {
    console.log('Parent called!')
    e.stopPropagation();
}, false)

document.querySelector('#child').
addEventListener('click', (e) => {
    console.log('Child called!')
}, false)
// O/P --> C, P

//ex6: stopPropagation -- Case2
document.querySelector('#grandparent').
addEventListener('click', (e) => {
    console.log('Grandparent called!')
    e.stopPropagation();
}, true)


document.querySelector('#parent').
addEventListener('click', (e) => {
    console.log('Parent called!')
}, true)

document.querySelector('#child').
addEventListener('click', (e) => {
    console.log('Child called!')
}, true)
// O/P --> GP
