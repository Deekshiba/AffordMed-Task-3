document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");

    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "C") {
                currentInput = "";
            } else if (value === "←") {
                currentInput = currentInput.slice(0, -1);
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput.replace("x", "*")).toString();
                } catch {
                    currentInput = "Error";
                }
            } else {
                currentInput += value;
            }

            display.value = currentInput;
        });
    });
});
