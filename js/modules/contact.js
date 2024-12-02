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

        // Get reCAPTCHA token (v3)
        const token = await grecaptcha.execute('6LeBSpAqAAAAAECKa_9-LgRtj7zecAlHB0bb9x43', { action: 'submit' });

        if (!token) {
            Swal.fire({
                title: "Error",
                text: "reCAPTCHA verification failed. Please try again.",
                icon: "error",
                confirmButtonText: "Okay",
            });
            return;
        }

        try {
            // Send email via EmailJS, including the reCAPTCHA token
            await emailjs.send(
                "service_pkv15vq", // Your Service ID
                "template_cqz5nll", // Your Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    recaptcha_token: token, // Send the reCAPTCHA token
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
