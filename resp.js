function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

function toggleSubmenu() {
    var submenu = document.getElementById("mySubmenu");
    submenu.classList.toggle("show");
}

function toggleSubmenu(event) {
    event.stopPropagation(); // Prevents the dropdown from closing when clicking on the submenu button
    var submenu = document.getElementById("mySubmenu");
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}





$(document).ready(function(){
    $('.featured-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.prev-slide').click(function(){
        $('.featured-slider').slick('slickPrev');
    });

    $('.next-slide').click(function(){
        $('.featured-slider').slick('slickNext');
    });
});

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});
