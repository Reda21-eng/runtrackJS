// Sélection des éléments
const showButton = document.getElementById('showButton');
const hideButton = document.getElementById('hideButton');
const textContainer = document.getElementById('textContainer');

// Texte à afficher
const quote = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.";

// Événement pour le bouton "Afficher"
showButton.addEventListener('click', function() {
    textContainer.textContent = quote;
    textContainer.style.display = 'block';
});

// Événement pour le bouton "Cacher"
hideButton.addEventListener('click', function() {
    textContainer.style.display = 'none';
})