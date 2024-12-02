import Swal from 'sweetalert2';

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
            
            // Show success message using SweetAlert2
            Swal.fire({
                title: 'Thank you!',
                text: 'I will get back to you soon.',
                icon: 'success'
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            // Show error message using SweetAlert2
            Swal.fire({
                title: 'Oops...',
                text: 'There was an error sending your message. Please try again.',
                icon: 'error'
            });
        }
    });
}