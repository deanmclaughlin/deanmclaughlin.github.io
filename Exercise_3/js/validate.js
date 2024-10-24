function validForm() {
  var inputField = document.forms["myForm"]["fname"];
  var outputField = document.getElementById("response");
  var passed;
  
  outputField.style.color = "rgb(0, 0, 0)";
  outputField.style.fontWeight = "normal";  
  
  let text = "";
  let x = inputField.value.toString();
  if (x == "" || x == null) {
      text = "STOP!! The 'Name' field must be filled out."
      outputField.style.color = "rgb(240, 0, 0)";
      outputField.style.fontWeight = "bold";
      passed = false;
  } else {
      text = "Thank you, " + x + ".";
      inputField.value = "";
      passed = false;
  }
  outputField.innerHTML = text;
  
  return passed;
}

function resetResponse() {
    var outputField = document.getElementById("response");
    outputField.style.color = "rgb(0, 0, 0)";
    outputField.style.fontWeight = "normal";  
    outputField.innerHTML = "";
}