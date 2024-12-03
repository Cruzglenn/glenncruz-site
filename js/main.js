import Typed from 'typed.js';
import AOS from 'aos';
import { initNavigation } from './modules/navigation.js';
import { initContactForm } from './modules/contact.js';
import { initSkillBars } from './modules/skills.js';
import { initModal } from './modules/modal.js';
import { initTheme } from './modules/theme.js';
import { initLoader } from './modules/loader.js';
import { initProjectLinks } from './modules/projects.js';

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Typed.js
new Typed('#typewriter', {
    strings: [
        'Front-End Developer',
        'HTML Developer',
        'CSS Developer',
        'JavaScript Developer',
        'UI/UX Enthusiast',
        'React.js Developer'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Initialize modules
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initNavigation();
    initContactForm();
    initSkillBars();
    initModal();
    initTheme();
    initProjectLinks();
});