window.addEventListener('scroll' , function(){
 var header = document.querySelector('#header')
 header.classList.toggle('rolagem', window.scrollY > 0)
})

document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um ouvinte de eventos de clique a todos os links da navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtém o destino do link clicado
            const targetId = this.getAttribute('href').substring(1);

            // Rola suavemente para a seção de destino
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

