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
 function A1(textElementId){
    const perSeatPrice = 550;
    const seatQuantity = document.getElementById('textElementId');
    const totalSeatPrice = seatQuantity*perSeatPrice;
    console.log(totalSeatPrice);


    const calculateAreaSpan = document.getElementById('calculate-area');
    calculateAreaSpan.innerText = totalSeatPrice;
    
 }

 