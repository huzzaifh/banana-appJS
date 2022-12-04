var btnTranslate =document.querySelector("#btn-translate");
var textArea1=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";
	
function getTranslationURL(text){
    return serverURL + "?" +"text=" +text;
}
function errorHandler(error){
    console.log("error occured",error);
}
function clickHandler() {
    var inputText=textArea1.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var transalted =json.contents.translated;
        outputDiv.innerText =transalted;
    })
    .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickHandler)
 
