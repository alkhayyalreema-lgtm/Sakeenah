
function validateLogin() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("Please fill in all fields.");
    }
    else if (email.indexOf("@") == -1 ||
        email.indexOf(".") == -1) {
        alert("Please enter a valid email address.");
    }
    else {
        alert("Login form validated successfully!");
    }

    return false;
}




// Sign-up form


function validateSignup() {

    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
    }
    else if (password != confirmPassword) {
        alert("Passwords do not match.");
    }
    else {
        alert("Sign-up form validated successfully!");
    }

    return false;
}


