let btnabmenu = document.getElementById('btn-abrirmenu');
let btnfecharmenu = document.getElementById('btn-fechar');
let menu = document.getElementById('menu-mobile');

btnabmenu.addEventListener('click', () => {
   menu.classList.add('abrir-menumb');
});

btnfecharmenu.addEventListener('click', (event) => {
   // Impedir que o clique no botão de fechar propague para fechar o menu
   event.stopPropagation();
   menu.classList.remove('abrir-menumb');
});

menu.addEventListener('click', (event) => {
   // Impedir que o clique no conteúdo do menu propague para fechar o menu
   event.stopPropagation();
});

document.addEventListener('click', () => {
   // Fechar o menu se clicar fora dele
   menu.classList.remove('abrir-menumb');
});
