const inputs = document.querySelectorAll(".angle-right");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

isTriangleBtn.addEventListener("click",isTriangle);

function calculateSumOfAngles(angle1,angle2,angle3){
   if(angle1>0&&angle2>0&&angle3>0){
    const sumofangles = angle1+angle2+angle3;
    return sumofangles;
}
else{
   return sumofangles = -1;
}

}
function isTriangle(){
    const sumofangles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
     if(sumofangles===180){
        output.innerText = "Yay, The angles form a triangle"
     }else if(sumofangles=="-1"){
       output.innerText = "All the angles in triangles should be more than 0"
     }
     else{
        output.innerText = "oh oh! The angles do not form a triangle";
     }
     
}