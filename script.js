// Get all load more buttons
const loadMoreButtons = document.querySelectorAll('.load-more');

// Add event listener to each load more button
loadMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the content to be loaded
        const content = button.nextElementSibling;

        // Check if the content is already loaded
        if (content.getAttribute('aria-hidden') === 'true') {
            // Load the content
            content.setAttribute('aria-hidden', 'false');
            button.textContent = 'Less';
        } else {
            // Hide the content
            content.setAttribute('aria-hidden', 'true');
            button.textContent = 'Load More';
        }
    });
});

// Get the form
const form = document.querySelector('form');

// Add event listener to the form
form.addEventListener('submit', event => {
    // Prevent default form submission
    event.preventDefault();

    // Get the form data
    const formData = new FormData(form);

    // Send the form data to the server
    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});