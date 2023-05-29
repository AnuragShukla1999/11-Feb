const descrementBtn = document.getElementById("descrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const displayValue = document.getElementById("displayValue");
const resetBtn = document.getElementById("resetBtn");

descrementBtn.addEventListener("click", ()=> {
    const value = Number(displayValue.innerText)
    if(value > 0){
        displayValue.innerText = value - 1;
    } else{
        alert("Negative value not allowed")
    }
});

incrementBtn.addEventListener("click", ()=> {
    const value = Number(displayValue.innerText)
    if(value >= 10) {
        alert("10+ value not allowed");
    } else{
        displayValue.innerText = value + 1;
    }
});

resetBtn.addEventListener("click", ()=>{
    displayValue.innerText = "0";
})