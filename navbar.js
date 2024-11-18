// Select elements
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-expanded-menu');

// Toggle dropdown visibility
menuToggle.addEventListener('click', () => {
    // Toggle the menu's active state
    mobileMenu.classList.toggle('active');
    
    // Check the current state of the menu (after toggling)
    const isOpen = mobileMenu.classList.contains('active');
    
    // Update button text and icon based on the state
    menuToggle.innerHTML = isOpen
        ? `<svg class="menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#F6F8F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg> Stäng Meny`
        : `<svg class="menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#F6F8F9"/>
           </svg> Meny`;
});


