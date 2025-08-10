console.log("JavaScript connected ✅");

// Change header background for testing
document.querySelector("header").style.backgroundColor = "#444";

// Test popup alert
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

    nav.parentNode.insertBefore(toggleButton, nav);

    toggleButton.addEventListener("click", () => {
      nav.classList.toggle("hidden");
    });
  }

  // CONTACT FORM SUBMIT HANDLER
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.querySelector('input[placeholder="Your Name"]').value;
      const email = document.querySelector('input[placeholder="Your Email"]').value;
      const message = document.querySelector('textarea[placeholder="Your Message"]').value;

      try {
        const res = await fetch("http://127.0.0.1:5000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        const data = await res.json();
        if (data.success) {
          alert("Message sent successfully!");
          form.reset();
        } else {
          alert("Something went wrong.");
        }
      } catch (err) {
        alert("Error sending message!");
        console.error(err);
      }
    });
  }
});
