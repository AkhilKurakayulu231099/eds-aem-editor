export default function decorate(block) {
  // Select the hero-wrapper div (the main block)
  const [heroWrapper] = block.children;

  // Select the divs for the image and text
  const [imageDiv, textDiv] = heroWrapper.querySelectorAll('div > div');

  // Create new wrapper divs for image and text
  const imageWrapper = document.createElement('div');
  const textWrapper = document.createElement('div');

  // Clone the image element to ensure it loads properly
  imageWrapper.appendChild(imageDiv.cloneNode(true)); // Clone the image div
  textWrapper.appendChild(textDiv);  // Move the text div

  // Replace the original content with the new wrappers
  heroWrapper.replaceChildren(imageWrapper, textWrapper);
}
