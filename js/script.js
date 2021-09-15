//button up

(function() {
    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
        goTopBtn.classList.add('back-to-top-show');
}
        if (scrolled < coords) {
        goTopBtn.classList.remove('back-to-top-show');
    }
}
    function backToTop() {
        if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 30);
    }
}
    var goTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();

//site loading

document.body.onload = function() {
    setTimeout(function() {
    var preloader = document.getElementById('myPreloader');
    if (!preloader.classList.contains('cansel')) {
        preloader.classList.add('cansel');
        }
    }, 499)
};

//smooth scroll for anchors

const smoothLinks = document.querySelectorAll ('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView ({
                behavior: 'smooth',
                block: 'start'
                });
            });
        };
