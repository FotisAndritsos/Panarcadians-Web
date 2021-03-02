const burger = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");
const topBarRight = document.querySelector(".topbar-rightside");
const dropdown = document.querySelector(".dropdownA");
const dropdownContent = document.querySelector(".dropdown-content");
const returnBtn = document.querySelector(".return-btn");
const mainNav = document.getElementById("main-menu");
const topBar = document.getElementById("topbar");

burger.addEventListener('click',()=>{
  mainNav.classList.add('active');
  closeIcon.classList.add('active');
  topBarRight.classList.add("active");
  burger.classList.add("active");
  
})
closeIcon.addEventListener("click", () => {
  mainNav.classList.remove("active");
  topBarRight.classList.remove("active");
  closeIcon.classList.remove("active");
  burger.classList.remove("active");
});

dropdown.addEventListener("click", () => {
    dropdownContent.classList.add("active");
    topBarRight.classList.add("activebar");
    mainNav.classList.add("dropactive");
  });
returnBtn.addEventListener("click", () => {
    dropdownContent.classList.remove("active");
    topBarRight.classList.remove("activebar");
    mainNav.classList.remove("dropactive");
  });
