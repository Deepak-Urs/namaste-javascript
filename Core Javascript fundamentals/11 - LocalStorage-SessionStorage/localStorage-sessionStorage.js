// general localStorage methods
localStorage.setItem('a', '1')
console.log(localStorage.getItem('a'))
//localStorage.clear()

// localStorage and Object handling
localStorage.setItem('b', JSON.stringify({'a': '1'}))
let res = JSON.parse(localStorage.getItem('b'))
console.log(res)