export default function decorate(block) {
  // Iterate through each row (div) inside the block
  [...block.children].forEach((row) => {
    // Check if the first child is the image div
    const imageDiv = row.querySelector('.image-wrapper'); // Look for the image wrapper div
    const textDiv = row.querySelector('[data-aue-prop="text"]'); // The second div should be the text content
    
    // Process the text div if found
    if (textDiv) {
      // Create a wrapper div for the text content
      const textWrapper = document.createElement('div');
      textWrapper.classList.add('text-wrapper');  // Add class for styling

      // Append the content of textDiv inside the wrapper
      textWrapper.append(...textDiv.childNodes);

      // Replace the original text div with the new textWrapper
      row.replaceChild(textWrapper, textDiv);
    }

    // Optional: Handle the image div (no need to wrap it, just ensure the class is added)
    if (imageDiv) {
      imageDiv.classList.add('image-wrapper'); // Ensure it has the class
    }
  });
}
