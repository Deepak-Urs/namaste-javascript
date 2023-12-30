console.log('t1 linked!');


count = 1
function getData() {
    count++;
    console.log('Calling data the ', count, '-th time!');
}

const throttle = (fn, d) => {
    let flag = true
    return function(...arguments) {
        let context = this
        let args = arguments

        if(flag){
            fn.apply(context, args)
            flag = false

            setTimeout(() => {
                flag = true;
            }, d)
        }
        
    }
}

const betterFunction = throttle(getData, 500)

window.addEventListener('resize', betterFunction);