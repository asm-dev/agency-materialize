$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.slider').slider({
        fullWidth: true,
        indicators: false,
        height: 500
    });
    $('.scrollspy').scrollSpy();
});

var year = new Date();
document.getElementById('year-js').innerHTML = year.getFullYear();