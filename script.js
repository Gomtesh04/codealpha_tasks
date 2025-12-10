const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

// Open lightbox
galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

// Show image
function showImage() {
    lightboxImg.src = galleryItems[currentIndex].src;
}

// Navigation
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage();
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = "none";
});
 
// Filters
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        let filter = btn.dataset.filter;

        galleryItems.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

