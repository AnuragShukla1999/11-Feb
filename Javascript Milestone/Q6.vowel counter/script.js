function calculateVowel() {
    const name = document.getElementById("user-input").value;
    const result = document.getElementById("result");
    let count =0;
    for(let i=0; i<name.lenght; i++){
        if(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u"){
            count++;
        }
    }
    result.innerText = count;
}

document.getElementById("btn").addEventListener("click", calculateVowel);