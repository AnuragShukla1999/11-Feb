const dish = [100, 150, 200, 50];
const numberOfPeople = document.getElementById("numberOfPeople").value;

function billSplit(dish, numberOfPeople){
    let sum = 0;
    for(i=0; i<dish.length; i++){
        sum += dish[i];
    };

    const perPersonCost = sum / numberOfPeople;
    return {
        TotalBill: sum,
        billPerPerson: perPersonCost
    }
}

let a = billSplit(dish, numberOfPeople);
console.log(a);



