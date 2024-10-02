window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Điều kiện cuộn xuống 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('menu').addEventListener('click', function () {
    var hMenu = document.getElementById('hMenu');
    event.stopPropagation();
    if (hMenu.style.display === 'block') {
        hMenu.style.display = 'none';
        var menuDiv = document.getElementById('menu');
        menuDiv.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        hMenu.style.display = 'block';
        var menuDiv = document.getElementById('menu');
        menuDiv.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
});