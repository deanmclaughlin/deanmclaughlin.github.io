function mySurvey() {
    let text = "Survey cancelled.";
    let name = String(prompt("What is your name?", ""));
    let age = Number(prompt("What is your age?", ""));
    age = Math.round(age);
    let clowns = String(prompt("Do you like clowns?", ""));
    let bool_clowns = (clowns.toLowerCase()=="true" || clowns.toLowerCase()=="yes");
    text = "Hello, " + name + ". You are " + age + " years old, and it is "
          + bool_clowns.toString().toUpperCase() + " that you like clowns.";
    output.innerHTML = text;
}
