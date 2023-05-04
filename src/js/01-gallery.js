// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryRef = document.querySelector('.gallery');

const liEl = galleryItems.reduce((item, { preview, original, description }) => 
  item + `<li class="gallery__item">
   <a class="gallery__link" 
      href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
,"");

galleryRef.insertAdjacentHTML("beforeend", liEl)
const galleryLightBox = new SimpleLightbox('.gallery__link', {captionsData: "alt", captionsDelay: 250});
// Change code below this line


