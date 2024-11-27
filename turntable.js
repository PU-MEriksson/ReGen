// Arrays for two sets of images
const imagesSet1 = Array.from({ length: 60 }, (_, i) => `svart/${String(i + 1).padStart(4, '0')}.png`);
const imagesSet2 = Array.from({ length: 60 }, (_, i) => `vit/${String(i + 1).padStart(4, '0')}.png`);
let currentImages = imagesSet1; // Default to first set
let currentIndex = 0; // Current image index

const mainImage = document.getElementById('main-image');
const prevButton = document.getElementById('prev-button');
const rotateButton = document.getElementById('rotate-button'); // Rotera 45°-knappen
const nextButton = document.getElementById('next-button');
const toggleSetButton = document.getElementById('toggle-set-button');

let isCycling = false; // Flag for `requestAnimationFrame`

// Lazy loading: Preload current, next, and previous images
function preloadImages(index) {
  const totalImages = currentImages.length;

  // Preload the current image
  const currentImg = new Image();
  currentImg.src = currentImages[index];

  // Preload the next image
  const nextIndex = (index + 1) % totalImages;
  const nextImg = new Image();
  nextImg.src = currentImages[nextIndex];

  // Preload the previous image
  const prevIndex = (index - 1 + totalImages) % totalImages;
  const prevImg = new Image();
  prevImg.src = currentImages[prevIndex];
}

// Function to update the main image
function updateImage() {
  mainImage.src = currentImages[currentIndex];
  preloadImages(currentIndex); // Preload nearby images
}

// Start continuous cycling through images in a given direction
function startContinuousCycling(direction) {
  if (isCycling) return; // Avoid multiple animations
  isCycling = true;

  function animate() {
    if (!isCycling) return; // Stop the animation if cycling is false
    currentIndex = (currentIndex + direction + currentImages.length) % currentImages.length;
    updateImage();
    requestAnimationFrame(animate); // Continue animation
  }

  requestAnimationFrame(animate); // Start the animation
}

// Stop continuous cycling
function stopContinuousCycling() {
  isCycling = false; // Stop the animation
}

// Rotate images by 45 degrees on button click
function stepThroughImagesBy45Degrees() {
  const imagesPer45Degrees = Math.round(60 / 8); // 45° corresponds to 8 steps in a 360° rotation
  currentIndex = (currentIndex + imagesPer45Degrees) % currentImages.length; // Advance by 45 degrees
  updateImage();
}

// Event listeners for the rotate button (Rotera 45°)
rotateButton.addEventListener('click', (event) => {
  if (!event.detail || event.detail === 1) {
    stepThroughImagesBy45Degrees(); // Advance by 45 degrees
  }
});

// Event listeners for continuous cycling (Next button)
nextButton.addEventListener('mousedown', () => {
  startContinuousCycling(1); // Forward direction
});
nextButton.addEventListener('mouseup', stopContinuousCycling);
nextButton.addEventListener('mouseleave', stopContinuousCycling);

// Add touch support for next button
nextButton.addEventListener('touchstart', () => {
  startContinuousCycling(1); // Forward direction
});
nextButton.addEventListener('touchend', stopContinuousCycling);
nextButton.addEventListener('touchcancel', stopContinuousCycling);

// Event listeners for continuous cycling (Previous button)
prevButton.addEventListener('mousedown', () => {
  startContinuousCycling(-1); // Backward direction
});
prevButton.addEventListener('mouseup', stopContinuousCycling);
prevButton.addEventListener('mouseleave', stopContinuousCycling);

// Add touch support for previous button
prevButton.addEventListener('touchstart', () => {
  startContinuousCycling(-1); // Backward direction
});
prevButton.addEventListener('touchend', stopContinuousCycling);
prevButton.addEventListener('touchcancel', stopContinuousCycling);

// Toggle between the two sets of images
let isSet1Active = true;
toggleSetButton.addEventListener('click', () => {
  if (isSet1Active) {
    currentImages = imagesSet2; // Switch to second set
    toggleSetButton.textContent = "Svart"; // Update button text
  } else {
    currentImages = imagesSet1; // Switch back to first set
    toggleSetButton.textContent = "Vit"; // Update button text
  }
  isSet1Active = !isSet1Active;
  currentIndex = 0; // Reset to the first image in the new set
  updateImage();
});

// Initialize the first image
updateImage();
