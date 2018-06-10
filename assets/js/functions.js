let abrirMenu = document.querySelector("#img-abrir-menu");
let fecharMenu = document.querySelector("#img-fechar-menu");
let menu = document.querySelector("#menu");

abrirMenu.addEventListener("click", function(){
    menu.classList.add("menu-visivel");
    console.log("Abrindo o menu");
});

fecharMenu.addEventListener("click", function(){
    menu.classList.remove("menu-visivel");
    console.log("Fechando o menu");
});