function setSeatBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-cyan-400');
 } 

//  function calculateSeatElement(textElementId){
//  const seatNumber = document.getElementById('textElementId');
//  const seatNumberCount = seatNumber.childElementCount;
//  const p = document.createElement('p');
//  p.innerText
//  console.log(p);
//  }

// Total Seat price calculation 
 function seatNumber(textElementId){
    const perSeatPrice = 550;
    const seatQuantity = document.getElementById(textElementId);
    const totalSeatPrice = seatQuantity*perSeatPrice;

    const calculateAreaSpan = document.getElementById('calculate-area');
    calculateAreaSpan.innerText = totalSeatPrice;
    console.log(totalSeatPrice);



  }

  function selectedArea(){
   const selectedAreaSpan = document.getElementById('seleced-area');
selectedAreaSpan.value;
console.log(selectedAreaSpan);



}

// let sum = 0;
// for(let i = 0; i<=10; i++){
//    sum = sum + i;
//    console.log(selectedArea);


