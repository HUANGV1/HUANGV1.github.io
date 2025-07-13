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
const githubLogoSrc = document.getElementById('github-logo');
const introH2 = document.querySelector('#intro-container h2');

darkModeButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');

    githubLogoSrc.style.filter = isDark ? 'invert(1) brightness(2)' : 'invert(0) brightness(1)';

    const action = isDark ? 'add' : 'remove';

    nav.classList[action]('dark-mode');
    navLeft.classList[action]('dark-mode');
    navCenter.classList[action]('dark-mode');
    navNameA.classList[action]('dark-mode');
    navCenterA.classList[action]('dark-mode');
    introContainer.classList[action]('dark-mode');
    introContainerP.classList[action]('dark-mode');
    introContainerSpan.classList[action]('dark-mode');
    projectContainer.classList[action]('dark-mode');
    projectContainerH1.classList[action]('dark-mode');
    for (const card of projectCard) {
        card.classList[action]('dark-mode');
    }
    experienceContainer.classList[action]('dark-mode');
    experienceContainerH1.classList[action]('dark-mode');
    experienceContainerH3.classList[action]('dark-mode');
    experienceContainerP.forEach(p => p.classList[action]('dark-mode'));
    footerContent.classList[action]('dark-mode');
    footerContentA.classList[action]('dark-mode');
    footerContentP.classList[action]('dark-mode');
    footerContentH2.classList[action]('dark-mode');
    footerContentH3.classList[action]('dark-mode');
    introH2.classList[action]('dark-mode');

    console.log(`SWITCHED TO ${isDark ? 'DARK' : 'LIGHT'}`);
    console.log(getComputedStyle(document.body).backgroundColor);
});



(async () => {
  const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSertSoR4fcIp2hjQc7yC3LnbCR1rYqULJzZTYnXdb9MY3IGgw/formResponse';
  const ipinfoToken = 'b211a23f4459f4'; // Replace with your actual ipinfo.io token

  try {
    const ipData = await fetch(`https://ipinfo.io/json?token=${ipinfoToken}`)
      .then(res => res.json());

    const formData = new FormData();
    formData.append('entry.1238729347', ipData.ip);               // IP Address
    formData.append('entry.258219213', ipData.city);              // City
    formData.append('entry.1512199146', ipData.country);          // Country
    formData.append('entry.271050151', window.location.href);     // Page URL
    formData.append('entry.222152834', document.referrer);        // Referrer
    formData.append('entry.404072579', navigator.userAgent);      // User Agent
    formData.append('entry.1213922637', '');                       // Clicked Link (placeholder)

    // Send page visit
    fetch(formURL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });

    // Track link clicks
    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", e => {
        const linkFormData = new FormData(formData);
        linkFormData.set('entry.1213922637', e.target.href); // Update Clicked Link

        fetch(formURL, {
          method: 'POST',
          mode: 'no-cors',
          body: linkFormData
        });
      });
    });

  } catch (err) {
    console.error("Analytics tracking failed:", err);
  }
})();