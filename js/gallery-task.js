import imgRef from "../gallery-items.js";
const galleryRef = document.querySelector('.js-gallery');
const markup = imgRef.reduce((acc, { preview, original, description }) => {
  acc += `<li class="gallery__item"><a class="gallery__link" href=${original}
  ><img class="gallery__image" src=${preview} data-source=${original}
  alt=${description}/></a></li>`;
  return acc;
}, '')
galleryRef.innerHTML += markup;

galleryRef.addEventListener('click', onImgClick);
const openModal = document.querySelector('.lightbox');
const modalImg = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
closeModalBtn.addEventListener('click', onModalBtn);

function onImgClick(event) {
  event.preventDefault()
  if (event.target.nodeName !== 'IMG') {
    return;
  };
  openModal.classList.add('is-open');
  modalImg.src = event.target.dataset.source;
};

function onModalBtn() {
  openModal.classList.remove('is-open');
  modalImg.src = '';
};
onModalBtn();