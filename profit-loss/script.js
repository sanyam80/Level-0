var initialPrice = document.querySelector("#initial-price");
var qtyOfStocks = document.querySelector("#qty-of-stocks");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitButton.addEventListener("click",submitHandler);

function submitHandler(){
  var ip = initialPrice.value;
  var qp = qtyOfStocks.value;
  var cp = currentPrice.value;
  calculateProfitAndLoss(ip,qp,cp);
}

function calculateProfitAndLoss(ip,qp,cp){
    if(ip>cp){
     var loss = (ip-cp)*qp;
     var lossPercent = (loss/ip)*100;
     outputBox.innerText = (`Hey the loss is ${loss} and the loss percentage is ${lossPercent}%`)

    }else if(cp>ip){
      var profit = (cp-ip)*qp;
      var profitPercent = (profit/ip)*100;
      outputBox.innerText = (`Hey the profit is ${profit} and the profit percentage is ${profitPercent}%`)

    }else{
        outputBox.innerText = "No Pain No Gain ! No Gain and No Pain"
    }
}