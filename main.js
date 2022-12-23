const btnClose = document.querySelector('.btn_close')
const btnOpen = document.querySelector('.menu')
const modal = document.querySelector('.modal_menu')

function openMenu() {
    modal.classList.add('open')
}

function closeMenu() {
    modal.classList.remove('open')
}

btnOpen.addEventListener('click', openMenu)
btnClose.addEventListener('click', closeMenu)