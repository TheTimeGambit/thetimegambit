window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var opacity = 1 - (scrollTop / window.innerHeight); // Calculate opacity based on scroll position

    // Apply opacity to video background
    document.querySelector('.video-background').style.opacity = opacity < 0 ? 0 : opacity;
});
