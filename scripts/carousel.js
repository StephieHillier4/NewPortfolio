// --- RESPONSIVE CAROUSEL WITH SMOOTH TRANSITIONS --- //
const workItems = document.querySelectorAll('.work-item');
let currentIndex = 0;
let isAnimating = false; // Prevent multiple clicks during animation
let carouselActive = false;

// Function to initialize carousel
function initCarousel() {
  // Check if screen width is less than 1200px
  if (window.innerWidth < 1200) {
    if (!carouselActive) {
      carouselActive = true;
      
      // Add transition CSS to all work items
      workItems.forEach(item => {
        item.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
      });
      
      // Initialize first item, hide others
      workItems.forEach((item, i) => {
        if (i === currentIndex) {
          item.style.display = 'block';
          item.style.opacity = '1';
        } else {
          item.style.display = 'none';
        }
      });
      
      // Show carousel controls
      const carouselControls = document.querySelectorAll('.carousel-arrow');
      carouselControls.forEach(control => {
        control.style.display = 'block';
      });
    }
  } else {
    // For screens larger than 1200px, show all items
    if (carouselActive) {
      carouselActive = false;
      
      // Show all items and reset styles
      workItems.forEach(item => {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      });
      
      // Hide carousel controls
      const carouselControls = document.querySelectorAll('.carousel-arrow');
      carouselControls.forEach(control => {
        control.style.display = 'none';
      });
    }
  }
}

function showWorkItem(index, direction) {
  if (isAnimating || !carouselActive) return;
  isAnimating = true;
  
  // Fade out current item
  workItems[currentIndex].style.opacity = '0';
  
  // Add slide effect based on direction
  if (direction === 'right') {
    workItems[currentIndex].style.transform = 'translateX(-100px)';
  } else if (direction === 'left') {
    workItems[currentIndex].style.transform = 'translateX(100px)';
  }
  
  // Wait for fade out to complete
  setTimeout(() => {
    // Hide current item
    workItems[currentIndex].style.display = 'none';
    // Reset transformation for next time
    workItems[currentIndex].style.transform = 'translateX(0)';
    
    // Update index
    currentIndex = index;
    
    // Prepare new item for entrance
    workItems[currentIndex].style.display = 'block';
    workItems[currentIndex].style.opacity = '0';
    
    if (direction === 'right') {
      workItems[currentIndex].style.transform = 'translateX(100px)';
    } else if (direction === 'left') {
      workItems[currentIndex].style.transform = 'translateX(-100px)';
    }
    
    // Force browser to recognize the element before animating
    requestAnimationFrame(() => {
      // Fade in new item
      setTimeout(() => {
        workItems[currentIndex].style.opacity = '1';
        workItems[currentIndex].style.transform = 'translateX(0)';
        
        // Animation complete
        setTimeout(() => {
          isAnimating = false;
        }, 500);
      }, 50);
    });
  }, 500);
}

// Initialize carousel based on initial screen size
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  
  // Add event listeners for carousel arrows
  document.querySelector('.carousel-arrow.right').addEventListener('click', () => {
    if (carouselActive) {
      const nextIndex = (currentIndex + 1) % workItems.length;
      showWorkItem(nextIndex, 'right');
    }
  });
  
  document.querySelector('.carousel-arrow.left').addEventListener('click', () => {
    if (carouselActive) {
      const prevIndex = (currentIndex - 1 + workItems.length) % workItems.length;
      showWorkItem(prevIndex, 'left');
    }
  });
});

// Update carousel when window is resized
window.addEventListener('resize', () => {
  initCarousel();
});