const darkModeButton = document.getElementById('dark-mode-toggle-button');
const nav = document.querySelector('nav');
const navLeft = document.getElementById('nav-left');
const navCenter = document.getElementById('nav-center');
const navNameA = document.querySelector('#nav-name a');
const navCenterA = document.querySelector('#nav-center a');
const introContainerP = document.querySelector('#intro-container p');
const introContainer = document.getElementById('intro-container');
const introContainerSpan = document.querySelector('#intro-container span#normal-span');
const projectContainer = document.getElementById('project-container');
const projectContainerH1 = document.querySelector('#project-container h1');
const projectCard = document.getElementsByClassName('project-card');
const experienceContainer = document.getElementById('experience-container');
const experienceContainerH1 = document.querySelector('#experience-container h1');
const experienceContainerH3 = document.querySelector('#experience-container h3');
const experienceContainerP = document.querySelectorAll('#experience-container p');
const footerContent = document.getElementById('footer-content');
const footerContentA = document.querySelector('#footer-content a');
const footerContentP = document.querySelector('#footer-content p');
const footerContentH2 = document.querySelector('#footer-content h2');
const footerContentH3 = document.querySelector('#footer-content h3');

darkModeButton.addEventListener('click', ()=>{
    if (darkModeButton.textContent=='DARK MODE') {
        document.body.classList.add('dark-mode');
        nav.classList.add('dark-mode');
        navLeft.classList.add('dark-mode');
        navCenter.classList.add('dark-mode');
        navNameA.classList.add('dark-mode');
        navCenterA.classList.add('dark-mode');
        introContainer.classList.add('dark-mode');
        introContainerP.classList.add('dark-mode');
        introContainerSpan.classList.add('dark-mode');
        projectContainer.classList.add('dark-mode');
        projectContainerH1.classList.add('dark-mode');
        for (const card of projectCard) {
            card.classList.add('dark-mode');
        }
        experienceContainer.classList.add('dark-mode');
        experienceContainerH1.classList.add('dark-mode');
        experienceContainerH3.classList.add('dark-mode');
        experienceContainerP.forEach(p => p.classList.add('dark-mode'));
        footerContent.classList.add('dark-mode');
        footerContentA.classList.add('dark-mode');
        footerContentP.classList.add('dark-mode');
        footerContentH2.classList.add('dark-mode');
        footerContentH3.classList.add('dark-mode');
        darkModeButton.textContent='LIGHT MODE';
        console.log('SWITCHED TO DARK');
        console.log(getComputedStyle(document.body).backgroundColor)
    } else {
        document.body.classList.remove('dark-mode');
        darkModeButton.textContent='DARK MODE';
        document.body.classList.remove('dark-mode');
        nav.classList.remove('dark-mode');
        navLeft.classList.remove('dark-mode');
        navCenter.classList.remove('dark-mode');
        navNameA.classList.remove('dark-mode');
        navCenterA.classList.remove('dark-mode');
        introContainer.classList.remove('dark-mode');
        introContainerP.classList.remove('dark-mode');
        introContainerSpan.classList.remove('dark-mode');
        projectContainer.classList.remove('dark-mode');
        projectContainerH1.classList.remove('dark-mode');
        for (const card of projectCard) {
            card.classList.remove('dark-mode');
        }
        experienceContainer.classList.remove('dark-mode');
        experienceContainerH1.classList.remove('dark-mode');
        experienceContainerH3.classList.remove('dark-mode');
        experienceContainerP.forEach(p => p.classList.remove('dark-mode'));
        footerContent.classList.remove('dark-mode');
        footerContentA.classList.remove('dark-mode');
        footerContentP.classList.remove('dark-mode');
        footerContentH2.classList.remove('dark-mode');
        footerContentH3.classList.remove('dark-mode');
        darkModeButton.textContent='DARK MODE';
        console.log('SWITCHED TO LIGHT');
        console.log(getComputedStyle(document.body).backgroundColor)
    }
    
});