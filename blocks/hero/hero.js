export default function decorate(block) {
  // Iterate through each row (div) inside the block
  [...block.children].forEach((row) => {
    // Assuming the second div contains the text, handle it accordingly
    const textDiv = row.children[1];  // The second div should be the text content
    const imageDiv = row.children[0];  // The first div could be the image content (optional)

    // Check if the text div exists
    if (textDiv) {
      // Create a wrapper div for the text content
      const textWrapper = document.createElement('div');
      textWrapper.className = 'text-wrapper';  // Add class for styling

      // Append the text div content inside the new wrapper
      textWrapper.append(...textDiv.childNodes);

      // Replace the original row with the wrapped text content
      row.replaceChild(textWrapper, textDiv);
    }

    // Optional: Handle image div (if needed)
    if (imageDiv) {
      const pic = imageDiv.querySelector('picture');
      if (pic) {
        // If the picture is the only content in the div, add a class to style it
        imageDiv.classList.add('image-wrapper');
      }
    }
  });
}
