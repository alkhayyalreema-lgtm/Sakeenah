
function validateLogin() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("Please fill in all fields.");
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

    if (fullName == "" || email == "" ||
        password == "" || confirmPassword == "") {
        alert("Please fill in all fields.");
    }
    else if (password != confirmPassword) {
        alert("Passwords do not match.");
    }
    else {
        alert("Sign-up form validated successfully!");
    }

    return false;
}
