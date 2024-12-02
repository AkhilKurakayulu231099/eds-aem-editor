
export default function decorate(block) {
  // Select the hero-wrapper div (the main block)
  const [heroWrapper] = block.children;

  // Select all direct divs inside the heroWrapper (there should be at least 2)
  const divs = heroWrapper.querySelectorAll('div > div'); 

  // Select the image and text divs
  const imageDiv = divs[0];  // The first div should be the image container
  const textDiv = divs[1];   // The second div should be the text container (or inner content)

  // Create new wrapper divs for image and text
  const imageWrapper = document.createElement('div');
  const textWrapper = document.createElement('div');

  // Check if imageDiv exists and is properly selected
  if (imageDiv) {
    imageWrapper.classList.add('image-wrapper');  // Add class for styling
    imageWrapper.appendChild(imageDiv);  // Move the image div into the wrapper
    heroWrapper.appendChild(imageWrapper);  // Append the image wrapper to the heroWrapper
  } else {
    console.log("No image div found."); // Log if image div is missing
  }

  // Check if textDiv exists and contains text content
  if (textDiv && textDiv.querySelector('[data-aue-prop="text"]')) {
    textWrapper.classList.add('text-wrapper');  // Add class for styling
    // Check if the text container has content
    const textContent = textDiv.querySelector('[data-aue-prop="text"]');
    textWrapper.appendChild(textContent);  // Move the text div into the wrapper
    heroWrapper.appendChild(textWrapper);   // Append the text wrapper to the heroWrapper
  } else {
    console.log("No text div found or text content is missing."); // Log if text div or content is missing
  }
}
