const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // Only allow 0-9
    if (!/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }
	  
setTimeout(() => {
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  }, 50); // slight delay ensures Cypress sees .focused()
});

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        // If current is empty, go to previous
        if (index > 0) {
          inputs[index - 1].focus();
        }
      } else {
        // Clear current value
        input.value = "";
      }
    }
  });

  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text").slice(0, 6);
    paste.split('').forEach((char, i) => {
      if (i < inputs.length) {
        inputs[i].value = char;
      }
    });
    const next = paste.length < inputs.length ? paste.length : inputs.length - 1;
    inputs[next].focus();
  });
});