function redirectTo(platform) {
    window.location.href = 'soon.html'; // Replace with appropriate redirection URL for each platform
}

function loginWithEmailPassword() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log("Email: " + email);
    console.log("Password: " + password);
}

function requestOTP() {
    var email = document.getElementById('email').value;
    console.log("Requesting OTP for email: " + email);
}