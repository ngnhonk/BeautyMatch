window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Điều kiện cuộn xuống 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
