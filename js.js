/*
Attach event listeners to:
- hamburger icon: set width of sidenav to 25px
- the 'x' div: set width of sidenav to 0px
*/

const hamburger = document.querySelector(".hamburger-icon");
hamburger.addEventListener("click", function expandSideNav() {
  document.getElementById("mySideNav").style.width = "250px";
});

const xIcon = document.querySelector(".closebtn");
xIcon.addEventListener("click", function collapseNav() {
  document.getElementById("mySideNav").style.width = "0";
});
