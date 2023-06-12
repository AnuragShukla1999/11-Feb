let itemContainer = [];

function addItem(){
    let item = document.getElementById("user-item").value;
    if(!item){
        alert("Please add item");
        return;
    }

    if(!itemContainer.includes(item)){
        itemContainer.push(item);
        alert("Successfully add item")
    } else{
        alert("item already added")
    }
}

document.getElementById("submit-btn").addEventListener("click", addItem)