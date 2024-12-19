
import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Create the <ul> element to hold the list of cards
  const ul = document.createElement('ul');
  
  // Loop through all the child elements of the block (which are the "evidentcard" components)
  [...block.children].forEach((card) => {
    // Create a <li> element for each card
    const li = document.createElement('li');
    moveInstrumentation(card, li);
    
    // Loop through the child elements of each card to structure them
    while (card.firstElementChild) {
      const div = card.firstElementChild;
      li.append(div);
      
      // Apply class names to the <div> elements depending on their content
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'evidentcard-image';  // Class for the image container
      } else if (div.querySelector('p')) {
        div.className = 'evidentcard-body';  // Class for the body containing the link
      } else {
        div.className = 'evidentcard-header';  // Default class for the header
      }
    }

    // Append the structured card item to the list
    ul.append(li);
  });

  // Now, process the images within the "picture" elements
  ul.querySelectorAll('picture > img').forEach((img) => {
    // Create optimized picture using the custom function
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    
    // Replace the original <picture> with the optimized picture
    img.closest('picture').replaceWith(optimizedPic);
  });

  // Clear the existing content of the block and append the structured <ul>
  block.textContent = '';
  block.append(ul);
}
