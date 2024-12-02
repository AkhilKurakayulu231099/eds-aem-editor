export default function decorate(block) {
  // Select the hero-wrapper div (the main block)
  const [heroWrapper] = block.children;

  // Select the div containing the image (picture element) and text (richtext)
  const divs = heroWrapper.querySelectorAll('div > div');  // Get all child divs of heroWrapper

  // Ensure divs exist for both image and text
  const imageDiv = divs[0]; // The first div should be the image container
  const textDiv = divs[1];   // The second div should be the text container

  // Create new wrapper divs for image and text
  const imageWrapper = document.createElement('div');
  const textWrapper = document.createElement('div');

  // Move the image div and text div into their respective wrappers
  if (imageDiv) {
    imageWrapper.classList.add('image-wrapper');  // Add class for styling
    imageWrapper.appendChild(imageDiv);  // Move the image div into the wrapper
  }

  if (textDiv) {
    textWrapper.classList.add('text-wrapper');  // Add class for styling
    textWrapper.appendChild(textDiv);  // Move the text div into the wrapper
  }

  // Clear the original heroWrapper content and append the new wrappers
  heroWrapper.innerHTML = '';  // Clear the original content
  if (imageWrapper) {
    heroWrapper.appendChild(imageWrapper);  // Add the image wrapper
  }
  if (textWrapper) {
    heroWrapper.appendChild(textWrapper);   // Add the text wrapper
  }
}
