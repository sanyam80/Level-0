const inputs = document.querySelectorAll(".side-input");
const submitButton = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

submitButton.addEventListener("click",clickHandler);
function clickHandler(){
    const area = 1/2*(Number(inputs[0].value)*Number(inputs[1].value));
    output.innerText = "The Area of Triangle is " + area + " cm"
}