const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")
const availableNotes = [2000,500,100,20,10,5,1]
checkButton.addEventListener("click",validateBillAmount);

function validateBillAmount(){
  
if(billAmount.value>0){
  if(cashGiven.value>billAmount.value){
   const amountToReturn = cashGiven.value-billAmount.value;
   calculateChange(amountToReturn)
  }else{
  message.innerText = "The cash provided should be greater than bill amount"
  }
}else{
    message.style.display = "block"
    message.innerText = "The bill amount should be greater than 0";
}
}

function calculateChange(amountToReturn){
  for(var i = 0;i<availableNotes.length;i++){
    const numberOfNotes = Math.trunc(amountToReturn/availableNotes[i]);
    amountToReturn%=availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
