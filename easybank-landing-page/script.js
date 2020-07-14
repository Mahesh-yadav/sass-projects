const mainNav = document.querySelector('.main-nav');
const  navTogglerCheckbox = document.querySelector('#nav-toggler');
const mainNavLinks = document.querySelector('#main-nav-links');

mainNav.addEventListener('click', (e) => {
    if(e.target === e.currentTarget){
        navTogglerCheckbox.checked = !navTogglerCheckbox.checked;
    }
});


mainNavLinks.addEventListener('click', (e) => {
    if(e.target !== e.currentTarget){
        navTogglerCheckbox.checked = !navTogglerCheckbox.checked;
    }
});