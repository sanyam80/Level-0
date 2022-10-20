var initialPrice = document.querySelector("#initial-price");
var qtyOfStocks = document.querySelector("#qty-of-stocks");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitButton.addEventListener("click",submitHandler);

function submitHandler(){
  var ip = parseFloat(initialPrice.value);
  var qp = parseFloat(qtyOfStocks.value);
  var cp = parseFloat(currentPrice.value);
  calculateProfitAndLoss(ip,qp,cp);
}

function calculateProfitAndLoss(ip,qp,cp){
  if(ip>0&&qp>0&&cp>0){
    if(ip>cp){
      // const loss=((curvalue-purvalue)*stockvalue).toFixed(3);
			// 	const lossper=(100-((curvalue/purvalue)*100)).toFixed(3);
     var loss = ((cp-ip)*qp).toFixed(3);
     
     var lossPercent = (100-((cp/ip)*100)).toFixed(3);
    
     outputBox.innerText = (`Hey the loss is ${loss} and the loss percentage is ${lossPercent}%`)

    }else if(cp>ip){
      // const gain=((curvalue-purvalue)*stockvalue).toFixed(3);
			// 	const gainper=(((curvalue/purvalue)*100)-100).toFixed(3);
      var profit = ((cp-ip)*qp).toFixed(3);
      
      var profitPercent = (((cp/ip)*100)-100).toFixed(3);
     
      outputBox.innerText = (`Hey the profit is ${profit} and the profit percentage is ${profitPercent}%`)

    }else{
        outputBox.innerText = "No Pain No Gain ! No Gain and No Pain"
    }
  }
  else{
    outputBox.innerText = "Please fill all the input field with valid number"
  }
}



