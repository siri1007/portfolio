// script.js
function toggleNav() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("show"); // Toggle the 'show' class

  // Adjust home-content margin-top based on nav visibility
  const homeContent = document.querySelector(".content");
  if (nav.classList.contains("show")) {
    homeContent.style.marginTop = "600px";

    // Adjust margin to accommodate nav height
  } else {
    homeContent.style.marginTop = "10px"; // Reset margin when nav is hidden
    homeContent.style.transition = "0.4s linear";
  }
}


// Contact form //

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Here you can handle form submission, e.g., send data to a server
    alert("Thank you for your message!");
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
