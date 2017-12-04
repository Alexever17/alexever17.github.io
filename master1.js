var database = {
  projects : ["https://alexever17.github.io/NameYoubifier/",
  "https://alexever17.github.io/googlemaps/",
  "https://alexever17.github.io/random-quote-machine/"],
  js30 : ["https://alexever17.github.io/30daysofjs/001-drumkit/"],
  css100 : ["https://alexever17.github.io/100DaysOfCss/001-title/",
  "https://alexever17.github.io/100DaysOfCss/002-menu-icon/"]
};

function openwebsite(category, idnumber) {
      if (confirm("Open the website in a new window?") == true) {
        window.open(database[category][idnumber]);
    } else {
        return;
    }
}

function forward(category) {
  alert('Sorry, not enough projects yet');
}

function back(category) {
  alert('Sorry, not enough projects yet');
}
