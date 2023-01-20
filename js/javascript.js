// Nav bar menu
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// Services Gallery
const imgContent = document.querySelectorAll('.img-content-hover');
function showImgContent(e) {
    for (var i = 0; i < imgContent.length; i++) {
        x = e.pageX;
        y = e.pageY;
        imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
};
document.addEventListener('mousemove', showImgContent);

// Scroll To Top
window.addEventListener('load', function () {
    document.getElementById('scrollTop').addEventListener('click', function () {
        var position =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (position) {
            window.scrollBy(0, -Math.max(1, Math.floor(position / 100)));
            scrollAnimation = setTimeout("scrollToTop()", 2000);
        } else clearTimeout(scrollAnimation);
    });
});

// Current Year
window.addEventListener('load', function () {
    document.getElementById("year").innerHTML = new Date().getFullYear();
});