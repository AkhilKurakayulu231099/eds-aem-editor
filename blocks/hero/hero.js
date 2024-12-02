export default function decorate(block) {
  // Select the hero-wrapper div (the main block)
  const [heroWrapper] = block.children;

  // Select the div containing both the image and text
  const divs = heroWrapper.querySelectorAll('div > div');

  // Ensure that divs are present for both image and text
  const imageDiv = divs[0]; // The first div should be the image container
  const textDiv = divs[1];   // The second div should be the text container

  // Create new wrapper divs for image and text
  const imageWrapper = document.createElement('div');
  const textWrapper = document.createElement('div');

  // Move the image div and text div into their respective wrappers
  if (imageDiv) {
    imageWrapper.appendChild(imageDiv);  // Append the image div to imageWrapper
  }
  if (textDiv) {
    textWrapper.appendChild(textDiv);  // Append the text div to textWrapper
  }

  // Clear the original heroWrapper content and append the new wrappers
  heroWrapper.innerHTML = '';  // Clear the original content
  heroWrapper.appendChild(imageWrapper);  // Add the image wrapper
  heroWrapper.appendChild(textWrapper);   // Add the text wrapper
}
