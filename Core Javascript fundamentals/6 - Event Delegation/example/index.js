// ex1
document.querySelector('#category').addEventListener('click', (e) => {
    console.log(e.target.id + ' is clicked!');
    if(e.target.tagName == 'LI'){
        window.location.href = `/${e.target.id}`
    }
})

document.querySelector('#inputsList').addEventListener('keyup', (e) => {
    //console.log(e)
    if(e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase()
    }
    else if(e.target.dataset.lowercase != undefined) {
        e.target.value = e.target.value.toLowerCase()
    }
    else {
        e.target.value = e.target.value.replace(/[a-zA-Z]/g, '*')
    }
})