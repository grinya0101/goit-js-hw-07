import { galleryItems } from './gallery-items.js';



const gallery = document.querySelector(".gallery");
gallery.addEventListener('click', onContaiterClick)


 

const imgGallery = galleryItems.map(({preview, original, description}) => {
    console.log(galleryItems);
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
       
}).join(" ");

gallery.insertAdjacentHTML("beforeend", ` ${imgGallery}`);
 
const lightbox = new SimpleLightbox('.gallery a', {imgGallery});


function onContaiterClick (evt){
    evt.preventDefault()
   
    if(!evt.target.classList.contains('gallery__image')){
        return
      } 
      const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}">
  `)
      console.log(evt.target.dataset.sourse)
      instance.show()
      captionDelay = `alt="${description}"`

     
}
   
const imageСaption = new SimpleLightbox('.gallery a', {
 
    overlayOpacity: 1,
    captionsData: 'alt',
    captionDelay: 250,
  });


