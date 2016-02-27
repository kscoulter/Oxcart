//This Funciton Checks for Basic Username and Password Validation
function validate_username_and_email() {
//Validate Username Function
function validate_username() {
	var entered_username = document.getElementById('usernameInput').value;
        //Check if specific characters exist
        if( /(.+)@(.+){2,}\.(.+){2,}/.test(entered_username) ){
        	console.log('Valid Username');

        	return true;
        } else {
        	console.log('Invalid Username');
        	document.getElementById('usernameInput').className += " invalidLoginInputFields";
        	return false;
        }
    }
    validate_username(); //Call the function




//Validate Email
function validate_password(){
	//Variables to check against
	var user_password = document.getElementById('passwordInput');
    var uppercase_regrex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern
    var special_character_regrex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern

    //Pass logic against the above variables.
    if(uppercase_regrex.test(user_password.value) 
    	& user_password.value.length >= 6 
    	& special_character_regrex.test(user_password.value)) {

    	console.log('Uppercase exists');
    return true;
} else {
	console.log('Invalid Password');
	document.getElementById('passwordInput').className += " invalidLoginInputFields";
	document.getElementById('hiddenLabel').className += " invalidLoginLabelReveal";
	return false;
}    

}
validate_password(); //Call the function

} //End validate_username_and_email();


//This function toggles the nav that hides.
function toggle_menu() {
	document.getElementById('mobileNav').classList.toggle("mobileNavShow");
}

//This Function Toggles Visability of Password
document.getElementById('toggleVisibilePasswordListenerImage').addEventListener("click", togglePasswordFieldClicked);  
function togglePasswordFieldClicked() {

    console.log('working!');

    var passwordField = document.getElementById('passwordInput');
    var value = passwordField.value;

    if(passwordField.type == 'password') {
        passwordField.type = 'text';
    }
    else {
        passwordField.type = 'password';
    }
    
    passwordField.value = value;

} 

