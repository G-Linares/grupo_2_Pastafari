/* Se agrega funcionalidad a la nav bar desde aqui*/

const navDeslizar = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // activar barra nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-activada');

        //animar los links, se va a ir metiendo de uno en una dependiendo su index
        navLinks.forEach((link, index) => {
            //se hace este if para verificar si esta abierto el menu y cerrarlo
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkDesaparece 0.5s ease forwards ${index/7 + 0.6}s`
            }
        });

        burger.classList.toggle("https://www.google.com/favicon.ico");


    });

    
}

navDeslizar();