export const liEl = galleryItems.reduce((item, { preview, original, description }) => 
  item + `<li class="gallery__item">
   <a class="gallery__link" 
      href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
,"");