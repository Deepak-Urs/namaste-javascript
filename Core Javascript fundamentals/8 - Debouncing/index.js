let count = 0
const getData = () => {
    count += 1
    let res = document.getElementById('inputText').value
    console.log("fetched data for --", res)
}

const debouncing = function(fn ,d) {
    let timer;
    return function () {
        let obj = this;
        args = arguments;
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData.apply(obj, args)
        }, d)
    }
}

const betterFunction = debouncing(getData, 750)