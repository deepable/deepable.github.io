const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar-menu');
const subMenu = document.querySelector('.navbar-subMenu');



toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    subMenu.classList.toggle('active');
});