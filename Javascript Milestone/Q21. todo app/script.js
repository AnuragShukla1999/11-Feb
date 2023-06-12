const btn = document.getElementById("btn");
      const list = document.getElementById("list");
      const userInput = document.getElementById("user-input");

      btn.addEventListener("click", ()=>{
        if(userInput.value == ""){
          alert("Please enter");
          return;
        }
        
        const user = userInput.value;
        const li = document.createElement("li");
        li.innerText = user;
        list.appendChild(li)
      })