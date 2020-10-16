window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.classList.add("nav");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("nav");
    }

}

function myfn() {
    alert("Thank You for your response .");
    location.reload();
}