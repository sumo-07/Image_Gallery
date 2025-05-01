document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const spinner = document.querySelector(".spinner");
    const closeBtn = document.getElementById("close-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
  
    let images = [];
    let currentIndex = 0;
  
    // Collect all images in the gallery
    document.querySelectorAll(".filter img").forEach((img, index) => {
      images.push(img.getAttribute("data-full"));
      img.addEventListener("click", () => {
        currentIndex = index;
        openLightbox();
      });
    });
  
    // Open the lightbox and load the current image
    const openLightbox = () => {
      lightbox.classList.add("active");
      loadImage();
    };

  
    // Close the lightbox
    const closeLightbox = () => {
      lightbox.classList.remove("active");
    };
  
    // Load the image at the current index
    const loadImage = () => {
      lightbox.classList.add("loading");
      lightboxImg.src = ""; // Clear the current image
      lightboxImg.onload = () => {
        lightbox.classList.remove("loading");
      };
      lightboxImg.src = images[currentIndex];
    };
  
    // Show the previous image
    const showPrevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      loadImage();
    };
  
    // Show the next image
    const showNextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      loadImage();
    };
  
    // Event listeners for navigation and close buttons
    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);
  
    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("active")) return;
  
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "Escape") closeLightbox();
    });
  });
