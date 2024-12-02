export default function decorate(block) {
  // Select the hero-wrapper div (the main block)
  const [heroWrapper] = block.children;

  // Select the divs containing the image and the text
  const divs = heroWrapper.querySelectorAll('div > div');  // Get all child divs of heroWrapper

  // Ensure divs exist for both image and text
  const imageDiv = divs[0]; // The first div should be the image container
  const textDiv = divs[1];   // The second div should be the text container

  // Create new wrapper divs for image and text
  const imageWrapper = document.createElement('div');
  const textWrapper = document.createElement('div');

  // Check if imageDiv exists
  if (imageDiv) {
    imageWrapper.classList.add('image-wrapper');  // Add class for styling
    imageWrapper.appendChild(imageDiv);  // Move the image div into the wrapper
    heroWrapper.appendChild(imageWrapper);  // Append the image wrapper to the heroWrapper
  } else {
    console.log("No image div found."); // Optional: log if image div is missing
  }

  // Check if textDiv exists
  if (textDiv) {
    textWrapper.classList.add('text-wrapper');  // Add class for styling
    textWrapper.appendChild(textDiv);  // Move the text div into the wrapper
    heroWrapper.appendChild(textWrapper);   // Append the text wrapper to the heroWrapper
  } else {
    console.log("No text div found."); // Optional: log if text div is missing
  }
}
