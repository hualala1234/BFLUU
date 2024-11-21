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
  const contactpresentSection = document.getElementById("contact-present");
  const aboutNavLink = document.querySelector('.nav-link[href="#about"]');
  const contactNavLink = document.querySelector('.nav-link[href="#contact"]');
  const contactpresentNavLink = document.querySelector('.nav-link[href="#contact-present"]');
  const teamSection = document.getElementById("team");
  const teamNavLink = document.querySelector('.nav-link[href="#team"]');
  const contactOffset = 80; // contact 的 margin-top 偏移量
  const contactpresentOffset = 100; // contact-present 的 padding-top 偏移量
  const teamOffset = -100; // team 的 padding-top 偏移量

  window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;
    const aboutTop = aboutSection.offsetTop;
    const contactTop = contactSection.offsetTop - contactOffset;
    const contactpresentTop = contactpresentSection.offsetTop - contactpresentOffset;
    const teamTop = teamSection.offsetTop + teamOffset;

    // about 的範圍
    if (scrollPos >= aboutTop && scrollPos < contactpresentTop) {
      aboutNavLink.classList.add("active");
      contactNavLink.classList.remove("active");
      contactpresentNavLink.classList.remove("active");
      teamNavLink.classList.remove("active");
    }
    // contact-present 的範圍
    else if (scrollPos >= contactpresentTop && scrollPos < contactTop) {
        aboutNavLink.classList.remove("active");
        contactNavLink.classList.remove("active");
        contactpresentNavLink.classList.add("active");
        teamNavLink.classList.remove("active");
      }
    // contact 的範圍
    else if (scrollPos >= contactTop && scrollPos < contactpresentTop) {
      aboutNavLink.classList.remove("active");
      contactNavLink.classList.add("active");
      contactpresentNavLink.classList.remove("active");
      teamNavLink.classList.remove("active");
    }
    
    // 滾動到 team 的範圍
    else if (scrollPos >= teamTop) {
      aboutNavLink.classList.remove("active");
      contactNavLink.classList.remove("active");
      contactpresentNavLink.classList.remove("active");
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
    
    // 取得表單欄位
    const nameField = document.getElementById("name");
    const messageField = document.getElementById("message");
    
    // 檢查表單欄位狀態的函式
    function checkFormValidity() {
        if (nameField.value.trim() !== "" &&
            messageField.value.trim() !== "") {
            submitButton.classList.remove("disabled");
            submitButton.disabled = false;
        } else {
            submitButton.classList.add("disabled");
            submitButton.disabled = true;
        }
    }
    
    // 當使用者輸入時檢查表單狀態
    form.addEventListener("input", checkFormValidity);
    
    // 初始檢查表單狀態
    checkFormValidity();
});





document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://script.google.com/macros/s/AKfycbzLOpngDyrsg1pESxEHM7yIdgA3fUTqCQntKSiNEPFt3zOx4Qobww2mlutB5BgT5QfeYQ/exec";
  const submittedContent = document.getElementById("submittedContent");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let data = [];
  let currentPage = 0;
  const itemsPerPage = 4;

  // Fetch the data from the Google Apps Script API
  fetch(apiUrl)
      .then(response => response.json())
      .then(fetchedData => {
          data = fetchedData.reverse(); // Reverse the order if needed
          displayPage(currentPage); // Display the first page of content
      })
      .catch(error => {
          console.error("Error fetching data:", error);
      });

  function displayPage(page) {
      // Clear the existing content
      submittedContent.innerHTML = "";

      // Get the slice of data for the current page
      const start = page * itemsPerPage;
      const end = start + itemsPerPage;
      const pageData = data.slice(start, end);

      // Add the content for this page
      pageData.forEach(item => {
          const contentDiv = document.createElement("div");
          contentDiv.classList.add("col-md-5", "mb-3");
          contentDiv.innerHTML = `
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <div style="
                          white-space: pre-wrap;
                          font-size: 16px;
                          line-height: 1.5;
                          text-align: left;
                      ">${item.message}</div>
                  </div>
              </div>
          `;
          submittedContent.appendChild(contentDiv);
      });

      // Disable/Enable buttons based on the current page
      prevBtn.disabled = currentPage === 0;
      nextBtn.disabled = currentPage === Math.ceil(data.length / itemsPerPage) - 1;
  }

  // Event listeners for pagination buttons
  prevBtn.addEventListener("click", () => {
      if (currentPage > 0) {
          currentPage--;
          displayPage(currentPage);
      }
  });

  nextBtn.addEventListener("click", () => {
      if (currentPage < Math.ceil(data.length / itemsPerPage) - 1) {
          currentPage++;
          displayPage(currentPage);
      }
  });
});


document.addEventListener('contextmenu', (event) => event.preventDefault());
            document.addEventListener('keydown', (event) => {
                // 禁止 F12、Ctrl+Shift+I
                if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
                    event.preventDefault();
                }
            });