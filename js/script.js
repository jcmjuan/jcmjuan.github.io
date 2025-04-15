/*TOGGLE ICON NAVBAR */

let menuIcon =  document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*SCROLL SECTION ACTIVE LINK*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*STICKY NAVBAR*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*REMOVE MENU ICON AND NAVBAR*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
/*SCROLL REVEAL*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*TYPED JS*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

//Suavizar os scroll entre as seções
function scrollToSection(event) {
    event.preventDefault();
    
    const targetId = event.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    // Pega a posição do elemento alvo em relação ao topo da página
    const targetPosition = targetSection.offsetTop;
    // Posição atual do scroll
    const startPosition = window.pageYOffset;
    // Distância que precisamos percorrer
    const distance = targetPosition - startPosition;
    
    // Duração em milissegundos (ajuste este valor para mais lento ou mais rápido)
    const duration = 1000; // 1 segundo
    let start = null;
    
    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Função de easing para suavizar o movimento
        const easeInOutQuad = t => t < 0.5 
            ? 2 * t * t 
            : -1 + (4 - 2 * t) * t;
        
        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Adiciona o evento a todos os links que começam com #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', scrollToSection);
});


