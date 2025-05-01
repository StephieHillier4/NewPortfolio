function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('opened'); // Toggle the 'opened' class on the menu
  }
  
  // Assign the function to the crab emoji click event
  document.querySelector('.crab-menu').addEventListener('click', toggleMenu);
  

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

// // --- DROPDOWN BUTTONS --- //
// document.addEventListener('DOMContentLoaded', function () {
//     const dropdowns = document.querySelectorAll('.dropdown');
    
//     dropdowns.forEach(dropdown => {
//         const button = dropdown.querySelector('.dropdown-button');
//         const crab = button.querySelector('.crab'); // Select the crab element
        
//         button.addEventListener('click', () => {
//             // Handle other dropdowns
//             dropdowns.forEach(otherDropdown => {
//                 if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
//                     otherDropdown.classList.remove('active');
//                     // Reset other crabs
//                     const otherCrab = otherDropdown.querySelector('.dropdown-button .crab');
//                     if (otherCrab) otherCrab.style.transform = 'rotate(0deg)';
//                 }
//             });
            
//             // Toggle active state
//             const isBecomingActive = !dropdown.classList.contains('active');
//             dropdown.classList.toggle('active');
            
//             // Rotate crab based on new active state
//             if (crab) {
//                 if (isBecomingActive) {
//                     crab.style.transform = 'rotate(-180deg)'; // CCW when opening
//                 } else {
//                     crab.style.transform = 'rotate(0deg)'; // Back to normal when closing
//                 }
//             }
//         });
//     });
// });

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
