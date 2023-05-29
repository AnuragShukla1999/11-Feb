const display = document.getElementById("display");
const input = document.getElementById("input");

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for(i=0; i<6; i++){
        cons += val[Math.floor(Math.random() * 16)];
    }
    return cons;
};

input.addEventListener("keypress", (e) => {
    display.innerText = `You have pressed ${e.key}`;
    display.style.backgroundColor = randomColor();
    document.body.style.backgroundColor = randomColor();
})