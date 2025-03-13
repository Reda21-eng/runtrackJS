const button = document.getElementById('button');

// Ajout d'un écouteur d'événement au clic sur le bouton
button.addEventListener('click', () => {
    // Utilisation de Fetch pour récupérer le contenu du fichier expression.txt
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération du fichier');
            }
            return response.text();
        })
        .then(data => {
            // Récupération de l'élément <p> par son id
            const paragraph = document.getElementById('expression');
            // Insertion du contenu récupéré dans le paragraphe
            paragraph.textContent = data;
        })
        .catch(error => {
            console.error(error);
        });
});