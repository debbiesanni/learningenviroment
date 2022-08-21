const show = document.querySelector('.fa-arrow-left');
const hide = document.querySelector('.fa-arrow-right');
const sidenav = document.querySelector('.sidenav');

show.addEventListener('click', toggleShowSidenav);
hide.addEventListener('click', toggleHideSidenav);
function toggleShowSidenav(){
    show.classList.add('hide')
    hide.classList.remove('hide')
    sidenav.classList.add('hide')
}
function toggleHideSidenav(){
    hide.classList.add('hide')
    show.classList.remove('hide')
    sidenav.classList.remove('hide')
}