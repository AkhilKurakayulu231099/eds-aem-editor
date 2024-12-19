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
        // Handle the link inside the <p> tag
        const link = div.querySelector('a');
        if (link) {
          // Create a new anchor element to replace the raw URL
          const cardLink = document.createElement('a');
          cardLink.href = link.href;
          cardLink.textContent = link.title || link.href;  // Use the title or URL as text
          cardLink.className = 'card-link'; // Optional: Add a class for styling
          div.innerHTML = ''; // Clear the content of <p>
          div.appendChild(cardLink); // Append the anchor tag to the body
        }
        div.className = 'evidentcard-body';  // Class for the body containing the link
      } else {
        div.className = 'evidentcard-header';  // Default class for the header
      }
    }

    // Find the image, header (h6), and anchor inside the card
    const img = li.querySelector('img');
    const h6 = li.querySelector('h6');
    const anchor = li.querySelector('a');

    if (img && h6 && anchor) {
      const handleClick = () => {
        window.location.href = anchor.href; // Redirect to the URL
      };

      // Make both the image and h6 clickable
      img.style.cursor = 'pointer'; // Change cursor to pointer on hover
      h6.style.cursor = 'pointer';  // Change cursor to pointer on hover

      img.addEventListener('click', handleClick);
      h6.addEventListener('click', handleClick);
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
