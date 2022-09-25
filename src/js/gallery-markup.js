export default function createImgCard(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `
    )
    .join("");
}