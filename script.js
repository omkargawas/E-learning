document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (validateContactForm(name, email, message)) {
                alert('Message sent successfully!');
                contactForm.reset();
            }
        });
    }
});

// Validate Contact Form
function validateContactForm(name, email, message) {
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

// Validate Email Format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
