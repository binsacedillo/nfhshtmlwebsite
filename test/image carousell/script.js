document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carousel');
    const images = carousel.querySelectorAll('img');
    const counter = carousel.querySelector('#counter');
    let currentImage = 0;
    let interval;

    function updateDisplay() {
        images.forEach((img, idx) => {
            img.style.display = idx === currentImage ? 'block' : 'none';
        });
        counter.textContent = `${currentImage + 1} / ${images.length}`;
    }

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
        updateDisplay();
    }

    interval = setInterval(nextImage, 3000); // Change the duration (in milliseconds) between image transitions
});