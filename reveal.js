window.revelar = ScrollReveal({reset:true})

//SUPORTE E MANUTENÇÃO
revelar.reveal('.efeito-txt',
{
 duration: 3000,
 distance: '100px'
})

revelar.reveal('.efeito-img',
{
 duration: 3000,
 distance: '100px',
 delay: 500
})

//DEV WEB
revelar.reveal('.efeito-txtdev',
{
 duration: 2000,
 distance: '100px',
 origin: 'left'
})

revelar.reveal('.efeito-imgdev',
{
 duration: 2000,
 distance: '100px',
 delay: 500,
 origin: 'right'
})

//CONSULTORIA
revelar.reveal('.efeito-txtconsultoria',
{
 duration: 2000,
 distance: '100px',
 origin: 'right'

})

revelar.reveal('.efeito-imgconsultoria',
{
 duration: 2000,
 distance: '100px',
 origin: 'left',
 delay: 500
})

//FINAL DO SITE
revelar.reveal('.efeito-txtfinalsite',
{
 duration: 2000,
 distance: '100px',
 origin: 'bottom'
})