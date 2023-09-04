const thumbnails = document.querySelectorAll('.thumbnail');
const fullscreen = document.querySelector('.fullscreen');
const fullscreenImage = document.getElementById('fullscreen-image');
const closeButton = document.getElementById('close-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentImageIndex = 0;

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentImageIndex = index;
        showFullscreenImage(currentImageIndex);
    });
});

closeButton.addEventListener('click', () => {
    hideFullscreenImage();
});

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
    showFullscreenImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
    showFullscreenImage(currentImageIndex);
});

function showFullscreenImage(index) {
    fullscreenImage.src = thumbnails[index].src;
    fullscreen.style.display = 'block';
}

function hideFullscreenImage() {
    fullscreen.style.display = 'none';
}
