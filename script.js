const inputs = document.querySelectorAll(".otp-input");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value.length > 1) {
      input.value = value.charAt(0);
    }

    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });

  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").slice(0, 6);
    const values = data.split("");
    values.forEach((char, i) => {
      if (inputs[i]) inputs[i].value = char;
    });
    if (values.length > 0) {
      inputs[values.length - 1].focus();
    }
  });
});