  // Arrays for two sets of images
  const imagesSet1 = Array.from({
    length: 60
  }, (_, i) => `svart/${String(i + 1).padStart(4, '0')}.png`);
  const imagesSet2 = Array.from({
    length: 60
  }, (_, i) => `vit/${String(i + 1).padStart(4, '0')}.png`);
  let currentImages = imagesSet1; // Default to first set
  let currentIndex = 0; // Current image index
  let intervalId; // Interval ID for continuous cycling

  const mainImage = document.getElementById('main-image');
  const prevButton = document.getElementById('prev-button');
  const rotateButton = document.getElementById('rotate-button');
  const nextButton = document.getElementById('next-button');
  const toggleSetButton = document.getElementById('toggle-set-button');

  // Function to update the image
  function updateImage() {
    mainImage.src = currentImages[currentIndex];
  }

  // Start continuous cycling through images in a given direction
  function startContinuousCycling(direction) {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + direction + currentImages.length) % currentImages.length;
      updateImage();
    }, 100); // Adjust speed here (100ms per image)
  }

  // Stop continuous cycling
  function stopContinuousCycling() {
    clearInterval(intervalId);
  }

  // Rotate images in steps on single click
  function stepThroughImages() {
    currentIndex = (currentIndex + 15) % currentImages.length; // Jump by 15 images
    updateImage();
  }

  // Event listeners for the rotate button
  rotateButton.addEventListener('click', (event) => {
    if (!event.detail || event.detail === 1) {
      stepThroughImages(); // Advance by 15 images
    }
  });

  // Event listeners for continuous cycling (Next button)
  nextButton.addEventListener('mousedown', () => {
    startContinuousCycling(1); // Forward direction
  });
  nextButton.addEventListener('mouseup', stopContinuousCycling);
  nextButton.addEventListener('mouseleave', stopContinuousCycling);

  // Event listeners for continuous cycling (Previous button)
  prevButton.addEventListener('mousedown', () => {
    startContinuousCycling(-1); // Backward direction
  });
  prevButton.addEventListener('mouseup', stopContinuousCycling);
  prevButton.addEventListener('mouseleave', stopContinuousCycling);

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