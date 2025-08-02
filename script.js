// Loading Screen
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('loader').style.visibility = 'hidden';
    }, 1000);
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('#mobileMenu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuButton.classList.remove('active');
            mobileMenu.classList.remove('open');
        });
    });
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Cursor Effect
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Add cursor effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .form-input, .form-label, .project-card, .language-switch');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-active');
            cursorFollower.classList.add('cursor-follower-active');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-active');
            cursorFollower.classList.remove('cursor-follower-active');
        });
    });
}

// Language Switch
const languageSwitches = document.querySelectorAll('.language-switch');
const elementsToTranslate = {
    'home': {
        'pt': 'Início',
        'en': 'Home'
    },
    'about': {
        'pt': 'Sobre',
        'en': 'About'
    },
    'projects': {
        'pt': 'Projetos',
        'en': 'Projects'
    },
    'contact': {
        'pt': 'Contato',
        'en': 'Contact'
    },
    'heroTitle': {
        'pt': 'Olá, eu sou',
        'en': 'Hello, I\'m'
    },
    'heroSubtitle': {
        'pt': 'Fundador da <span class="text-primary">Null Forge</span><br>Criando soluções que impactam vidas',
        'en': 'Founder of <span class="text-primary">Null Forge</span><br>Creating solutions that impact lives'
    },
    'heroDescription': {
        'pt': 'Apaixonado por tecnologia, educação e inovação. Dedicação em construir ferramentas que capacitam pessoas através do código.',
        'en': 'Passionate about technology, education and innovation. Dedicated to building tools that empower people through code.'
    },
    'hireMe': {
        'pt': 'Contrate-me',
        'en': 'Hire Me'
    },
    'viewProjects': {
        'pt': 'Ver Projetos',
        'en': 'View Projects'
    },
    'aboutTitle': {
        'pt': 'Sobre Mim',
        'en': 'About Me'
    },
    'aboutSubtitle': {
        'pt': 'Conheça mais sobre mim e minhas habilidades',
        'en': 'Get to know more about me and my skills'
    },
    'aboutContentTitle': {
        'pt': 'Inovação Através da Tecnologia',
        'en': 'Innovation Through Technology'
    },
    aboutContent1: {
  pt: 'Desde pequeno, sempre enxerguei a tecnologia de um jeito diferente. Pra mim, ela nunca foi só sobre criar coisas legais — era sobre transformar o que já existe, sobre encontrar novas formas de fazer o mundo girar. Enquanto muita gente ainda pensava no que queria ser no futuro, eu já estava de cabeça em projetos que realmente tocavam a vida das pessoas. Tenho essa inquietação constante dentro de mim, aquela sensação de que nasci pra algo maior. E, sinceramente? Acho que esse “algo maior” começa no código… mas não termina ali.  Meu sonho é estudar em uma grande universidade nos Estados Unidos — lugares como Harvard, MIT ou Stanford. Não é só pelo nome, pela fama, nada disso. É porque eu acredito de verdade que esses lugares reúnem os maiores desafios, os melhores mentores e as mentes mais inquietas do planeta. É onde eu quero estar. A Null Forge, meu projeto, foi só o primeiro passo de uma caminhada muito maior. Eu acredito com todas as forças que ensinar programação pode mudar destinos. E quero seguir firme nessa missão, cercado de pessoas que também acreditam que a tecnologia pode ser ponte, e não barreira.Eu nunca fui do tipo que se contenta com o “bom o suficiente”. Quero ir além. Não por vaidade, mas porque sei que é lá na frente, no topo, que posso crescer de verdade e causar o impacto que sonho. Cada detalhe deste site, cada projeto que coloco no mundo, cada hora que invisto nos meus estudos carrega uma parte de quem eu sou: alguém que busca fazer tudo com propósito, coragem e verdade. Cada linha de código que eu escrevo não vem só do que eu sei — vem do que eu acredito. E essa jornada… tá só começando.',
  en: 'Since I was a child, I\'ve always looked at technology from a unique perspective. To me, it was never just about inventing interesting tools – it was about reshaping what already exists. There\'s a constant energy inside me, a drive that makes me feel I was meant to pursue something truly meaningful. And honestly? I believe that journey begins with technology – but it definitely doesn\'t end there. One of my biggest ambitions is to study at a top university in the United States – places like Harvard, MIT, or Stanford. Not because of prestige or popularity, but because I know that these institutions can amplify the impact I wish to have. Null Forge, the project I built, is only the starting point of a much longer mission. I\'m deeply convinced that sharing knowledge in programming has the power to change lives – and that\'s what I\'m aiming for.'
},

 
    'aboutContent2': {
        'pt': 'Meu maior sonho é estudar em uma universidade de excelência nos Estados Unidos, como Harvard, MIT ou Stanford. Não apenas pelo prestígio, mas porque sei que é nesse ambiente que minha mentalidade inquieta, minha paixão por resolver problemas reais e meu desejo de mudar o mundo através da educação e da tecnologia podem se multiplicar exponencialmente. Fundar a Null Forge foi só o começo. Acredito no poder de ensinar programação para transformar vidas, e quero me aprofundar cada vez mais nesse propósito — com acesso aos melhores mentores, desafios e ecossistemas do planeta.',
        'en': 'My biggest dream is to study at an excellent university in the United States, such as Harvard, MIT or Stanford. Not just for the prestige, but because I know it is in this environment that my restless mindset, my passion for solving real problems, and my desire to change the world through education and technology can multiply exponentially. Founding Null Forge was just the beginning. I believe in the power of teaching programming to transform lives, and I want to delve deeper and deeper into this purpose - with access to the best mentors, challenges, and ecosystems on the planet.'
    },
    'aboutContent3': {
        'pt': 'Não me contento com pouco. Quero estar entre os melhores não por vaidade, mas porque sei que é onde posso crescer mais e causar mais impacto. Este site, meus projetos, minha rotina e tudo o que faço são reflexos de uma mentalidade focada em excelência, propósito e ousadia. Cada linha de código que escrevo carrega não só conhecimento técnico, mas também uma visão clara de onde quero chegar. E a jornada está só começando.',
        'en': 'I am not satisfied with little. I want to be among the best not out of vanity, but because I know that is where I can grow the most and make the most impact. This website, my projects, my routine, and everything I do are reflections of a mindset focused on excellence, purpose, and boldness. Every line of code I write carries not only technical knowledge but also a clear vision of where I want to go. And the journey is just beginning.'
    },
    'downloadCV': {
        'pt': 'Baixar CV',
        'en': 'Download CV'
    },
    'letsTalk': {
        'pt': 'Vamos Conversar',
        'en': 'Let\'s Talk' 
    },
    'projectsTitle': {
        'pt': 'Meus Projetos',
        'en': 'My Projects'
    },
    'projectsSubtitle': {
        'pt': 'Alguns dos meus trabalhos e contribuições recentes',
        'en': 'Some of my recent work and contributions'
    },
    'viewMoreProjects': {
        'pt': 'Ver Mais Projetos',
        'en': 'View More Projects'
    },
    'contactTitle': {
        'pt': 'Entre em Contato',
        'en': 'Get In Touch'
    },
    'contactSubtitle': {
        'pt': 'Sinta-se à vontade para colaborações ou apenas um olá amigável',
        'en': 'Feel free to reach out for collaborations or just a friendly hello'
    },
    'contactContentTitle': {
        'pt': 'Vamos Trabalhar Juntos',
        'en': 'Let\'s Work Together'
    },
    'contactContent': {
        'pt': 'Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou só quer bater um papo, entre em contato!',
        'en': 'I\'m always open to new opportunities and collaborations. If you have a project in mind or just want to chat, get in touch!'
    },
    'sendMessage': {
        'pt': 'Enviar Mensagem',
        'en': 'Send Message'
    },
    'footerCopyright': {
        'pt': '&copy; <span id="currentYear"></span> Kauã Diniz. Todos os direitos reservados.',
        'en': '&copy; <span id="currentYear"></span> Kauã Diniz. All rights reserved.'
    }
};

let currentLanguage = 'en';

function updateLanguage(lang) {
    // Atualiza o ano no copyright
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Itera sobre todos os elementos que precisam ser traduzidos
    for (const [key, translations] of Object.entries(elementsToTranslate)) {
        const elements = document.querySelectorAll(`[data-translate="${key}"]`);
        
        elements.forEach(element => {
            // Para elementos com HTML interno (como spans com classes)
            if (translations[lang].includes('<')) {
                element.innerHTML = translations[lang];
            } else {
                element.textContent = translations[lang];
            }
        });
    }

    // Update navigation
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const key = ['home', 'about', 'projects', 'contact'][index];
        if (elementsToTranslate[key]) {
            link.textContent = elementsToTranslate[key][lang];
        }
    });
    
    // Update mobile navigation
    document.querySelectorAll('#mobileMenu a').forEach((link, index) => {
        const key = ['home', 'about', 'projects', 'contact'][index];
        if (elementsToTranslate[key]) {
            link.textContent = elementsToTranslate[key][lang];
        }
    });
    
    // Update hero section
    const heroTitle = document.querySelector('#home h4');
    const heroSubtitle = document.querySelector('#home h2');
    const heroDescription = document.querySelector('#home p');
    const hireMeBtn = document.querySelector('#home .btn-primary');
    const viewProjectsBtn = document.querySelector('#home .btn-secondary');
    
    if (heroTitle) heroTitle.textContent = elementsToTranslate['heroTitle'][lang];
    if (heroSubtitle) heroSubtitle.innerHTML = elementsToTranslate['heroSubtitle'][lang];
    if (heroDescription) heroDescription.textContent = elementsToTranslate['heroDescription'][lang];
    if (hireMeBtn) hireMeBtn.textContent = elementsToTranslate['hireMe'][lang];
    if (viewProjectsBtn) viewProjectsBtn.textContent = elementsToTranslate['viewProjects'][lang];
    
    // Update about section
    const aboutTitle = document.querySelector('#about h2');
    const aboutSubtitle = document.querySelector('#about p');
    const aboutContentTitle = document.querySelector('#about h3');
    const aboutContent = document.querySelector('#about .lg\\:w-2\\/3 p');
    const downloadCVBtn = document.querySelector('#about .btn-primary');
    const letsTalkBtn = document.querySelector('#about .btn-secondary');
    
    if (aboutTitle) aboutTitle.textContent = elementsToTranslate['aboutTitle'][lang];
    if (aboutSubtitle) aboutSubtitle.textContent = elementsToTranslate['aboutSubtitle'][lang];
    if (aboutContentTitle) aboutContentTitle.textContent = elementsToTranslate['aboutContentTitle'][lang];
    if (aboutContent) aboutContent.textContent = elementsToTranslate['aboutContent1'][lang];
    if (downloadCVBtn) downloadCVBtn.textContent = elementsToTranslate['downloadCV'][lang];
    if (letsTalkBtn) letsTalkBtn.textContent = elementsToTranslate['letsTalk'][lang];
    
    // Update projects section
    const projectsTitle = document.querySelector('#projects h2');
    const projectsSubtitle = document.querySelector('#projects p');
    const viewMoreProjectsBtn = document.querySelector('#projects .btn-primary');
    
    if (projectsTitle) projectsTitle.textContent = elementsToTranslate['projectsTitle'][lang];
    if (projectsSubtitle) projectsSubtitle.textContent = elementsToTranslate['projectsSubtitle'][lang];
    if (viewMoreProjectsBtn) viewMoreProjectsBtn.textContent = elementsToTranslate['viewMoreProjects'][lang];
    
    // Update contact section
    const contactTitle = document.querySelector('#contact h2');
    const contactSubtitle = document.querySelector('#contact p');
    const contactContentTitle = document.querySelector('#contact h3');
    const contactContent = document.querySelector('#contact .lg\\:w-1\\/2 p');
    const sendMessageBtn = document.querySelector('#contact button[type="submit"]');
    
    if (contactTitle) contactTitle.textContent = elementsToTranslate['contactTitle'][lang];
    if (contactSubtitle) contactSubtitle.textContent = elementsToTranslate['contactSubtitle'][lang];
    if (contactContentTitle) contactContentTitle.textContent = elementsToTranslate['contactContentTitle'][lang];
    if (contactContent) contactContent.textContent = elementsToTranslate['contactContent'][lang];
    if (sendMessageBtn) sendMessageBtn.textContent = elementsToTranslate['sendMessage'][lang];
    
    // Update footer
    const footerCopyright = document.querySelector('footer .pt-6 p');
    if (footerCopyright) footerCopyright.innerHTML = elementsToTranslate['footerCopyright'][lang];
}

if (languageSwitches.length) {
    languageSwitches.forEach(switchElement => {
        switchElement.addEventListener('click', function() {
            this.classList.toggle('english');
            currentLanguage = this.classList.contains('english') ? 'pt' : 'en';
            updateLanguage(currentLanguage);
        });
    });
}

// Inicializa com o idioma padrão
updateLanguage(currentLanguage);

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert(currentLanguage === 'en' ? 'Message sent successfully!' : 'Mensagem enviada com sucesso!');
        this.reset();
    });
}

// Animate elements on scroll
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-fade-in-up');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.animate-fade-in-up').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);