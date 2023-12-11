let input = document.querySelector("#input")
let rough = document.querySelector('#rough')

let arr = []
let str = ''

function btn(arg) {
    // input.value += arg
    rough.value += arg
}

function del() {
    let demo = rough.value
    console.log(typeof demo);
    arr = demo.split("")
    arr.pop()
    str = arr.join("")
    rough.value = str
}

function ac() {
    input.value = ""
    rough.value = ""
}


function key(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/') {

        rough.value += event.key;
    }

    if (event.key == 'Backspace') {
        let demo = rough.value
        arr = demo.split("")
        arr.pop()
        str = arr.join("")
        rough.value = str
    }

    if (event.key == 'Enter') {
        input.value = eval(rough.value)
    }


}

function equal(arg) {
    if (rough.value) {
        input.value = eval(rough.value)
    }
    else {
        input.value = arg
    }
    rough.value = ""
}
