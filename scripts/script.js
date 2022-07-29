let navbar;
let header;

window.onload = () => {
    navbar = document.querySelector(".navbar");
    header = document.querySelector("header");

    // Default settings
    header.style.marginTop = '0px';
    header.style.marginBottom = '0px';
    header.style.top = '0';
}


window.onscroll = () => hideNavbar();

function hideNavbar() {
    if (window.scrollY > 150) {
        header.style.marginTop = '-80px';
        header.style.marginBottom = '80px';
        header.style.top = 'inherit';
    } else {
        header.style.marginTop = '0px';
        header.style.marginBottom = '0px';
        header.style.top = '0';
    }
}