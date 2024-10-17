function myCheckout() {
    // alert("Clicked");
    let cost = Number(document.getElementById("total-cost").value);
    cost = (Math.round(100*cost))/100;
   
    let dcode = Number(document.getElementById("discount-code").value);
    let discount;
    if (dcode == 1) {
        discount = 0.10;
    } else if (dcode == 2) {
        discount = 0.15;
    } else if (dcode == 3) {
        discount = 0.25;
    } else if (dcode == 4) {
        discount = 0.35;
    } else if (dcode == 5) {
        discount = 0.40;
    } else {
        discount = 0;
    }

    let finalCost = cost - cost*discount;
    finalCost = (Math.round(100*finalCost))/100;

    let tendered = Number(document.getElementById("cash-paid").value);
    tendered = (Math.round(100*tendered))/100; 
   
    let change = tendered - finalCost; 
    if (change >= 0) {
        change_output = "$" + change.toFixed(2);
    } else {
        change_output = "INSUFFICIENT FUNDS";
    }

    let text = "Total Cost of Goods: $" + cost.toFixed(2) 
               + "<br> Discount Code: " + dcode
               + "<br> Discount Percentage: " + 100*discount + "%"
               + "<br> Final Cost: $" + finalCost.toFixed(2)
               + "<br><br> Amount Tendered: $" + tendered.toFixed(2)
			   + "<br><br> Change: " + change_output;
    output.innerHTML = text;
}

function resetValues() {
    document.getElementById("total-cost").value = "";
    document.getElementById("discount-code").value = "";
    document.getElementById("cash-paid").value = "";
    output.innerHTML = "(output comes here)";
}