window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navBar');
    const searchBarWrapper = document.querySelector('.search-bar-wrapper');
    const searchBar = document.querySelector('.search-bar');

    // Get the position of the search bar relative to the viewport
    const rect = searchBarWrapper.getBoundingClientRect();
    
    // Check if the navbar has scrolled over the search bar
    if (rect.top <= 0) {
        // Add 'searching' class to navbar to make the search bar appear inside it
        navbar.classList.add('searching');
        // Hide the search bar in the content area
        searchBarWrapper.classList.add('searching');
    } else {
        // Remove the 'searching' class when the navbar is not over the search bar
        navbar.classList.remove('searching');
        // Show the search bar back in the content area
        searchBarWrapper.classList.remove('searching');
    }
});