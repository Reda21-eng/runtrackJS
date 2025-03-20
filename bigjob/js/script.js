// js/script.js
$(document).ready(function() {
    let currentUser = null;
    const validDomain = "@laplateforme.io";

    // Gestion du modal connexion/inscription
    $('#loginBtn').click(function(e) {
        e.preventDefault();
        $('#authModal').modal('show');
    });

    // Switch entre connexion et inscription
    $('#switchToRegister').click(function() {
        const isRegister = $(this).text() === "S'inscrire";
        $(this).text(isRegister ? "Se connecter" : "S'inscrire");
        $('#authForm button[type="submit"]').text(isRegister ? "S'inscrire" : "Se connecter");
    });

    // Soumission du formulaire
    $('#authForm').submit(function(e) {
        e.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();

        if (!email.endsWith(validDomain)) {
            alert("Seules les adresses @laplateforme.io sont autorisées");
            return;
        }

        // Simulation authentification (à remplacer par appel API réel)
        currentUser = {
            email: email,
            role: 'student' // ou 'moderator' ou 'admin'
        };

        $('#authModal').modal('hide');
        showCalendar();
    });

    function showCalendar() {
        $('#calendarContainer').removeClass('d-none');
        $('#loginBtn').hide();

        // Simulation calendrier simple
        let calendarHtml = '<div class="row">';
        const today = new Date();
        
        for(let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const isPast = date < today;
            
            calendarHtml += `
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5>${date.toLocaleDateString()}</h5>
                            <button class="btn btn-primary request-presence"
                                data-date="${date.toISOString()}"
                                ${isPast ? 'disabled' : ''}>
                                Demander présence
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
        calendarHtml += '</div>';
        $('#calendar').html(calendarHtml);
    }

    // Gestion des demandes de présence
    $(document).on('click', '.request-presence', function() {
        const date = $(this).data('date');
        // À implémenter : sauvegarde dans le JSON
        alert(`Demande de présence enregistrée pour le ${new Date(date).toLocaleDateString()}`);
    });
});