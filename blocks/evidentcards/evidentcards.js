export default function decorate(block) {
  // Find the image inside the block
  const img = block.querySelector('img');
  const h6 = block.querySelector('h6');
  // Find the anchor tag inside the block that contains the URL
  const anchor = block.querySelector('a');

  if (img && anchor) {
    // Make both the image and h6 clickable, pointing to the anchor's href
    const handleClick = () => {
      window.location.href = anchor.href; // Redirect to the URL
    };

    // Add the click event to both the image and the h6
    img.style.cursor = 'pointer'; // Change cursor to pointer on hover
    h6.style.cursor = 'pointer';  // Change cursor to pointer on hover
    img.addEventListener('click', handleClick);
    h6.addEventListener('click', handleClick);

    // Clear all content inside the block and append the h6 and image
    block.innerHTML = ''; // Remove all content inside the block
    block.appendChild(h6); // Append the h6 first
    block.appendChild(img); // Append the image second
  } else {
    // If no image or anchor is found, clear the block
    block.innerHTML = ''; // Clear the block if no image or anchor is found
  }
}
