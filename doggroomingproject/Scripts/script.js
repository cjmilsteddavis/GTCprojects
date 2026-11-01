/*
Student Name: Chase Davis
File Name: script.js
Date: 11/1/2026
 */

//Hamburger menu func
function hamburger(){
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("dfdg-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}