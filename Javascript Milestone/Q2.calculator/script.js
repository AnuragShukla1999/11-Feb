// This function clear all the values
function clearScreen() {
    document.getElementById("display").value = "";
    }
    
    // This function display values
    function cal(value) {
    document.getElementById("display").value += value;
    }
    
    // This function evaluates the expression and returns display
    function calculate() {
    let p = document.getElementById("display").value;
    let q = eval(p);
    document.getElementById("display").value = q;
    }