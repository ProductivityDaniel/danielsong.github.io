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


