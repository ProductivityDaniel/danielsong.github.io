/*
Daniel Song
main .js file for most applications 
*/

/* card flipping */
const scene = document.querySelector('.scene'); 
if (scene) {
    scene.addEventListener('click', function() {
        console.log('clocked'); 
        const card = this.querySelector('.card');
        card.classList.toggle('flipped'); 
    }); 
}

/* bottom text */
const bottom = document.querySelector('#bottom');
const defaultText = bottom.textContent;
document.querySelectorAll('[data-desc]').forEach(function(el) {
    el.addEventListener('mouseenter', function() {
        bottom.textContent = defaultText + ' · ' + el.dataset.desc; 
    }); 
    el.addEventListener('mouseleave', function() {
        bottom.textContent = defaultText; 
    });
});

/* paper clip moving */ 
const paperclip = document.getElementById('paperclip');

if (scene && paperclip) {
    scene.addEventListener('mouseenter', function() {
        paperclip.style.transform = 'translateY(-75px) rotate(-80deg)';
    });
    scene.addEventListener('mouseleave', function() {
        paperclip.style.transform = 'translateY(0)';
    });
}


