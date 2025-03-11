   // Sélectionner les éléments
   const bouton = document.getElementById('button');
   const compteur = document.getElementById('compteur');

   // Initialiser le compteur
   let count = 0;

   // Ajouter un événement au clic du bouton
   bouton.addEventListener('click', function() {
       count++; // Incrémenter le compteur
       compteur.textContent = count; // Mettre à jour le texte du compteur
   });