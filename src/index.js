import { createCalculatorUI } from "./app/view/view";

document.addEventListener('DOMContentLoaded', () => {
    const calculator = createCalculatorUI();
    document.body.appendChild(calculator);
});
