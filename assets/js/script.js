const openModalButton = document.querySelector(".btn_enter");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = ()=>{
  modal.classList.toggle("hide");
};

[openModalButton, fade].forEach((el)=>{
  el.addEventListener('click', ()=> toggleModal());
})