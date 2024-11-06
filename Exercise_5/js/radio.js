var colours = [];
var votes = [];
var output = "";

function getRadio(formID, radioName) {
    var theForm = document.getElementById(formID);
    var theButtons = theForm.elements[radioName];

    output = "You cast a vote for:  "
    if (theButtons.value == "" || theButtons.value == null) {
        output += "<i>undefined</i><br>";
    } else {
        theColour = theButtons.value;
        output += "<i>" + theColour + "</i><br><br>"; 
        addToTotals(theColour);
    }
    report();
    document.getElementById("output").innerHTML = output;
}

function addToTotals() {
    if (colours.includes(theColour)) {
        votes[colours.indexOf(theColour)] += 1;
    } else {
        colours.push(theColour);
        votes.push(1);
    }    
}

function report() {
    let total = 0;
    for (let i=0; i<votes.length; i++) {
        total += votes[i];
    }
    let text = "Total votes so far:  " + total + "<br><br>";
    
    for (let i=0; i<colours.length; i++) {
        text += colours[i] + ":  " + votes[i] + "<br>";
    }
    text += "<br>";
    
    let max = -1
    for (let i=0; i<votes.length; i++) {
        if (votes[i] > max) { max = votes[i]; }
    }

    let winners = []
    for (let i=0; i<colours.length; i++) {
        if (votes[i] == max) { winners.push(colours[i]); }
    }
    text += "The overall winner is:  <i>" + winners[0];
    if (winners.length > 1) {
        for (let i=1; i<winners.length; i++) {
            text += ", " + winners[i];
        }
        text += "</i> <b>[TIE]</b><br>";
    } else {
        text += "</i><br>";
    }
 
    output += text;
}

function clearGroup(groupName) {
    var buttons = document.getElementsByName(groupName);
    for (let i=0; i < buttons.length; i++) {
        buttons[i].checked = false;
    }
}

function clearSpan(spanId) {
    document.getElementById(spanId).innerHTML = "";
}

function resetSurvey() {
    clearGroup("colours");
    clearSpan("output");
    colours = [];
    votes = [];
}
