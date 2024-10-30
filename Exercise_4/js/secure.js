const userData = 
      [ ["deanmclaughlin@adtutoring.com", "DEAN!"] ,
        ["isimmons", "PUGS!"] ];
        
const users = ["deanmclaughlin@adtutoring.com", "isimmons"];
const passwds = ["DEAN!", "PUGS!!"];
        
let cost, discountPct, discountAmt, payment;

function getData() {
    cost = Number(document.getElementById("total-cost").value);
    if (Number.isNaN(cost)) {cost = 0;}
    if (cost < 0) {cost = 0;}
    cost = (Math.round(100*cost))/100;
    
    discountPct = Number(document.getElementById("discount-pct").value);
    if (Number.isNaN(discountPct)) {discountPct = 0;}
    if (discountPct < 0) {discountPct = 0;}
    discountAmt = (Math.round(discountPct*cost))/100;

    payment = Number(document.getElementById("cash-paid").value);
    if (Number.isNaN(payment)) {payment = 0;}
    if (payment < 0) {payment = 0;}
    payment = (Math.round(100*payment))/100;
}
			 
function myCheckout() {
    getData();
    let doMore = doOutput();
    if (doMore) {
        document.getElementById("sign-in-para").style.display = "inline-block";
    }
}

function emptyCart() {
    document.getElementById("user-id").value = "";
    document.getElementById("pass-code").value = "";
    document.getElementById("sign-in-para").style.display = "none";
    document.getElementById("total-cost").value = "";
    document.getElementById("discount-pct").value = "";
    document.getElementById("cash-paid").value = "";
}

function resetCart() {
    emptyCart();
    document.getElementById("output").innerHTML = "";   
}

function checkUserAndPassword() {
    let valid;
    let user = String(document.getElementById("user-id").value);
    let passwd = String(document.getElementById("pass-code").value);
    
    if (users.includes(user)) {
        let authorized = passwds[users.indexOf(user)];
        if (passwd === authorized) {
            valid = true;
            text = "TRANSACTION COMPLETE \u2014 THANK YOU";
        } else {
            valid = false;
            text = "INVALID PASSWORD \u2014 TRANSACTION CANCELLED";
        }
    } else {
        valid = false;
        text = "USER DOES NOT EXIST \u2014 TRANSACTION CANCELLED"
    }
    
    document.getElementById("output").innerHTML = text;
	emptyCart();
}


function doOutput() {
    let carryOn = true;
    let net = cost - discountAmt;
    let change = payment - net; 
    if (change >= 0) {
       change_output = "Change Due: $" + change.toFixed(2) 
                       + " \u2014 SIGN IN TO COMPLETE TRANSACTION";
    } else {
       change_output = "Insufficient Funds \u2014 TRANSACTION CANCELLED";
       carryOn = false;
    }

    let text = "Total Cost of Goods: $" + cost.toFixed(2)
               + "<br> Discount: " + discountPct.toFixed(2) + "%"
			   + "<br> Total Savings: $" + discountAmt.toFixed(2)
               + "<br> Final Cost: $" + net.toFixed(2)
               + "<br> Payment: $" + payment.toFixed(2)
			   + "<br><br>" + change_output;
    document.getElementById("output").innerHTML = text;
   
    emptyCart();
    return carryOn;
}
