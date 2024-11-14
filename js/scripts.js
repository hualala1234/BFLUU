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
    const contactSection = document.getElementById("contact");
    const navLink = document.querySelector('.nav-link[href="#about"]');

    window.addEventListener("scroll", function () {
      const sectionTop = aboutSection.offsetTop;
      const sectionBottom = sectionTop + aboutSection.offsetHeight;
      const scrollPos = window.scrollY;
      const contactTop = contactSection.offsetTop;

      // 當滾動範圍在 about 區域內時，啟用 active 類
      if (scrollPos >= sectionTop && scrollPos < Math.min(sectionBottom, contactTop)) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  });

  

let mybutton = document.getElementById("myBtn");
  
  
window.scrollTo({top: 0, behavior: 'smooth'});
  
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    function handleScroll() {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          el.classList.add("visible");
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 頁面載入時也執行一次，確保初始狀態
  });
  


  document.getElementById('email').addEventListener('input', function () {
    const emailInput = this;
    const requiredFeedback = emailInput.nextElementSibling;       // 「這是必填問題」的錯誤提示
    const emailFeedback = requiredFeedback.nextElementSibling;    // 「請輸入有效的電子郵件地址」的錯誤提示

    if (emailInput.value.trim() === '') {
        // 當輸入為空時，僅顯示「這是必填問題」
        requiredFeedback.style.display = 'block';
        emailFeedback.style.display = 'none';
    } else if (emailInput.validity.typeMismatch) {
        // 當輸入的格式不正確時，僅顯示「請輸入有效的電子郵件地址」
        requiredFeedback.style.display = 'none';
        emailFeedback.style.display = 'block';
    } else {
        // 當輸入有效時，不顯示任何錯誤提示
        requiredFeedback.style.display = 'none';
        emailFeedback.style.display = 'none';
    }
});
