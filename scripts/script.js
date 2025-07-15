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
const InternshipList = document.querySelector('#experience-container ul');

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
    InternshipList.classList[action]('dark-mode');

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
    formData.append('entry.945974861', ipData.ip);               // IP Address
    formData.append('entry.1353090188', ipData.city);              // City
    formData.append('entry.189472937', ipData.country);          // Country
    formData.append('entry.196977313', window.location.href);     // Page URL
    formData.append('entry.1762141312', document.referrer);        // Referrer
    formData.append('entry.364947948', navigator.userAgent);      // User Agent
    formData.append('entry.1275239423', '');                    // Clicked link placeholder

    // Send page visit
    fetch(formURL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });

    // Track link clicks
    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", e => {
        const anchor = e.target.closest("a");
        const url = anchor?.getAttribute("href");

        // ✅ If it's a same-page anchor link, let it scroll naturally
        if (url && url.startsWith("#")) return;

        e.preventDefault();

        const linkFormData = new FormData();
        linkFormData.append('entry.945974861', ipData.ip);
        linkFormData.append('entry.1353090188', ipData.city);
        linkFormData.append('entry.189472937', ipData.country);
        linkFormData.append('entry.196977313', window.location.href);
        linkFormData.append('entry.1762141312', document.referrer);
        linkFormData.append('entry.364947948', navigator.userAgent);
        linkFormData.append('entry.1275239423', url);

        fetch(formURL, {
            method: 'POST',
            mode: 'no-cors',
            body: linkFormData
        });

        window.open(url, '_blank');
      });
    });

  } catch (err) {
    console.error("Analytics tracking failed:", err);
  }
})();

