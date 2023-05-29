const btn = document.getElementById("btn");
const randomColor = () => {
    let val = "0123456789ABCDEFG";
    let cons = "#";
    for(i=0; i<6; i++){
        cons += val[Math.floor(Math.random() * 16)];
    }
    return cons;
};

function changeRandomColor (){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("mouseout", changeRandomColor)