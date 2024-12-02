export default function decorate(block) {
  // Select the hero-wrapper div (the main block)
  const [heroWrapper] = block.children;

  // Select the image div (should contain <picture> with <img>) and text div (should contain richtext)
  const imageDiv = heroWrapper.querySelector('div > div > picture');  // Find the <picture> element (for the image)
  const textDiv = heroWrapper.querySelector('div > div > div[data-aue-prop="text"]');  // Find the text content

  // Create new wrapper divs for image and text
  const imageWrapper = document.createElement('div');
  const textWrapper = document.createElement('div');

  // Move the image and text into the new wrapper divs
  if (imageDiv) {
    imageWrapper.appendChild(imageDiv);  // Append the image div to imageWrapper
  }
  if (textDiv) {
    textWrapper.appendChild(textDiv);  // Append the text div to textWrapper
  }

  // Clear the original heroWrapper and append the new divs
  heroWrapper.innerHTML = '';  // Remove the original content
  heroWrapper.appendChild(imageWrapper);  // Add the image wrapper
  heroWrapper.appendChild(textWrapper);   // Add the text wrapper
}
