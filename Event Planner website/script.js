// Toggle mobile menu
const menuToggle = document.getElementById('mobile-menu');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Scroll to section
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        navUl.classList.remove('show');
    });
});

// Get Started button scroll
const getStartedBtn = document.querySelector('.hero-content button');
getStartedBtn.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Form validation and submission
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('error');
            valid = false;
        } else {
            input.classList.remove('error');
        }
    });
    return valid;
}

const contactForm = document.querySelector('footer form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(contactForm)) {
        alert('Message sent successfully!');
        contactForm.reset();
    }
});

const loginForm = document.querySelector('.login-container form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(loginForm)) {
        alert('Logged in successfully!');
        loginForm.reset();
    }
});
