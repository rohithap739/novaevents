 document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const responseEl = document.getElementById("formResponse");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const googleFormURL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

    const formData = new FormData();
    formData.append("entry.1234567890", document.getElementById("name").value);      // Replace with actual entry ID
    formData.append("entry.2345678901", document.getElementById("email").value);     // Replace with actual entry ID
    formData.append("entry.3456789012", document.getElementById("date").value);      // Replace with actual entry ID
    formData.append("entry.4567890123", document.getElementById("message").value);   // Replace with actual entry ID

    try {
      const res = await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      form.reset();
      responseEl.textContent = "🎉 Thank you! Your booking request has been submitted.";
      responseEl.style.color = "green";
    } catch (err) {
      console.error(err);
      responseEl.textContent = "⚠️ Oops! Something went wrong. Try again later.";
      responseEl.style.color = "red";
    }
  });
});
