const display = document.getElementById("display")

function addToDisplay(input){
    display.value += input;
}

function clear(){
    display.value = null
}

function calculate(){
    display.value = eval(display.value)
}




