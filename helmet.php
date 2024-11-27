<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    #rotating-container {
      width: 300px;
      /* Adjust based on your image size */
      height: 300px;
      /* Adjust based on your image size */
      overflow: hidden;
      position: relative;
      cursor: pointer;
      /* Optional */
    }

    #helmet {
      width: 100%;
      height: auto;
      display: block;
    }

    #rotating-container {
      width: 300px;
      /* Adjust based on your image size */
      height: 300px;
      /* Adjust based on your image size */
      overflow: hidden;
      position: relative;
      cursor: pointer;
      /* Optional */
    }

    #helmet {
      width: 100%;
      height: auto;
      display: block;
    }

    .rotating-helmet {
      width: 300px;
      /* Adjust to your image dimensions */
      height: 300px;
      /* Adjust to your image dimensions */
      background-image: url("images/helmet_01.jpg");
      /* Initial image */
      background-size: cover;
      animation: rotateHelmet 2s steps(60) infinite;
      /* Adjust duration as needed */
    }
  </style>
</head>

<body>

  <div class="rotating-helmet"></div>
  <div id="rotating-container">
    <img id="helmet" src="images/helmet-black/0001.png" alt="Rotating Helmet">
  </div>
  <button id="toggle-color">Switch to White Helmet</button>
  <script>
    const helmet = document.getElementById('helmet');
    const container = document.getElementById('rotating-container');
    const toggleButton = document.getElementById('toggle-color');
    const totalImages = 60; // Total number of images

    let currentImage = 1; // Start with the first image
    let rotationInterval = null; // Store the interval ID
    let isBlackHelmet = true; // Track the current helmet color

    // Function to update the image
    function updateImage() {
      currentImage = (currentImage % totalImages) + 1; // Loop back to 1 after reaching the last image
      const formattedIndex = currentImage.toString().padStart(4, '0'); // Format as "0001", "0002", etc.
      const folder = isBlackHelmet ? 'helmet-black' : 'helmet-white';
      helmet.src = `images/${folder}/${formattedIndex}.png`;
    }

    // Start rotating on hover
    container.addEventListener('mouseenter', () => {
      rotationInterval = setInterval(updateImage, 100); // Change image every 100ms (adjust speed as needed)
    });

    // Stop rotating on mouse leave
    container.addEventListener('mouseleave', () => {
      clearInterval(rotationInterval); // Stop the interval
      rotationInterval = null; // Reset the interval ID
    });

    // Toggle between black and white helmets
    toggleButton.addEventListener('click', () => {
      isBlackHelmet = !isBlackHelmet; // Toggle the helmet color
      toggleButton.textContent = isBlackHelmet ? 'Switch to White Helmet' : 'Switch to Black Helmet'; // Update button text
      currentImage = 1; // Reset to the first image
      updateImage(); // Update the image immediately
    });

    // const helmet = document.getElementById('helmet');
    // const container = document.getElementById('rotating-container');
    // const totalImages = 60; // Total number of images

    // // Add an event listener for mouse movement within the container
    // container.addEventListener('mousemove', (event) => {
    //   const rect = container.getBoundingClientRect();
    //   const x = event.clientX - rect.left; // Get the mouse's X position within the container
    //   const containerWidth = rect.width; // Width of the container

    //   // Calculate the image index based on mouse position
    //   const imageIndex = Math.floor((x / containerWidth) * totalImages) + 1;

    //   // Ensure index is always between 1 and totalImages
    //   const formattedIndex = imageIndex.toString().padStart(4, '0'); // Format as "0001", "0002", etc.

    //   // Update the image source
    //   helmet.src = `images/helmet-black/${formattedIndex}.png`;
    // });

    // container.addEventListener('mouseleave', () => {
    //   helmet.src = 'images/helmet-black/0001.png'; // Reset to the first image on mouse leave
    // });

    const helmet = document.getElementById('helmet');
    const container = document.getElementById('rotating-container');
    const totalImages = 60; // Total number of images

    let currentImage = 1; // Start with the first image
    let rotationInterval = null; // Store the interval ID

    // Function to update the image
    function updateImage() {
      currentImage = (currentImage % totalImages) + 1; // Loop back to 1 after reaching the last image
      const formattedIndex = currentImage.toString().padStart(4, '0'); // Format as "0001", "0002", etc.
      helmet.src = `images/helmet-black/${formattedIndex}.png`;
    }

    // Start rotating on hover
    container.addEventListener('mouseenter', () => {
      rotationInterval = setInterval(updateImage, 100); // Change image every 100ms (adjust speed as needed)
    });

    // Stop rotating on mouse leave
    container.addEventListener('mouseleave', () => {
      clearInterval(rotationInterval); // Stop the interval
      rotationInterval = null; // Reset the interval ID
    });
  </script>
</body>

</html>