/*Highlight the menu items corresponding to the current webpage.*/
let navbar = document.querySelectorAll(".navbar a");
let bodyId = document.querySelector("body").id;

for(let link of navbar){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}

/*Display delivery address when the "Delivery" button is ticked.*/
function showAddress() {
    document.getElementById("show").style.display = "block"
}

/*Hide delivery address when the "Pick up" button is ticked.*/
function hideAddress() {
    document.getElementById("show").style.display = "none"
}

/*Auto filling.*/
function autoFill() {
    if (document.getElementById("same_address").checked) {
        var deladd = document.getElementById("delivery_address").value;
        if(deladd == "") {
            alert("Please enter delivery address first.")
            document.getElementById("same_address").checked = false
        } else{
            document.getElementById("billing_address").value = deladd;
        }
    }
}

/*Display card information when the "Pay online" button is ticked.*/
function showPay() {
    document.getElementById("card_info").style.display = "block"
}

/*Hide card information when the "Pay on pick up" button is ticked.*/
function hidePay() {
    document.getElementById("card_info").style.display = "none"
}

/*Notify when information is invalid.*/
function validate() {
    var pickup = document.getElementById("pickup").checked;
    var delivery = document.getElementById("delivery").checked;
    var deladd = document.getElementById("delivery_address").value; 
    var biladd = document.getElementById("billing_address").value;
    var postcode = document.getElementById("postcode").value;
    var number = document.getElementById("contact_num").value; 
    var email = document.getElementById("email").value; 
    var pay_onl = document.getElementById("pay_online").checked;
    var visa = document.getElementById("visa").checked;
    var master = document.getElementById("master").checked;
    var american = document.getElementById("american").checked;
    var credit = document.getElementById ("credit").value;
    var errMsg = "";
    var result = true;

    if ((pickup == "") && (delivery == "")) {
        errMsg += "Select an option. \n";
    }
    if ((delivery == true) && (deladd == "")) {
       errMsg += "Delivery address can not be empty.\n";
    }
    if (biladd == "") {
        errMsg += "Billing address can not be empty.\n";
    }
     if (postcode == "") {
        errMsg += "Postcode can not be empty.\n";
    }
     if (postcode.length != 4) {
        errMsg += "Postcode must be 4 characters.\n";
    }
    if (email == "") {
      errMsg += "Email can not be empty.\n";
    }
    if (number== "") { 
        errMsg += "Contact number can not be empty.\n";
    }
    if((pay_onl == true ) && (visa == "") && (master == "") && (american == "")) {
        errMsg += "Please select your card.\n";
    }
    
    if ((pay_onl == true ) && (credit == "")) {
        errMsg += "Credit card number can not be empty.\n";
    }
    if (((visa == true) || (master == true)) && (credit.length != 16)){
        errMsg += "Credit card number must be 16 characters\n"
    }
    if ((american == true) && (credit.length != 15)) {
        errMsg += "Credit card number must be 15 characters\n"
    }
    if (errMsg != "") {
       alert (errMsg);
       result = false;
   } 
   
   return result;
   }
   function init() {
       var regForm = document.getElementById("form");
       regForm.onsubmit = validate;
   }

   /* execute the initialisation function once the window*/
   window.onload = init;






















