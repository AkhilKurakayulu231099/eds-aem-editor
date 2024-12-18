import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Select the image inside the block
  const img = block.querySelector('img');

  if (img) {
    // Optimize the image (optional)
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);

    // Find the <a> tag around the image
    const anchor = img.closest('a');

    if (anchor) {
      // Make the image clickable
      img.style.cursor = 'pointer'; // Change cursor to indicate it's clickable
      img.addEventListener('click', () => {
        window.location.href = anchor.href; // Redirect to the <a> href URL when the image is clicked
      });
    }
  }

  // Clear any other content (if present)
  block.textContent = '';
  block.append(img);
}
