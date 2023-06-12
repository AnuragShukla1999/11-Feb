const cel = document.getElementById("cel");
const fer = document.getElementById("fer");
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    let convert = ((cel.value)* 9/5) + 32;
    fer.innerText = `${convert}°F`;
})