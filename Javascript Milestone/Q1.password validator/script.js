function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmpassword = document.getElementById("cnfrm-password").value;
    console.log(password, cnfrmpassword);
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfrmpassword){
            message.textContent = "Password Match";
            message.style.backgroundColor = "#3ae374";
        } else{
            message.textContent = "Password don't match";
            message.style.backgroundColor = "#ff4d4d";
        };
    } else {
        alert("Password can't be empty");
        message.textContent ="";
    }
};