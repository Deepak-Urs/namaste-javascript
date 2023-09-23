function a() {
    var b = 10
    c()
    function c() {
        console.log(b);
    }
}

var d = 100
a()

// 10