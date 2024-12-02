export function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim(),
        };

        // Validation (optional)
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
            // Send email via EmailJS
            await emailjs.send(
                "service_pkv15vq", // Replace with your actual Service ID
                "template_cqz5nll", // Replace with your actual Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                }
            );

            // Clear the form
            contactForm.reset();

            // Show SweetAlert2 success message
            Swal.fire({
                title: "Message Sent!",
                text: "Thank you for your message! I will get back to you soon.",
                icon: "success",
                confirmButtonText: "Okay",
            });
        } catch (error) {
            console.error("Error submitting form:", error);

            // Show SweetAlert2 error message
            Swal.fire({
                title: "Oops!",
                text: "There was an error sending your message. Please try again later.",
                icon: "error",
                confirmButtonText: "Okay",
            });
        }
    });
}
