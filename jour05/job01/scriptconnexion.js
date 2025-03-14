document.getElementById("email").addEventListener("input", function() {
    let email = this.value;
    let emailError = document.getElementById("emailError");
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    emailError.textContent = emailRegex.test(email) ? "" : "Email invalide";
});

document.getElementById("password").addEventListener("input", function() {
    let password = this.value;
    let passwordError = document.getElementById("passwordError");
    passwordError.textContent = password.length >= 6 ? "" : "Mot de passe trop court (min 6 caractères)";
});