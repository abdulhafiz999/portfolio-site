var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0"; // show the menu
  document.querySelector(".fa-bars").style.display = "none"; // hide hamburger
  document.querySelector(".fa-times").style.display = "block"; // show close icon
}

function closemenu() {
  sidemenu.style.right = "-200px"; // hide the menu
  document.querySelector(".fa-bars").style.display = "block"; // show hamburger
  document.querySelector(".fa-times").style.display = "none"; // hide close icon
}

 

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const header = document.getElementById("header");

  if (window.scrollY > header.offsetHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

