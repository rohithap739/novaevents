function generatePlan() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selected = [];
  
    checkboxes.forEach(box => {
      if (box.checked) {
        selected.push(box.parentElement.textContent.trim());
      }
    });
  
    const result = selected.length > 0
      ? `Your custom plan includes: ${selected.join(", ")}. Let’s get the party started! 🎊`
      : "Pick at least one option to build your bash!";
  
    document.getElementById("plan-result").textContent = result;
  }
  