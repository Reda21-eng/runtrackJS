function chargerUtilisateurs() {
  fetch('utilisateur.json')
      .then(response => {
          if (!response.ok) {
              throw new Error("Erreur de chargement du fichier JSON");
          }
          return response.json();
      })
      .then(utilisateurs => {
          const tbody = document.querySelector("#table-utilisateurs tbody");
          tbody.innerHTML = ""; // Vider le tableau avant d'ajouter les nouvelles données

          utilisateurs.forEach(utilisateur => {
              const tr = document.createElement("tr");
              tr.innerHTML = `
                  <td>${utilisateur.id}</td>
                  <td>${utilisateur.nom}</td>
                  <td>${utilisateur.prenom}</td>
                  <td>${utilisateur.email}</td>
              `;
              tbody.appendChild(tr);
          });
      })
      .catch(error => console.error("Erreur :", error));
}
