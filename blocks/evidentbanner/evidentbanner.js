import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Get the first image inside the block
  const img = block.querySelector('img');

  if (img) {
    // Optimize the image (optional)
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);

    // Find the closest anchor <a> wrapping the image (if it exists)
    const anchor = img.closest('a');

    if (anchor) {
      // Make the image clickable by setting a cursor pointer
      img.style.cursor = 'pointer';

      // Add click event listener to redirect to anchor's href when the image is clicked
      img.addEventListener('click', () => {
        window.location.href = anchor.href;  // Redirect to the URL in the <a> tag
      });
    }
  }

  // Hide all content except the image
  block.innerHTML = '';  // Remove all existing content
  block.append(img);     // Append only the image to the block
}
