export default function decorate(block) {
  // Select all the children of the first element (assuming the structure is consistent)
  const divs = [...block.firstElementChild.children];

  // Log the divs for debugging
  console.log('Divs inside hero-wrapper:', divs);

  // Add a class based on the number of child divs
  block.classList.add(`columns-${divs.length}-cols`);

  // Look for the second div, which we assume to be the text container
  const textDiv = divs[1];  // Assuming second div contains the text content

  // Log the content of the text div
  console.log('Text Div:', textDiv);

  if (textDiv) {
    // Create a new wrapper div for the text content
    const textWrapper = document.createElement('div');
    textWrapper.classList.add('text-wrapper');  // Add class for styling
    
    // Move the entire text div into the new wrapper
    textWrapper.appendChild(textDiv);

    // Append the new wrapper to the hero-wrapper
    block.appendChild(textWrapper);
  } else {
    console.log("No text div found.");
  }

  // Setup image columns: We can check if any div contains an image (optional)
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // If the picture is the only content in the column, mark it as an image column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
