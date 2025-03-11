const textarea = document.getElementById("keylogger");

        function handleKeyPress(event) { // uniquement a-z
            const key = event.key.toLowerCase(); 
            if (key >= 'a' && key <= 'z') { // On vérifie si c'est une lettre (a-z)
                if (document.activeElement === textarea) {
                    textarea.value += key + key;
                } else {
                    textarea.value += key;
                }
            }
        }
        window.addEventListener('keydown', handleKeyPress);