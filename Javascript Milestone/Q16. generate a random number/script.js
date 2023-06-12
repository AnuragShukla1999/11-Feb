const btn = document.getElementById("btn");

btn.addEventListener("click" , ()=>{
	let randomNumber =(Math.floor(Math.random() * 100)) + 1 ;
	document.querySelector("#op-screen").innerHTML = randomNumber ;
})