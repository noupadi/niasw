function toggle(){

var body = document.body; 
body.id = ( body.id ) ? body.id : 'body_id'; // ffox

body.use_custom_cursor = !body.use_custom_cursor;

body.style.cursor = body.use_custom_cursor ? 'wait' : 'auto';
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get the hamburger menu and navigation menu elements
    var hamburger = document.querySelector('.hamburger-menu');
    var navMenu = document.getElementById('navbar');
    var closeButton = document.getElementById('closeMenu'); // Get the close button

    // Listen for a click event on the hamburger menu
    hamburger.addEventListener('click', function () {
        // Toggle the 'visible' class on the navigation menu
        navMenu.classList.toggle('visible');
    });

    closeButton.addEventListener('click', function() {
        navMenu.classList.remove('visible'); // Hide the menu
    });
    
});

// function open_nav() {
//     if (document.getElementById('navigation').style.display == 'none') { 
//         document.getElementById('navigation').style.right = '0';
//         document.getElementById('navigation').style.display = 'flex'
//         document.getElementById('main-aside').style.marginBottom = '2.5vh';
//     } else {
//         document.getElementById('navigation').style.display = 'none'
//         document.getElementById('main-aside').style.marginBottom = '0';
//     }   

// }
