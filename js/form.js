// Initialize EmailJS with your user ID
emailjs.init("NhekPF6O91tsIibFg");

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send the form data using EmailJS
    try {
        // Replace 'service_5a4kuyn' with your Service ID and 'template_wrzsu2h' with your Template ID
        const response = await emailjs.send('service_5a4kuyn', 'template_wrzsu2h', formData);
        console.log('Message sent successfully:', response);
        
        // Clear form after sending
        contactForm.reset();
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
    } catch (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send your message. Please try again.');
    }
});
