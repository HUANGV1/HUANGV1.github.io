const cards = document.querySelectorAll('.project-card');
const overlay = document.getElementById('overlay');


cards.forEach(card => {
    card.addEventListener('click', ()=>{
        card.classList.add('active');
        overlay.classList.add('show');
        
    });
});

overlay.addEventListener('click', ()=>{
    const openCard=document.querySelector('.project-card.active');
    if (openCard) {
        openCard.classList.remove('active');
        overlay.classList.remove('show');
    }
});

document.addEventListener('keydown', e=>{
    if (e.key === 'Escape') {
        const openCard=document.querySelector('.project-card.active');
        if (openCard) {
            openCard.classList.remove('active');
            overlay.classList.remove('show');
        }
    }
});