// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/common.css';
import '../css/01-gallery.css';
import createImgCard from './gallery-markup';
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const markup = createImgCard(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox('.gallery__item', { 
  captionsData: 'alt',
  captionDelay: 250,
 });