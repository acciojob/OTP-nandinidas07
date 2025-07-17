//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // Only allow digits
    if (!/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move to next input if any
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        // Move to previous field if current is empty
        if (index > 0) {
          inputs[index - 1].focus();
        }
      } else {
        // Clear current field if not empty
        input.value = "";
      }
    }
  });

  // Allow arrow keys to move between inputs
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && index > 0) {
      inputs[index - 1].focus();
    }
    if (e.key === "ArrowRight" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});