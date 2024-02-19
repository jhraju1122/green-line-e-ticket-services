
//Step-1: if I click the seat button then the button get Green color
// step-2: per seat 550tk... and seat a click korle seat calculate hobe

 


const seats =document.getElementsByClassName('kbd');
console.log(seats);
let totalSeatPrice = 0;
for (const seat of seats) {
    seat.addEventListener('click', function(event){
        const buttonValue = event.target.innerText;
        console.log(buttonValue);
        totalSeatPrice += 550;
        console.log(totalSeatPrice); 

        const calculateAreaSpan = document.getElementById('calculate-area');
        calculateAreaSpan.innerText = totalSeatPrice;
        console.log(totalSeatPrice);

    })
}



// selected area display, how much tickets are selected
const seatsCount = document.getElementsByClassName('kbd');
console.log(seats);
let totalSeatNumber = 0;
for (const seat of seats) {
    seat.addEventListener('click', function(event){
        const buttonValue = event.target.innerText;
        console.log(buttonValue);
        totalSeatNumber += 1;
        console.log(totalSeatNumber);

        const selectedAreaSpan = document.getElementById('seleced-area');
        selectedAreaSpan.innerText  = totalSeatNumber;
        console.log(totalSeatNumber);
    })
}














// Selected area 
 const selectedArea = document.getElementById('seleced-area');
 let selectedAreaInitialValue =0;
 selectedArea.addEventListener('click', function(){
selectedAreaInitialValue += 1
selectedArea.innerText =selectedAreaInitialValue;
console.log(selectedAreaInitialValue);
 })