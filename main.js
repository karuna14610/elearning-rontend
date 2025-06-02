// Scroll effect on navigation bar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// FAQ Toggle Functionality
document.querySelectorAll('.faq').forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
        const answer = faq.querySelector('.faq_answer');
        if (faq.classList.contains('active')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});

// Form Submission Handling
const form = document.getElementById('contact-form');
const thankYouMessage = document.getElementById('thank-you');

if (form && thankYouMessage) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent page refresh

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Show thank you message
                thankYouMessage.style.display = 'block';
                thankYouMessage.innerText = 'Thank you! Your message has been sent.';
                form.reset(); // Clear form fields
            } else {
                thankYouMessage.style.display = 'block';
                thankYouMessage.innerText = 'Something went wrong. Please try again.';
            }
        } catch (error) {
            console.error('Error:', error);
            thankYouMessage.style.display = 'block';
            thankYouMessage.innerText = 'An error occurred. Please try again later.';
        }
    });
}