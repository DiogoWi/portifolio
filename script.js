const botaoMenu = document.getElementById('botaoMenu');
const nav = document.getElementById('nav');

botaoMenu.addEventListener('click', function(){
    nav.classList.toggle('ativado');
});

const opcoes = document.querySelectorAll('#menu a');

for (let i = 0; i < opcoes.length; i++) {
    opcoes[i].addEventListener('click', function(){
        if(window.innerWidth <= 1024) {
            nav.classList.toggle('ativado');
        }
    });
}