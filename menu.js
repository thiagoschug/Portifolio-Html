let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')



btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrirmeumenu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrirmeumenu')
})

// Exemplo genérico para detecção de clique no botão de contato
document.getElementById('btn-contato').addEventListener('click', function() {
    // Lógica de exibição do formulário de contato ou redirecionamento
    // Certifique-se de que essa lógica seja válida para ambas as situações (desktop e mobile).
});
