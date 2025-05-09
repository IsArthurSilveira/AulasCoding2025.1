document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navigation .btn");
    const iframe = document.getElementById("contentFrame");
    const initialPage = new URL("./html/inicio.html", window.location.href).href;

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evita o comportamento padrão do link
            const targetPage = new URL(link.getAttribute("href"), window.location.href).href;

            // Alterna entre a página inicial e a página de destino
            if (iframe.src === targetPage) {
                iframe.src = initialPage; // Volta para a página inicial
            } else {
                iframe.src = targetPage; // Vai para a página de destino
            }
        });
    });
});