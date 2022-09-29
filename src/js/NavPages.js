// Navegação entre páginas
document.querySelectorAll(".treinos").forEach(button => {

    button.addEventListener("click", function(event) {

        const pages = event.target || event.srcElement;
        const id = pages.id;

        window.location.href = "../pages/"+id+".html";

    });
});
document.querySelectorAll("#home").forEach(button => {

    button.addEventListener("click", function(event) {

        const pages = event.target || event.srcElement;
        const id = pages.id;

        window.location.href = "./"+id+".html";

    });
});
document.querySelectorAll(".treinos_sub").forEach(button => {

    button.addEventListener("click", function(event) {

        const pages = event.target || event.srcElement;
        const id = pages.id;

        window.location.href = "./"+id+".html";

    });
});
document.querySelectorAll(".botao_voltar").forEach(button => {

    button.addEventListener("click", event => {

        const pages = event.target || event.srcElement;
        const id = pages.id;

        window.location.href = "./"+id+".html";

    });
});