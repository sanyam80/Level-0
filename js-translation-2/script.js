var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
  var url = "https://api.funtranslations.com/translate/mandalorian.json"

function errorHandler(){
    alert("something wrong went with the server")
}
  function getTranslateURL(text){
    return url + "?" + "text=" + text;
  }
function clickHandler(){
  var inputText = txtInput.value;
  fetch(getTranslateURL(inputText))
  .then(response=>response.json()).then(json=>{
    var translatedText = json.contents.translated
    outputDiv.innerText = translatedText})
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)
    