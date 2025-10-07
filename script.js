// Initialize ScrollReveal for animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false // Animations do not repeat on scroll up
});

// Animate elements on reveal
sr.reveal('.hero-left', { origin: 'left' });
sr.reveal('.hero-right', { origin: 'right', delay: 400 });
sr.reveal('.about-img', { origin: 'left' });
sr.reveal('.about-content', { origin: 'right', delay: 200 });
sr.reveal('.skills-section, .projects-section, .contact-section', { origin: 'bottom' });
sr.reveal('.navbar', { origin: 'top' });
sr.reveal('.footer', { origin: 'bottom' });


/**
 * Sends a pre-filled WhatsApp message.
 * @param {string} phone - The phone number to send the message to (including country code, no '+').
 */
function sendWhatsApp(phone) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
        alert("Please fill in your name and message before sending.");
        return;
    }
    
    // Check if the placeholder phone number is still there
    if (phone === 'yourwhatsappnumber') {
        alert('This feature is not configured yet. Please use the email button.');
        return;
    }

    const text = `Hi, my name is ${name} (${email}).\n\nI have a message for you:\n${message}`;
    const encodedText = encodeURIComponent(text);
    const link = `https://wa.me/${phone}?text=${encodedText}`;

    window.open(link, "_blank");
}


// Close mobile navigation menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});