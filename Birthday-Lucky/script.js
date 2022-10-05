const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")
function compareValue(sum,luckyNumber){
    if(sum%luckyNumber==0){
        outputBox.innerText = "Your Birthday is Lucky! Congratulation, Party Banti Haan"
    }else{
        outputBox.innerText= "Your Birthday is not lucky"
    }
}
function checkBirthdayIsLucky(){
    const date = dateOfBirth.value;
    const sum = calculateSum(date);
  compareValue(sum,luckyNumber.value)
}
function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i = 0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    };
    return sum;
}

checkNumberButton.addEventListener("click",checkBirthdayIsLucky)