export default function decorate(block) {
  // Get the children of the block (assuming it's a structure like your HTML example)
  const [heroWrapper] = block.children;
  
  // Select the divs for the image and text
  const [imageDiv, textDiv] = heroWrapper.querySelectorAll('div > div');
  
  // Create new wrapper divs for image and text
  const imageWrapper = document.createElement('div');
  const textWrapper = document.createElement('div');
  
  // Move the image and text into the new wrapper divs
  imageWrapper.appendChild(imageDiv.cloneNode(true)); // Clone the image element to ensure it loads properly
  textWrapper.appendChild(textDiv);
  
  // Clear the original heroWrapper and append the new divs
  heroWrapper.innerHTML = '';
  heroWrapper.appendChild(imageWrapper);
  heroWrapper.appendChild(textWrapper);
}
