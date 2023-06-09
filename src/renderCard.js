import { cardBlock } from "./index";
let gallery;
export function renderImgCard(response) {
    if (!response) {
        return;
    } const markupImg = response.data.hits.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads, }) => {
        return `<div class="photo-card">
        <a class="gallery__link" href="${largeImageURL}" data-lightbox="gallery-item">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
     </a>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            ${likes}
        </p>
        <p class="info-item">
            <b>Views</b>
            ${views}
        </p>
        <p class="info-item">
            <b>Comments</b>
            ${comments}
        </p>
        <p class="info-item">
            <b>Downloads</b>
            ${downloads}
        </p>
    </div>
</div> `
    }).join('');
    cardBlock.insertAdjacentHTML('beforeend', markupImg);
    if (!gallery) {
        gallery = new SimpleLightbox('.gallery a', {
            captions: true,
            captionsData: "alt",
        });
    }
    gallery.refresh();
};