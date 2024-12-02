export default function decorate(block) {
  // Iterate through each row (div) inside the block
  [...block.children].forEach((row) => {
    // Check if the row contains the image wrapper
    const imageDiv = row.querySelector('.image-wrapper');
    const textDiv = row.querySelector('[data-aue-prop="text"]'); // The div with text

    // If the text div is found, wrap it inside a text-wrapper
    if (textDiv) {
      // Create a new div wrapper for the text
      const textWrapper = document.createElement('div');
      textWrapper.classList.add('text-wrapper');  // Add the class for styling

      // Move the content from the text div to the new text wrapper
      textWrapper.append(...textDiv.childNodes);

      // Replace the original text div with the text wrapper
      row.replaceChild(textWrapper, textDiv);
    }

    // If the image div is found, we just make sure it stays intact
    if (imageDiv) {
      // Ensure that the image div has the class 'image-wrapper'
      imageDiv.classList.add('image-wrapper');
    }
  });
}
