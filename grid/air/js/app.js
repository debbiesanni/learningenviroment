const footer = document.querySelector('.footer');
document.querySelector('.footerBtn').addEventListener('click', showFooter);
document.querySelector('.close').addEventListener('click', closeFooter);

function showFooter(){
    footer.classList.remove('hidden');
}
function closeFooter(){
    footer.classList.add('hidden');
    // .remove('.hidden');
}