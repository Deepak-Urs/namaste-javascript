let count = 0

const getData = () => {
    count++;
    console.log('Getting the data for the', count, 'th time! WRT search char length of-', document.getElementById('textId').value.length);
}

const debounce = function(fn, delay) {
    let timer;
    return function() {
        context = this
        args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
    
}

const betterFunction = debounce(getData, 300)