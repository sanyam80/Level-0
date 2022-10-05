const inputs = document.querySelectorAll(".angle-right");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

isTriangleBtn.addEventListener("click",isTriangle);

function calculateSumOfAngles(angle1,angle2,angle3){
    const sumofangles = angle1+angle2+angle3;
    return sumofangles;
}
function isTriangle(){
    const sumofangles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
     if(sumofangles===180){
        output.innerText = "Yay, The angles form a triangle"
     }else{
        output.innerText = "oh oh! The angles do not form a triangle"
     }
}