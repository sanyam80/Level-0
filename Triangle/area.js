const inputs = document.querySelectorAll(".side-input");
const submitButton = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

submitButton.addEventListener("click",clickHandler);
function clickHandler(){
    const area = 1/2*(Number(inputs[0].value)*Number(inputs[1].value));
    if(area>0){
    output.innerText = "The Area of Triangle is " + area + " cm"
}else{
  output.innerText = "The Base or Height should be more than 0"
}
}