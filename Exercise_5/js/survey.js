let colours = [];
let votes = [];

function getRadio(formID, radioName) {
    let theForm = document.getElementById(formID);
    let theButtons = theForm.elements[radioName];

    let choice = theButtons.value;
    if (choice == "other") {
        choice = document.getElementById("other_colour").value;
    }

    if (choice == "" || choice == null) {
        output = "";
    } else {
        output = "You cast a vote for:  <i>" + choice.toLowerCase() + "</i><br><br>"; 
        addToTotals(choice.toLowerCase());
    }

    document.getElementById("output").innerHTML = output + report();
    clearField("other_colour");
    clearGroup("colours");
}

function addToTotals(theColour) {
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
    let text = "Total votes so far:  " + total + "<br>";
    
    if (total == 0) {
        return text;
    }
    
    text += "<br>";
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
    return text;
}

function show(theID) {
    let lmnt = document.getElementById(theID);
    lmnt.style.display = "inline-block";
    lmnt.focus();
}

function hide(theID) {
    let lmnt = document.getElementById(theID);
    // lmnt.blur();
    lmnt.style.display = "none"; 
}

function clearGroup(groupName) {
    let buttons = document.getElementsByName(groupName);
    for (let i=0; i < buttons.length; i++) {
        buttons[i].checked = false;
    }
}

function clearSpan(spanId) {
    document.getElementById(spanId).innerHTML = "";
}

function clearField(fieldID) {
    let field = document.getElementById(fieldID);
    field.value = "";
    field.style.display = "none";    
}

function resetSurvey() {
    clearGroup("colours");
    clearSpan("output");
    clearField("other_colour");
    colours = [];
    votes = [];
}
