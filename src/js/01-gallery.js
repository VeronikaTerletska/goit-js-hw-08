// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// const picturesContainer = document.querySelector(".gallery");
// const galleryMarkup = createGalleryItemsMarkup(galleryItems);

// picturesContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// picturesContainer.addEventListener("click", onPicturesContainerClick);

// function createGalleryItemsMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join("");
// }
// //
// function onPicturesContainerClick(event) {
//   event.preventDefault();

//   const isGalleryImageEl = event.target.classList.contains("gallery__image");

//   if (!isGalleryImageEl) {
//     return;
//   }
//   const galleryOriginalUrl = event.target.dataset.source;

//   const instance = basicLightbox.create(
//     `
//     <img src="${galleryOriginalUrl}" width="800" height="600">
// `,
//     {
//       onShow: instance => {
//         document.addEventListener("keydown", function (event) {
//           if (event.key === "Escape") {
//             return instance.close();
//           }
//         });
//       },
//       onClose: instance => {
//         document.addEventListener("keydown", function (event) {
//           if (event.key === "Escape") {
//             return instance.close();
//           }
//         });
//       },
//     }
//   );

//   instance.show();
// }
