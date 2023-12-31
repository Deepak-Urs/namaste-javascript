// LocalStorage operations

// setter and getter
localStorage.setItem('key', 'value');
localStorage.getItem('key');

// deletion operations
localStorage.removeItem('key');
localStorage.clear(); // clears all storage

// JSON parsing since we have all the data stored in string form
tj = {
    fname: 'Deepak',
    lname: 'Urs'
}
localStorage.setItem('j1', JSON.stringify(tj))
console.log(JSON.parse(localStorage.getItem('j1')));