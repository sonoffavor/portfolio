// Navigation for mobile
function mainNavFunction() {
    document.getElementById("my-navigation").classList.toggle("show-main-nav");
}

function subNavFunction() {
    document.getElementById("my-sub-navigation").classList.toggle("show-sub-nav");
}

// Closing dropdowns if user clicks outside of them
window.onclick = function(event) {

    if (!event.target.matches('.icon') && !event.target.matches('#projects-btn')) {
        var dropdowns = document.getElementsByClassName("main-navigation");
        var subdropdowns = document.getElementsByClassName("sub-navigation");
        
        // Index variable
        var i;

        // Boolean variables to store whether element has a certain class 
        var containsShowMainNav = false;
        var containsShowSubNav = false;

        // Checking for show-main-nav class
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-main-nav')) {
                containsShowMainNav = true;
            }
        }

        // Checking of show-sub-nav class
        for (i = 0; i < subdropdowns.length; i++) {
            var subOpenDropdown = subdropdowns[i];
            if (subOpenDropdown.classList.contains('show-sub-nav')) {
                containsShowSubNav = true;
            }
        }

        // If both dropdowns are displayed, close both
        if (containsShowMainNav == containsShowSubNav) {
            openDropdown.classList.remove('show-main-nav');
            subOpenDropdown.classList.remove('show-sub-nav');

            // If main dropdown is displayed, close it
        } else if (containsShowMainNav) {
            openDropdown.classList.remove('show-main-nav');

            if (containsShowSubNav) {
                subOpenDropdown.classList.remove('show-sub-nav');
            }

            // Else close sub dropdown menu
        } else {
            subOpenDropdown.classList.remove('show-sub-nav');

        }
    }
}

// Closes drop downs if user taps outside of them
window.ontouchstart = function(event) {

    if (!event.target.matches('.icon') && !event.target.matches('.nav-link')) {
        var dropdowns = document.getElementsByClassName("main-navigation");
        var subdropdowns = document.getElementsByClassName("sub-navigation");
        
        // Index variable
        var i;

        // Boolean variables to store whether element has a certain class 
        var containsShowMainNav = false;
        var containsShowSubNav = false;

        // Checking for show-main-nav class
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-main-nav')) {
                containsShowMainNav = true;
            }
        }

        // Checking of show-sub-nav class
        for (i = 0; i < subdropdowns.length; i++) {
            var subOpenDropdown = subdropdowns[i];
            if (subOpenDropdown.classList.contains('show-sub-nav')) {
                containsShowSubNav = true;
            }
        }

        // If both dropdowns are displayed, close both
        if (containsShowMainNav == containsShowSubNav) {
            openDropdown.classList.remove('show-main-nav');
            subOpenDropdown.classList.remove('show-sub-nav');

            // If main dropdown is displayed, close it
        } else if (containsShowMainNav) {
            openDropdown.classList.remove('show-main-nav');

            if (containsShowSubNav) {
                subOpenDropdown.classList.remove('show-sub-nav');
            }

            // Else close sub dropdown menu
        } else {
            subOpenDropdown.classList.remove('show-sub-nav');

        }
    }
}

//Code for the collapsible html-css-js section
function htmlCSSjsButton() {
    // Get html-css-js-collapsible-grid-container
    var htmlCSSjsCollSect = document.getElementById("html-css-js-collapsible-grid-container");

    // get the current value of the html-css-js-collapsible grid container display property
    var displaySetting = htmlCSSjsCollSect.style.display;

    // get the html-css-js-toggle to change what it says
    var htmlCSSjsToggle = document.getElementById("html-css-js-button");

    // Toggling the html-css-js-collapsible-grid-container and html-css-js-toggle, depending on current state
    if (displaySetting == "grid") {
        // html-css-js-grid-container visible. hide it
        htmlCSSjsCollSect.style.display = "none";
        // change html-css-js-toggle text
        htmlCSSjsToggle.innerHTML = "Show more";
    } else{
        // html-css-js-collapsible-grid-container is hidden. show it
        htmlCSSjsCollSect.style.display = "grid";
        // change html-css-js-toggle text
        htmlCSSjsToggle.innerHTML = "Show less";
    }
}
