/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */
import imageRef from "../gallery-items.js";
const galleryRef = document.querySelector('.js-gallery');
let element = document.createElement('li');
ingredients.forEach((elem) => {
ingredientsRef.insertAdjacentHTML('beforeend', `<li>${elem}</li>`);
});
console.log(ingredientsRef);