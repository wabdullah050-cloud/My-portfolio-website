console.log("JavaScript connected ✅");

// DOM test: change header background
document.querySelector("header").style.backgroundColor = "#444";

// DOM test: popup alert
alert("Hello from JavaScript!");

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");

  if (nav) {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Navigation";
    toggleButton.style.margin = "10px";
    toggleButton.style.padding = "0.5rem 1rem";
    toggleButton.style.backgroundColor = "#222";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";

    // Insert button just before the nav element
    nav.parentNode.insertBefore(toggleButton, nav);

    toggleButton.addEventListener("click", () => {
      nav.classList.toggle("hidden");
    });
  }
});
