document.addEventListener('DOMContentLoaded', function() {
    // --- TITLE EFFECT --- //
    const helloText = document.querySelector('.page-title h2');
    const nameSpans = document.querySelectorAll('.page-title h1 span');
    const professionText = document.querySelector('.page-title p');
    
    const helloOriginal = helloText.textContent;
    const professionOriginal = professionText.textContent;
  
    helloText.textContent = '';
    professionText.textContent = '';
  
    nameSpans.forEach(span => {
      span.style.opacity = '0';
    //   span.style.transform = 'translateX(30px)';
      span.style.transition = 'opacity 0.8s ease';
    });
  
    function typeHello() {
      let charIndex = 0;
      const typingInterval = setInterval(function() {
        if (charIndex < helloOriginal.length) {
          helloText.textContent += helloOriginal.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(animateName, 300);
        }
      }, 100);
    }
  
    function animateName() {
      let delay = 0;
      nameSpans.forEach(span => {
        setTimeout(() => {
          span.style.opacity = '1';
        //   span.style.transform = 'translateX(0)';
        }, delay);
        delay += 400;
      });
      setTimeout(typeProfession, delay + 300);
    }
  
    function typeProfession() {
      let charIndex = 0;
      const typingInterval = setInterval(function() {
        if (charIndex < professionOriginal.length) {
          professionText.textContent += professionOriginal.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
    }
  
    setTimeout(typeHello, 500);
  
    // --- BACKGROUND BUBBLES EFFECT --- //
    const bubbleContainer = document.createElement('div');
    bubbleContainer.classList.add('bubble-container');
    document.body.appendChild(bubbleContainer);

    function createBubble() {
        const bubble = document.createElement('span');
        bubble.classList.add('bubble');

        // Random size between 4px and 10px
        const size = Math.random() * 10 + 4 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;

        // Random horizontal position
        const posX = Math.random() * 100 + '%';
        bubble.style.left = posX;

        // Random opacity (bubbles fade in and out a bit)
        const opacity = Math.random() * 0.5 + 0.5;
        bubble.style.opacity = opacity;

        // Random color for each bubble
        const colors = ['#b3e0ff', '#c1f7d5', '#f7b3f7', '#ffdb99', '#b3ffd9'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.backgroundColor = randomColor;

        // Add bubble to container
        bubbleContainer.appendChild(bubble);

        // Remove bubble after 5 seconds
        setTimeout(() => {
            bubble.remove();
        }, 5000);
    }

    // Create a new bubble every 300ms
    setInterval(createBubble, 300);
  });
  




  function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const crabIcon = document.getElementById('crab-menu'); // Use getElementById instead of querySelector
    
    menu.classList.toggle('opened');
    
    // Directly apply the rotation based on menu state
    if (menu.classList.contains('opened')) {
      crabIcon.style.transform = 'rotate(-180deg)';
    } else {
      crabIcon.style.transform = 'rotate(0deg)';
    }
  }
  
  // Assign the function to the crab emoji click event
  document.getElementById('crab-menu').addEventListener('click', toggleMenu); // Use getElementById
  
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
  
  // --- TOOLS DROPDOWN FIXED --- //
  document.querySelectorAll('.tools-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
      if (this.classList.contains('active')) {
        // Closing dropdown
        this.classList.remove('active');
        this.classList.add('closing');
        
        setTimeout(() => {
          this.classList.remove('closing');
        }, 1200);
      } else {
        // Opening dropdown
        this.classList.add('active');
      }
    });
  });

// float effect on work //
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth >= 360) {
      const workItems = document.querySelectorAll(".work-item");

      // Prepare transition styles
      workItems.forEach(item => {
        item.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      });

      const observerOptions = {
        threshold: 0.3 // 30% visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate items in
            workItems.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
              }, index * 200);
            });
          } else {
            // Reset items when out of view
            workItems.forEach(item => {
              item.style.opacity = "0";
              item.style.transform = "translateY(30px)";
            });
          }
        });
      }, observerOptions);

      const worksSection = document.querySelector(".works-container");
      if (worksSection) {
        observer.observe(worksSection);

        const contactItems = [
            ...document.querySelectorAll(".contact-links a"),
            ...document.querySelectorAll(".contact-info"),
            ...document.querySelectorAll(".address-container")
          ];
    
          contactItems.forEach(item => {
            item.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            item.style.opacity = "0";
            item.style.transform = "translateY(30px)";
          });
    
          const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                contactItems.forEach((item, index) => {
                  setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "translateY(0)";
                  }, index * 200);
                });
              } else {
                contactItems.forEach(item => {
                  item.style.opacity = "0";
                  item.style.transform = "translateY(30px)";
                });
              }
            });
          }, { threshold: 0.3 });
    
          const contactTrigger = document.querySelector(".contact-links");
          if (contactTrigger) contactObserver.observe(contactTrigger);

          if (window.innerWidth >= 360) {
            const getToKnowMe = document.querySelector(".get-to-know-me");
    
            // Prepare transition styles
            if (getToKnowMe) {
                getToKnowMe.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
                getToKnowMe.style.opacity = "0"; // Initially hidden
                getToKnowMe.style.transform = "translateY(30px)"; // Initially positioned down
            }
    
            const observerOptions = {
                threshold: 0.3 // Trigger when 30% of the element is visible
            };
    
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate the section in when it becomes visible
                        setTimeout(() => {
                            getToKnowMe.style.opacity = "1";
                            getToKnowMe.style.transform = "translateY(0)"; // Reset position
                        }, 200);
                    } else {
                        // Reset the section when it is not in view
                        getToKnowMe.style.opacity = "0";
                        getToKnowMe.style.transform = "translateY(30px)";
                    }
                });
            }, observerOptions);
    
            const sectionToObserve = document.querySelector(".get-to-know-me");
            if (sectionToObserve) observer.observe(sectionToObserve);
        }

        const cardWrappers = document.querySelectorAll(".nav-pages .card-wrapper, .nav-about-page .card-wrapper");

// Set initial styles
cardWrappers.forEach(wrapper => {
  wrapper.style.opacity = "0";
  wrapper.style.transform = "translateY(30px)";
  wrapper.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
});

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateY(30px)";
    }
  });
}, { threshold: 0.3 });

cardWrappers.forEach(wrapper => {
  cardObserver.observe(wrapper);
});

      }
    }
  });


// --- TOOLS DROPDOWN (Works Gallery Only) --- //
document.addEventListener('DOMContentLoaded', function () {
    const toolsToggles = document.querySelectorAll('.tools-toggle');
    
    toolsToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const dropdown = this.querySelector('.tools-dropdown');
            const crab = this.querySelector('.crab');
            
            const isActive = this.classList.contains('active');
            
            // Close all others first (optional, if only one open at a time)
            document.querySelectorAll('.tools-toggle.active').forEach(activeToggle => {
                if (activeToggle !== this) {
                    activeToggle.classList.remove('active');
                    activeToggle.querySelector('.tools-dropdown').style.display = 'none';
                    activeToggle.querySelector('.crab').style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current
            if (isActive) {
                this.classList.remove('active');
                dropdown.style.display = 'none';
                crab.style.transform = 'rotate(0deg)';
            } else {
                this.classList.add('active');
                dropdown.style.display = 'block';
                crab.style.transform = 'rotate(-180deg)';
            }
        });
    });
});


// --- CURSOR TRAIL (second version with stardust) --- //
document.addEventListener('DOMContentLoaded', function () {
    const trail = document.getElementById('cursor-trail');
    const numElements = 20;
    const trailElements = [];

    for (let i = 0; i < numElements; i++) {
        const element = document.createElement('div');
        element.classList.add('trail-element');
        trail.appendChild(element);
        trailElements.push(element);
    }

    document.addEventListener('mousemove', function (e) {
        const x = e.clientX;
        const y = e.clientY;

        trailElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.left = `${x}px`;
                element.style.top = `${y}px`;
                element.style.opacity = '1';
                element.style.transform = `scale(${Math.random() * 2.5})`;

                setTimeout(() => {
                    element.style.opacity = '0';
                    element.style.transform = 'scale(0)';
                }, index * 50);
            }, index * 30);
        });
    });
});



// --- TOOLS DROPDOWN (Works Gallery Only) ---
document.addEventListener('DOMContentLoaded', function () {
    const toolsToggles = document.querySelectorAll('.tools-toggle');
  
    toolsToggles.forEach(toggle => {
      toggle.addEventListener('click', function () {
        const dropdown = this.querySelector('.tools-dropdown');
        const crab = this.querySelector('.crab');
  
        const isActive = this.classList.contains('active');
  
        // Close all others first
        document.querySelectorAll('.tools-toggle.active').forEach(activeToggle => {
          if (activeToggle !== this) {
            activeToggle.classList.remove('active');
            activeToggle.querySelector('.tools-dropdown').style.display = 'none';
            activeToggle.querySelector('.crab').style.transform = 'rotate(0deg)';
          }
        });
  
        // Toggle current
        if (isActive) {
          this.classList.remove('active');
          dropdown.style.display = 'none';
          crab.style.transform = 'rotate(0deg)';
        } else {
          this.classList.add('active');
          dropdown.style.display = 'block';
          crab.style.transform = 'rotate(-180deg)';
        }
      });
    });
  });
  

// --- Mobile About Section Crab Rotation and Drop Down Menu --- //
document.addEventListener('DOMContentLoaded', function () {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const crabIcon = button.querySelector('.crab-know-me'); // Targeting the crab icon
            console.log("dropdown");
            if (content.classList.contains('show')) {
                // Fade out and reset crab rotation
                content.style.opacity = '0';
                setTimeout(() => {
                    content.classList.remove('show');
                    content.style.display = 'none';
                }, 600); // Match transition time

                crabIcon.style.transform = 'rotate(0deg)'; // Reset the crab icon
            } else {
                // Show and fade in the content
                content.style.display = 'block';
                setTimeout(() => {
                    content.classList.add('show');
                    content.style.opacity = '1';
                }, 10); // Tiny delay for transition

                crabIcon.style.transform = 'rotate(-180deg)'; // Rotate the crab icon when opened
            }
        });
    });
});
