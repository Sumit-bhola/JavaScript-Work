const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    const action = button.getAttribute("data-action");

    if (action === "clear") {
      currentInput = "";
      updateDisplay("0");
    } else if (action === "delete") {
      currentInput = currentInput.slice(0, -1);
      updateDisplay(currentInput || "0");
    } else if (action === "calculate") {
      try {
        const sanitized = currentInput.replace(/x/g, '*');
        const result = eval(sanitized);
        currentInput = result.toString();
        updateDisplay(currentInput);
      } catch {
        updateDisplay("Error");
        currentInput = "";
      }
    } else if (value) {
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});

function updateDisplay(value) {
  display.textContent = value;
}


document.addEventListener("keydown", (e) => {
    const key = e.key;
  
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
      currentInput += key;
      updateDisplay(currentInput);
    } else if (key === "Enter" || key === "=") {
      try {
        const sanitized = currentInput.replace(/x/g, '*');
        const result = eval(sanitized);
        currentInput = result.toString();
        updateDisplay(currentInput);
      } catch {
        updateDisplay("Error");
        currentInput = "";
      }
    } else if (key === "Backspace") {
      currentInput = currentInput.slice(0, -1);
      updateDisplay(currentInput || "0");
    } else if (key.toLowerCase() === "c") {
      currentInput = "";
      updateDisplay("0");
    }
  });
  


  const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});
