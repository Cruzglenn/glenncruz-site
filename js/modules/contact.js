export function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {
            // Log the form data to the console for debugging
            console.log('Form submitted:', formData);

            // Send the form data using EmailJS
            const response = await emailjs.send('service_5a4kuyn', 'template_wrzsu2h', formData);

            // Check if the response is successful
            if (response.status === 200) {
                console.log('Message sent successfully:', response);

                // Clear form after sending
                contactForm.reset();

                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again.');
        }
    });
}
