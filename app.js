// storing query values using their respective classes
const btn = document.querySelector('.btn');
const input = document.querySelector('.ip');
const output = document.querySelector('.op');

// a function to handle errors
function errorHandler(error){
    console.log("error: ", error, "Something went wrong");
}

// translate function
function translate(){
    // picking the contents of the input value
    var inputTxt = input.value;
    // the server url
    var serverURL = "https://api.funtranslations.com/translate/yoda.json";
    // creating a query for the api to translate
    const url = serverURL + "?text=" + inputTxt;
    // fetching the final url
    fetch(url)
    // getting the response in a json file
    .then(response => response.json())
    // transferring the translated output the the output query
    .then(json => output.innerText = json.contents.translated)
    // calling the error handling function in case any error occurs
    .catch(errorHandler)
}

// added an event listener to hear clicks and call the translate function
btn.addEventListener("click", translate);