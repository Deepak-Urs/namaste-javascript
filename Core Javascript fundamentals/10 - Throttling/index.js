var counter = 0
const expensive = () => {
    console.log('expensive call --', ++counter);
}

const throttle = (fn, lt) => {
    let flag = true
    return function (...arguments) {
        let context = this
        args = arguments
        if (flag) {
            fn.apply(context, arguments);
            flag = false
            setTimeout(() => {
                flag = true
            }, lt)
        }
    }
}


const betterExpensive = throttle(expensive, 250)


window.addEventListener('resize', betterExpensive)