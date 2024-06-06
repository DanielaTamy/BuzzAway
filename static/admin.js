document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("loginForm");
    form.style.opacity = 0;
    form.style.transform = "translateY(20px)";

    setTimeout(function() {
        form.style.transition = "opacity 2s ease, transform 2s ease";
        form.style.opacity = 1;
        form.style.transform = "translateY(0)";
    }, 100); 
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("loginForm");
    var errorMessage = document.getElementById("errorMessage");
    var users = {
        "Admin1": "1234",
        "Admin2": "12345"
    };

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário antes da verificação

        var formData = new FormData(form);
        var user = formData.get('user');
        var password = formData.get('password');

        if (user in users && users[user] === password) {
            window.location.replace("/baseAdmin"); // Redireciona para a página inicial se as credenciais estiverem corretas
        } else {
            errorMessage.textContent = "Usuário e/ou senha inválidos"; // Exibe a mensagem de erro se as credenciais estiverem incorretas
        }
    });
});