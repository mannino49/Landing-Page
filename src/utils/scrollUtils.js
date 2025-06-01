/**
 * Utility functions for smooth scrolling behavior
 */

/**
 * Scrolls smoothly to the target element when a navigation link is clicked
 * @param {string} targetId - The ID of the target element to scroll to
 */
export const scrollToSection = (targetId) => {
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    // Get the height of the fixed header to offset the scroll position
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};
