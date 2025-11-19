// public/main.js
if (typeof window !== 'undefined') {
  console.log("ChoctoTip website loaded!");

  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks  = document.querySelector(".nav-links");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  });
}
