import { createCalculatorUI } from "./view/view";

document.addEventListener('DOMContentLoaded', () => {
    const calculator = createCalculatorUI();
    document.body.appendChild(calculator);
});
