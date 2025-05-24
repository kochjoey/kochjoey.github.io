// SET NAV MENU HIGHLIGHT
const home = document.getElementById('home-btn');
const about = document.getElementById('about-btn');
const portfolio = document.getElementById('portfolio-btn');
const contact = document.getElementById('contact-btn');

const homeController = () => {
    home.className = 'active menu-item';
    about.className = 'inactive menu-item';
    portfolio.className = 'inactive menu-item';
    skills.className = 'inactive menu-item'
};

const aboutController = () => {
    home.className = 'inactive menu-item';
    about.className = 'active menu-item';
    portfolio.className = 'inactive menu-item';
    skills.className = 'inactive menu-item'
}

const portfolioController = () => {
    home.className = 'inactive menu-item';
    about.className = 'inactive menu-item';
    portfolio.className = 'active menu-item';
    skills.className = 'inactive menu-item'
}

const contactController = () => {
    home.className = 'inactive menu-item';
    about.className = 'inactive menu-item';
    portfolio.className = 'inactive menu-item';
}

home.addEventListener('click', homeController);
about.addEventListener('click', aboutController);
portfolio.addEventListener('click', portfolioController);
contact.addEventListener('click', contactController);

const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('header-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('on');
    navMenu.classList.toggle('on');
});

document.querySelectorAll('.hamburger-item').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('on');
    navMenu.classList.remove('on');
}))

