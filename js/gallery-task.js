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

function onImgClick(event) {
  event.preventDefault()
  if (event.target.nodeName !== 'IMG') {
    return;
  };
  openModal.classList.add('is-open');
  // const orgImg = event.target.dataset.source;
  // console.log(orgImg);

  imgRef.forEach((elem) => {
  modalImg.src = `${elem.original}`;
  modalImg.alt = `${elem.description}`;
  });
};
closeModalBtn.addEventListener('click', isModalImg);
function isModalImg() {
  openModal.classList.remove('is-open');
  modalImg.src = '';
  modalImg.alt = '';
};
isModalImg();