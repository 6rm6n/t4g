document.addEventListener('DOMContentLoaded', function () {
    var activePage = document.querySelector('nav ul li a.active');
    var header = document.getElementById('page-header');
    if (activePage) {
        // Change header style based on the active page
        header.style.backgroundColor = '#006699'; // Example
        // Other dynamic styles can be added here
    }
});