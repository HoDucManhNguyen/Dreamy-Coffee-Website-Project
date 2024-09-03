/*Highlight the menu items corresponding to the current webpage.*/
let navbar = document.querySelectorAll(".navbar a");
let bodyId = document.querySelector("body").id;

for(let link of navbar){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}


/*Notify when information is invalid.*/
function validate() {
	var name = document.getElementById("name").value;
	var username = document.getElementById("username").value;
	var pwd = document.getElementById("pwd").value;
	var email = document.getElementById("email").value;

	var male = document.getElementById("male").checked;
	var female = document.getElementById("female").checked;
	var other = document.getElementById("other").checked;

	var errMsg = "";							/* stores the error message */
	var result = true;							/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;				/* regular expression for letters and spaces only */


	/*Check if all required inputs have value */
	if (name =="") {
		errMsg += "Your name cannot be empty.\n";
	}
	if (username == "") {
		errMsg += "User name cannot be empty.\n";
	}
	if (pwd == "") {
		errMsg += "Password cannot be empty.\n";
	}
	if (pwd.length < 7) {
		errMsg += "Password at least 7-character.\n";
	}
	if (email == "") {
		errMsg += "Email cannot be empty.\n";
	}
	if ((male == "") && (female == "") && (other == "")) {
		errMsg += "Your gender must be seleted\n";
	}


	/* Display error message any error(s) is/are detected */
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	}
	return result;
}

/* link HTML elements to corresponding event function */
function init() {
	var form = document.getElementById("form"); /* link the variables to the HTML elements */
	window.onload =init;
	form.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;

