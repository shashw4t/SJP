document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.contact-info a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.classList.add('hover');
        });
        link.addEventListener('mouseout', function() {
            link.classList.remove('hover');
        });
    });
});