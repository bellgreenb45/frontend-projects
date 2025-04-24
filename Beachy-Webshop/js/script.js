document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    console.log('Navbar:', navbar); // Debug: Check if navbar is selected

    window.addEventListener('scroll', () => {
        console.log('ScrollY:', window.scrollY); // Debug: Check scroll position
        if (window.scrollY > 50) {
            navbar.classList.add('solid', 'bg-dark');
            console.log('Added classes'); // Debug: Confirm classes are added
        } else {
            navbar.classList.remove('solid', 'bg-dark');
            console.log('Removed classes'); // Debug: Confirm classes are removed
        }
    });
});