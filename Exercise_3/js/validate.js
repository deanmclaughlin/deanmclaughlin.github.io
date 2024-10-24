function validateForm() {
  var inputField = document.forms["myForm"]["fname"];
  var outputField = document.getElementById("response");
  
  outputField.style.color = "rgb(0, 0, 0)";
  outputField.style.fontWeight = "normal";  
  
  let text = "";
  let x = inputField.value.toString();
  if (x == "" || x == null) {
      text = "STOP!! The 'Name' field must be filled out."
      outputField.style.color = "rgb(240, 0, 0)";
      outputField.style.fontWeight = "bold";
  } else {
      text = "Thank you, " + x + ".";
      inputField.value = "";
  }
  outputField.innerHTML = text;
}

function resetResponse() {
    var outputField = document.getElementById("response");
    outputField.style.color = "rgb(0, 0, 0)";
    outputField.style.fontWeight = "normal";  
    outputField.innerHTML = "";
}