// var database = {
//   projects : ["https://alexever17.github.io/NameYoubifier/",
//   "https://alexever17.github.io/googlemaps/",
//   "https://alexever17.github.io/random-quote-machine/"],
//   js30 : ["https://alexever17.github.io/30daysofjs/001-drumkit/", "https://alexever17.github.io/30daysofjs/002-clock/"],
//   css100 : ["https://alexever17.github.io/100DaysOfCss/001-title/",
//   "https://alexever17.github.io/100DaysOfCss/002-menu-icon/"]
// };

function forward(category) {
  alert('Sorry, not enough projects yet');
}

function back(category) {
  alert('Sorry, not enough projects yet');
}

function mobileMenu() {
    var w = window.innerWidth;
    navbar = document.querySelectorAll(".nav-ul li");
    console.log(navbar);
    if (w < 500) {
        navbar[1].innerHTML = '<a href="index.html"><img src="icons/003-coding.png" alt="Coding"></a>';
        navbar[2].innerHTML = '<img src="icons/002-customer-service.png" alt="Business">';
        navbar[3].innerHTML = '<a href="contact.html"><img src="icons/001-phone.png" alt="Contact"></a>';
        navbar[4].innerHTML = '<a class="githublink" href="https://github.com/Alexever17/" target="_blank"><img src="icons/002-github.png" alt="Github"></a>';
    }
}

mobileMenu();
