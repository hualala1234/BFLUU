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
    const teamSection = document.getElementById("contact-present");
    const aboutNavLink = document.querySelector('.nav-link[href="#about"]');
    const contactNavLink = document.querySelector('.nav-link[href="#contact"]');
    const teamNavLink = document.querySelector('.nav-link[href="#contact-present"]');
    const contactOffset = 100; // contact 的 margin-top 偏移量
    const teamOffset = -80; // team 的 padding-top 偏移量

    window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY;
      const aboutTop = aboutSection.offsetTop;
      const contactTop = contactSection.offsetTop - contactOffset;
      const teamTop = teamSection.offsetTop + teamOffset;

      // about 的範圍
      if (scrollPos >= aboutTop && scrollPos < contactTop) {
        aboutNavLink.classList.add("active");
        contactNavLink.classList.remove("active");
        teamNavLink.classList.remove("active");
      }
      // contact 的範圍
      else if (scrollPos >= contactTop && scrollPos < teamTop) {
        aboutNavLink.classList.remove("active");
        contactNavLink.classList.add("active");
        teamNavLink.classList.remove("active");
      }
      // contact-present 的範圍
      else if (scrollPos >= teamTop) {
        aboutNavLink.classList.remove("active");
        contactNavLink.classList.remove("active");
        teamNavLink.classList.add("active");
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
  


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitButton = document.getElementById("submitButton");
    
    const nameField = document.getElementById("name");
    const messageField = document.getElementById("message");
    const submittedContentContainer = document.getElementById("submittedContent");

    // Maximum number of items to display
    const MAX_ITEMS = 3;

    function checkFormValidity() {
        if (nameField.value.trim() !== "" && messageField.value.trim() !== "") {
            submitButton.classList.remove("disabled");
            submitButton.disabled = false;
        } else {
            submitButton.classList.add("disabled");
            submitButton.disabled = true;
        }
    }

    form.addEventListener("input", checkFormValidity);
    checkFormValidity();

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting to Google Forms

        // Get submitted data
        const submittedName = nameField.value.trim();
        const submittedMessage = messageField.value.trim();
        
        // Create new entry div
        const newEntry = document.createElement("div");
        newEntry.classList.add("contact-present-items");
        newEntry.innerHTML = `
            <p><strong>暱稱:</strong> ${submittedName}</p>
            <p><strong>想對U-san說的話:</strong> ${submittedMessage}</p>
        `;

        // Append new entry to the container
        submittedContentContainer.appendChild(newEntry);

        // If there are more than MAX_ITEMS, remove the first (oldest) item to create the carousel effect
        if (submittedContentContainer.children.length > MAX_ITEMS) {
            submittedContentContainer.removeChild(submittedContentContainer.firstElementChild);
        }

        // Optionally, submit the form to Google Forms
        form.submit();
    });
});






