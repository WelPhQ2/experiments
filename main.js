// main.js

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadContent();
    toggleMenu();
}

function loadContent() {
    // Load content for each page
    document.getElementById('about').innerHTML = 'About content';
    document.getElementById('contact').innerHTML = 'Contact content';
    document.getElementById('projects').innerHTML = 'Projects content';
    document.getElementById('resume').innerHTML = 'Resume content';
}

function toggleMenu() {
    // Toggle mobile menu
    const navbar = document.getElementById('navbar');
    navbar.addEventListener('click', () => {
        navbar.classList.toggle('hidden');
    });
}

function submitForm() {
    // Submit form and display success or error message
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const successMessage = 'Form submitted successfully';
        const errorMessage = 'Error submitting form';
        try {
            // Submit form
            console.log('Form submitted');
            displayMessage(successMessage);
        } catch (error) {
            console.error(error);
            displayMessage(errorMessage);
        }
    });
}

function displayMessage(message) {
    // Display message to user
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = message;
    messageElement.classList.remove('hidden');
    setTimeout(() => {
        messageElement.classList.add('hidden');
    }, 3000);
}