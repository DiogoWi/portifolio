const botaoMenu = document.getElementById('botaoMenu')

botaoMenu.addEventListener('click', function(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('ativado')
})