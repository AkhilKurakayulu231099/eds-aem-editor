export default function decorate(block) {
  // Select the hero-wrapper div (the main block)
  const [heroWrapper] = block.children;

  // Select the divs containing the image and the text
  const imageDiv = heroWrapper.querySelector('div > div > picture');
  const textDiv = heroWrapper.querySelector('div > div > div[data-aue-prop="text"]');

  // Create new wrapper divs for image and text
  const imageWrapper = document.createElement('div');
  const textWrapper = document.createElement('div');

  // Move the image div and text div into their respective wrappers
  if (imageDiv) {
    imageWrapper.classList.add('image-wrapper');  // Add class for styling
    imageWrapper.appendChild(imageDiv.parentElement);  // Append the image div's parent (which is the container div)
  }

  if (textDiv) {
    textWrapper.classList.add('text-wrapper');  // Add class for styling
    textWrapper.appendChild(textDiv);  // Move the text div into textWrapper
  }

  // Clear the original heroWrapper content and append the new wrappers
  heroWrapper.innerHTML = '';  // Remove the original content
  heroWrapper.appendChild(imageWrapper);  // Add the image wrapper
  heroWrapper.appendChild(textWrapper);   // Add the text wrapper
}
