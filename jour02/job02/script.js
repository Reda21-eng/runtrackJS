
        function showhide() {
            // Vérifier si l'élément article existe déjà
            const article = document.getElementById('article');

            if (article) {
                // Si l'article existe, le supprimer
                article.remove();
            } else {
                // Si l'article n'existe pas, en créer un
                const newArticle = document.createElement('article');
                newArticle.id = 'article';
                newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
                document.body.appendChild(newArticle);
            }
        }