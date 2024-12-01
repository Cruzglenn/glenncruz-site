// Initialize EmailJS with your user ID
emailjs.init("NhekPF6O91tsIibFg");

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send the form data using EmailJS
    try {
        const response = await emailjs.send('service_5a4kuyn', 'template_s4l6xrf', formData);
        console.log('Message sent successfully:', response);
        
        // Clear form
        contactForm.reset();
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
    } catch (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send your message. Please try again.');
    }
});
