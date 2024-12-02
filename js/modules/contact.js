export function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim(),
        };

        
        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                title: "Error",
                text: "All fields are required!",
                icon: "error",
                confirmButtonText: "Okay",
            });
            return;
        }

        try {
            
            await emailjs.send(
                "service_pkv15vq", 
                "template_cqz5nll", 
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                }
            );

    
            contactForm.reset();

            
            Swal.fire({
                title: "Message Sent!",
                text: "Thank you for your message! I will get back to you soon.",
                icon: "success",
                confirmButtonText: "Okay",
            });
        } catch (error) {
            console.error("Error submitting form:", error);

            
            Swal.fire({
                title: "Oops!",
                text: "There was an error sending your message. Please try again later.",
                icon: "error",
                confirmButtonText: "Okay",
            });
        }
    });
}