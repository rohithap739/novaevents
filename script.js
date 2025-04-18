  window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData
      })
      .then(response => {
        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          form.reset(); // 🔥 This clears all input fields!
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
      });
    });
  });
