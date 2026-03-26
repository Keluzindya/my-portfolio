// JavaScript for toggling the hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//adding typing effect to hero section

var i = 0; //typeWriter function
var nameIndex = 0; //nameText function
var txt = "Hello, my name is"; 
var fullName = "Keren Luzindya";
var speed = 120; //typing speed
var pause = 500; //pause before typing the name

// typeWriter function
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greeting__text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // pause, then start typing the name
    setTimeout(nameText, pause);
  }
}

// nameText function
function nameText() {
  if (nameIndex < fullName.length) {
    document.getElementById("typing_text").innerHTML += fullName.charAt(nameIndex);
    nameIndex++;
    setTimeout(nameText, speed);
  }else {
    // wait, then restart typing effect
    setTimeout(resetTyping, pause);
  }
} 

// restart the typing effect
function resetTyping() {
  // clear text 
  document.getElementById("greeting__text").textContent = "";
  document.getElementById("typing_text").textContent = "";
  // start over
  i = 0;
  nameIndex = 0;
  setTimeout(typeWriter, pause);
}
// start the typing effect
typeWriter();

// When user scrolls, shows text-container when visible
window.addEventListener("scroll", function() {
  const textContainer = document.querySelector(".text-container");
  const position = textContainer.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) { // When near view
    textContainer.classList.add("show");
  } else {
    textContainer.classList.remove("show"); // Remove when scrolled away
  }
});




