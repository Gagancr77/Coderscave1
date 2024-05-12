document.addEventListener('DOMContentLoaded', function () {
    // Reloads page when the 'Portfolio' nav item is clicked
    document.getElementById('nav-portfolio').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.reload(true); // force true reload from the server
    });

    // No need for other handlers since smooth scrolling is handled by CSS
});
