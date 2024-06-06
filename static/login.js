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