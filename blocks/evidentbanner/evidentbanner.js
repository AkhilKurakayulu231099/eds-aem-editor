export default function decorate(block) {
  // Find the image inside the block
  const img = block.querySelector('img');
  console.log(img);

  if (img) {
    // Find the anchor (<a>) tag wrapping the image
    const anchor = img.closest('a');
    console.log(a);

    if (anchor) {
      // Make the image clickable and redirect to the anchor's href
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        window.location.href = anchor.href;  // Redirect to the URL in the anchor
      });
    }

    // Remove all other content in the block, leaving only the image
    block.innerHTML = '';  // Clear all content
    block.appendChild(img);  // Append the image to the block
  } else {
    // If no image found, clear the block
    block.innerHTML = '';  // Clear the block if no image is found
  }
}
