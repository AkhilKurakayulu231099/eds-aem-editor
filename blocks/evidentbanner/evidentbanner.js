export default function decorate(block) {
  // Select the first image inside the block
  const img = block.querySelector('img');

  // Check if the image is found
  if (img) {
    // Set cursor to pointer to indicate that it's clickable
    img.style.cursor = 'pointer';

    // Add a click event to the image to redirect to the desired URL
    img.addEventListener('click', () => {
      // Specify the URL where you want the image to redirect
      window.location.href = 'https://www.evidentscientific.com/en/'; // Replace this with the actual URL
    });

    // Ensure only the image is visible (if any other content exists in the block, remove it)
    block.innerHTML = ''; // Clear all content inside the block
    block.appendChild(img); // Append the image to the block
  } else {
    // If no image is found, clear the block (optional)
    block.innerHTML = ''; // Clear the block
  }
}
