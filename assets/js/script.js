const openModalButton = document.querySelector('.btn_enter');
const closeModalButton = document.querySelector('.btn_close');
const openModalButtonDashboard = document.querySelector('.btn_add');
const closeModalButtonDashboard = document.querySelector('.btn_close_dashboard');
const modal = document.querySelector('#modal');
const modalDashboard = document.querySelector('#modal_dashboard');
const main = document.querySelector('main');
const header = document.querySelector('header');
const add = document.querySelector('.add');

const toggleModal = () => {
  modal?.classList.toggle('hide');
  main.classList.toggle('opacity');
  header.classList.toggle('opacity');
  modalDashboard?.classList.toggle('hide');
}


[closeModalButton, openModalButton, add, closeModalButtonDashboard].forEach(el => {
  el?.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal();
  })
});

