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
            await emailjs.send(
                "service_pkv15vq", // Service ID
                "template_cqz5nll", // Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                }
            );
            
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