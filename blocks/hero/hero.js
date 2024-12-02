export default function decorate(block) {
  // Select the hero-wrapper div (the main block)
  const [heroWrapper] = block.children;

  // Select all direct divs inside the heroWrapper
  const divs = heroWrapper.querySelectorAll('div > div');

  // Log the divs to see what they contain
  console.log('Divs inside hero-wrapper:', divs);

  // Check if the second div exists (for text content)
  const textDiv = divs[1]; // We expect the second div to contain the text

  // Log the content of textDiv to ensure it contains the text content
  console.log('Text Div:', textDiv);

  // Create a new wrapper for text content
  const textWrapper = document.createElement('div');

  // Check if textDiv exists and contains the expected content
  if (textDiv) {
    // Log the contents of textDiv to check if it's correct
    console.log('Text content in textDiv:', textDiv.innerHTML);

    // We can either append the entire text div or extract specific content
    textWrapper.classList.add('text-wrapper');  // Add class for styling
    textWrapper.appendChild(textDiv);  // Move the entire text div into the wrapper
    heroWrapper.appendChild(textWrapper);  // Append the text wrapper to the heroWrapper
  } else {
    console.log("No text div found."); // Log if text div is missing
  }
}
