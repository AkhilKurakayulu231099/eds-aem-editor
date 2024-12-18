import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Look for an image inside the block
  const img = block.querySelector('img');

  if (img) {
    // Optimize the image (if needed)
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);

    // Find the closest anchor tag around the image
    const anchor = img.closest('a');

    if (anchor) {
      // Add cursor style to indicate that the image is clickable
      img.style.cursor = 'pointer';

      // Redirect to the anchor href when the image is clicked
      img.addEventListener('click', () => {
        window.location.href = anchor.href;
      });
    }

    // Make sure only the image is appended to the block
    block.innerHTML = ''; // Remove all other content
    block.appendChild(img); // Append only the image
  } else {
    // If no image found, ensure the block is empty
    block.innerHTML = '';
  }
}
