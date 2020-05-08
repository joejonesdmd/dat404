var mobileNavBtn = document.querySelector ('#mobile-nav-btn');
var navigationList = document.querySelector('.navigation-list');


mobileNavBtn.addEventListener('click', function () {
    navigationList.classList.toggle('navigation-list-closed')
    console.log(navigationList.classList);
})