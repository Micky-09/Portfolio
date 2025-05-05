const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  status.textContent = "Thanks for your message!";
  form.reset();
});


  