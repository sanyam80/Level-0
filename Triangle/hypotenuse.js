const inputs = document.querySelectorAll(".side-input");
const hypoButton = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");


hypoButton.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquare(Number(inputs[0].value),Number(inputs[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = "The length of hypotenuse is " +lengthOfHypotenuse;
}

function calculateSumOfSquare(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares
}