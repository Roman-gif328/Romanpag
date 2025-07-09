document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                entry.target.classList.add('opacity-100', 'translate-y-0');
                // Stop observing once the animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements you want to animate on scroll
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});