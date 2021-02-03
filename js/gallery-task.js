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

function onImgClick(event) {
  // event.preventDefault()
  if (event.target.nodeName !== 'IMG') {
    return;
  };
  console.log(event.target.dataset.source);
};
