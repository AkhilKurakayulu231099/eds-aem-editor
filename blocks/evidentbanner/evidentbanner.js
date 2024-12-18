export default function decorate(block) {
  // Find the image inside the block
  const img = block.querySelector('img');
  
  // Find the anchor tag inside the block that contains the URL
  const anchor = block.querySelector('a');

  if (img && anchor) {
    // Make the image clickable, pointing to the anchor's href
    img.style.cursor = 'pointer'; // Change cursor to pointer on hover

    // Add a click event to the image to redirect to the URL in the anchor
    img.addEventListener('click', () => {
      window.location.href = anchor.href; // Redirect to the URL
    });

    // Clear all content inside the block and append only the image
    block.innerHTML = ''; // Remove all content inside the block
    block.appendChild(img); // Append only the image
  } else {
    // If no image or anchor is found, clear the block
    block.innerHTML = ''; // Clear the block if no image or anchor is found
  }
}
