console.log('t1.js linked!');

document.querySelector('#category').addEventListener('click', (e) => {
    console.log(e);

    // event delgation
    if(e.target.tagName == 'LI') {
        e.target.style.color = 'purple'
    }

    if(e.target.tagName == 'LI') {
        window.location.href = e.target.tagName
    }

})


// BEHAVIOR PATTERN RECOGNITION VIA EVENT DELEGATION
document.querySelector('#textdata').addEventListener('keyup', (e) => {
    if(e.target.dataset.lowercase !== undefined) {
        e.target.value = e.target.value.toLowerCase()
    }

    if(e.target.dataset.hide !== undefined) {
        let temp = ''
        for(let i =0; i < e.target.value.length; i++) {
            temp += '*'
        }
        e.target.value = temp
    }
})