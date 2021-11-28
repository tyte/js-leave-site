// Leave website button
// Css-Class of your button-link
var leaveSiteButton = document.querySelector('.leave-site-button');
    // When you click on the link, it gets replaced by a chosen website.
    leaveSiteButton.addEventListener("click", function(event) {
        document.location.replace('https://google.se');
        event.preventDefault();
        });
