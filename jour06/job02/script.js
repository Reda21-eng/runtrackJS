$(document).ready(function () {
    // 1. Le lien "Accueil" redirige vers laplateforme.io (déjà fait via href)

    // 2. Bouton "Commander votre propre papillon" ouvre une modale
    $("#buyPapillon").click(function () {
        $("#papillonModal").modal("show");
    });

    // 3. Bouton "Rebooter le Monde" remplace le contenu par une citation aléatoire de Blade Runner
    const bladeRunnerQuotes = [
        "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion.",
        "All those moments will be lost in time, like tears in rain.",
        "It's too bad she won't live! But then again, who does?",
        "The light that burns twice as bright burns half as long, and you have burned so very, very brightly, Roy."
    ];
    $("#rebootWorld").click(function () {
        const randomQuote = bladeRunnerQuotes[Math.floor(Math.random() * bladeRunnerQuotes.length)];
        $("#jumbotronContent").html(`<h1>Citation Blade Runner</h1><p>${randomQuote}</p>`);
    });

    // 4. Pagination modifie le contenu du jumbotron
    const pages = [
        `<h1>Page 1</h1><p>Contenu original du jumbotron.</p>`,
        `<h1>Page 2</h1><p>Voici un autre contenu pour la page 2.</p>`,
        `<h1>Page 3</h1><p>Contenu différent pour la page 3.</p>`
    ];
    let currentPage = 1;
    $("#nextPage").click(function () {
        if (currentPage < 3) {
            currentPage++;
            $("#currentPage").text(currentPage);
            $("#jumbotronContent").html(pages[currentPage - 1]);
        }
    });
    $("#prevPage").click(function () {
        if (currentPage > 1) {
            currentPage--;
            $("#currentPage").text(currentPage);
            $("#jumbotronContent").html(pages[currentPage - 1]);
        }
    });

    // 5. Cliquer sur un élément de la liste groupée le rend actif
    $("#sidebarMenu .list-group-item").click(function () {
        $("#sidebarMenu .list-group-item").removeClass("active");
        $(this).addClass("active");
    });

    // 6. Boutons pour faire progresser/régresser la barre de progression
    let progress = 50;
    $("#increaseProgress").click(function () {
        if (progress < 100) {
            progress += 10;
            $("#progressBar").css("width", progress + "%");
        }
    });
    $("#decreaseProgress").click(function () {
        if (progress > 0) {
            progress -= 10;
            $("#progressBar").css("width", progress + "%");
        }
    });

    // 7. Touches D, G, C pour afficher une modale récapitulative
    let keySequence = [];
    $(document).keypress(function (e) {
        keySequence.push(e.key.toUpperCase());
        if (keySequence.length > 3) keySequence.shift();
        if (keySequence.join("") === "DGC") {
            const login = $("#login").val();
            const password = $("#password").val();
            const url = $("#url").val();
            const dogecoin = $("#dogecoin").val();
            $("#formRecapContent").html(`
                <p><strong>Login:</strong> ${login}</p>
                <p><strong>Mot de Passe:</strong> ${password}</p>
                <p><strong>URL:</strong> ${url}</p>
                <p><strong>DogeCoin:</strong> ${dogecoin}</p>
            `);
            $("#formRecapModal").modal("show");
            keySequence = [];
        }
    });

    // 8. Validation du formulaire change la couleur du spinner
    $("#rightForm").submit(function (e) {
        e.preventDefault();
        const email = $("#email").val();
        const password = $("#formPassword").val();
        if (email && password) {
            const colors = ["text-primary", "text-success", "text-danger", "text-warning"];
            $("#spinner").removeClass(colors.join(" ")).addClass(colors[Math.floor(Math.random() * colors.length)]);
        }
    });
});