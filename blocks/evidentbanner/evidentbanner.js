
import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* Change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image';
      } else {
        div.className = 'cards-card-body';
      }
    });
    ul.append(li);
  });

  // Optimize images
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);

    // Make the image clickable by wrapping it with a link behavior
    const anchor = img.closest('a'); // Find the closest <a> tag around the image
    if (anchor) {
      img.style.cursor = 'pointer'; // Change cursor to indicate it's clickable
      img.addEventListener('click', () => {
        window.location.href = anchor.href; // Redirect to the <a> href URL when image is clicked
      });
    }
  });

  block.textContent = '';
  block.append(ul);
}
