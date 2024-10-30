/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

  document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("about");
    const navLink = document.querySelector('.nav-link[href="#about"]');

    // 偵測滾動事件
    window.addEventListener("scroll", function () {
      const sectionTop = aboutSection.offsetTop;
      const sectionHeight = aboutSection.offsetHeight;
      const scrollPos = window.scrollY;

      // 檢查當前是否在 about 區域
      if (scrollPos >= sectionTop - 50 && scrollPos < sectionTop + sectionHeight) {
        navLink.classList.add("active"); // 加上 active 類
      } else {
        navLink.classList.remove("active"); // 移除 active 類
      }
    });
  });

let mybutton = document.getElementById("myBtn");
  
  
window.scrollTo({top: 0, behavior: 'smooth'});
  
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

  