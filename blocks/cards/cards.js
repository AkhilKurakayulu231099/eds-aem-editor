import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Create a new unordered list (ul) element
  const ul = document.createElement('ul');
  
  // Loop through each child element (row) inside the block
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li); // Possibly moves any custom instrumentation data to the li element
    
    // Move all child elements of the row to the new li
    while (row.firstElementChild) li.append(row.firstElementChild);

    // Iterate over li children to add appropriate classes
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image'; // Class for the image container
      } else {
        div.className = 'cards-card-body'; // Class for the body of the card
      }
    });

    // Create a link that will wrap the content and be clickable
    const link = document.createElement('a');
    link.className = 'cards-card-link'; // Class for the clickable link
    link.href = '#'; // Set appropriate link or dynamic value here

    // Append the card body and image into the link
    li.querySelector('.cards-card-body') && link.appendChild(li.querySelector('.cards-card-body'));
    li.querySelector('.cards-card-image') && link.appendChild(li.querySelector('.cards-card-image'));
    
    li.innerHTML = ''; // Clear li content as it is now in the link
    li.appendChild(link); // Append the link containing the body and image

    // Append the li to the ul
    ul.append(li);
  });

  // Optimize images inside the <picture> tags
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });

  // Clear the block's existing content and append the new ul
  block.textContent = '';
  block.append(ul);
}
