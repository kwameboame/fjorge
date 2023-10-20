// SCRIPT FOR MOBILE MENU TOGGLE
// Get HTML Elements
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector("#mobile-menu");

// Add Event Listener
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  // Toggle the visibility of the menu icons based on state
  const menuOpenIcon = document.querySelector(".menu-open");
  const menuClosedIcon = document.querySelector(".menu-closed");
  menuOpenIcon.classList.toggle("hidden");
  menuClosedIcon.classList.toggle("hidden");
});
