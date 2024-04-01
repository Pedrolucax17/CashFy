const openModalButton = document.querySelector('.btn_enter');
const closeModalButton = document.querySelector('.btn_close');
const modal = document.querySelector('#modal');
const main = document.querySelector('main');
const header = document.querySelector('header');

const toggleModal = () => {
  modal.classList.toggle('hide');
  main.classList.toggle('opacity');
  header.classList.toggle('opacity');
}

[closeModalButton, openModalButton].forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal();
  })
});