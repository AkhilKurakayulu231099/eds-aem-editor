export default function decorate(block) {
  // Find the first image inside the block
  const img = block.querySelector('img');

  // Check if the image exists
  if (img) {
    // Set cursor to pointer to make it clickable
    img.style.cursor = 'pointer';

    // Add click event to the image to redirect
    img.addEventListener('click', () => {
      window.location.href = 'https://www.evidentscientific.com/en/'; // URL you want to redirect to
    });
  } else {
    console.error('No image found in the block');
  }
}
