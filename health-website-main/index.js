// ===== MOBILE NAVBAR =====
const mobileMenuBtn = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');
const closeMenuBtn = document.getElementById('close-menu');

// Show mobile navbar
mobileMenuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
    mobileMenuBtn.style.display = 'none'; // hide hamburger
});

// Close mobile navbar
closeMenuBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
    mobileMenuBtn.style.display = 'block'; // show hamburger
});

// Optional: close sidebar when clicking outside
window.addEventListener('click', (e) => {
    if (navbar.classList.contains('active') && !navbar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navbar.classList.remove('active');
        mobileMenuBtn.style.display = 'block';
    }
});

// ===== APPOINTMENT FORM VALIDATION =====
const appointmentFormBtn = document.querySelector('.btn2');
if (appointmentFormBtn) {
    appointmentFormBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const inputs = document.querySelectorAll('.box input');
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
            }
        });

        if (!allFilled) {
            alert('Please fill all fields before booking an appointment.');
        } else {
            alert('Appointment submitted successfully!');
            inputs.forEach(input => input.value = ''); // clear fields
        }
    });
}
