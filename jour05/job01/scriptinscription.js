function validateInput(id, regex, errorMsg) {
    document.getElementById(id).addEventListener("input", function() {
        let value = this.value;
        let errorElement = document.getElementById(id + "Error");
        errorElement.textContent = regex.test(value) ? "" : errorMsg;
    });
}

validateInput("nom", /^[A-Za-zÀ-ÿ- ]{2,}$/, "Nom invalide");
validateInput("prenom", /^[A-Za-zÀ-ÿ- ]{2,}$/, "Prénom invalide");
validateInput("email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email invalide");
validateInput("password", /^.{6,}$/, "Mot de passe trop court (min 6 caractères)");
validateInput("adresse", /^.{5,}$/, "Adresse trop courte");
validateInput("codePostal", /^\d{5}$/, "Code postal invalide (5 chiffres requis)");