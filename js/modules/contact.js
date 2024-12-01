export function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {
            // Add your form submission logic here
            console.log('Form submitted:', formData);
            
            // Clear form
            contactForm.reset();
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again.');
        }
    });
}