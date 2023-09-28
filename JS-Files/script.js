//Mobile navigation animation

const mobileNavMenu = document.querySelector('.mobile-navigation-menu');
const hamburgerMenuIcon = document.querySelector('.ham-menu');
const closeMenuIcon = document.querySelector('.close-menu');

hamburgerMenuIcon.addEventListener('mousedown', function() {
    mobileNavMenu.classList.toggle('appear');
})

closeMenuIcon.addEventListener('mousedown', function() {
    mobileNavMenu.classList.toggle('appear');
})