const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    if (!/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Focus next with reliable delay (for Cypress to detect)
    if (index < inputs.length - 1) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          inputs[index + 1].focus();
        }, 100); // allow Cypress to detect focus
      });
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      } else {
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