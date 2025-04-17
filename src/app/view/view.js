'use strict';
import ButtonCreator from '../utils/button/button-creator.js';
import ElementCreator from '../utils/element-creator.js';
import { validateInput, calculate } from '../utils/calculator.js';
import clickSound from '../../assets/click.mp3';
import './view.css';

export function createCalculatorUI() {
  const appContainer = new ElementCreator({
    tag: 'div',
    classNames: ['app-container'],
    textContent: '',
    callback: null,
  });

  const sidebar = new ElementCreator({
    tag: 'div',
    classNames: ['sidebar'],
    textContent: '',
    callback: null,
  });

  const buttonSound = new Audio(clickSound);
  buttonSound.volume = 1;

  let soundOn = true;
  const soundButton = new ButtonCreator({
    tag: 'button',
    classNames: ['sound-button'],
    textContent: '🔊',
    callback: () => {
      soundOn = !soundOn;
      soundButton.setTextContent(soundOn ? '🔊' : '🔇');
      playSound(soundOn, buttonSound);
    },
  });

  let darkTheme = false;
  const themeButton = new ButtonCreator({
    tag: 'button',
    classNames: [],
    textContent: '🌞',
    callback: () => {
      darkTheme = !darkTheme;
      document.body.classList.toggle('dark-theme', darkTheme);
      themeButton.setTextContent(darkTheme ? '🌙' : '🌞');
      playSound(soundOn, buttonSound);
    },
  });

  sidebar.addInnerElement(soundButton.getElement());
  sidebar.addInnerElement(themeButton.getElement());

  const elementParams = {
    tag: 'section',
    classNames: ['calculator-container'],
    textContent: '',
    callback: null,
  };

  const displayParams = {
    tag: 'input',
    classNames: ['calculator-display'],
    textContent: '',
    callback: null,
  };
  const display = new ElementCreator(displayParams);
  const displayElement = display.getElement();
  displayElement.type = 'text';
  displayElement.value = '0';
  displayElement.addEventListener('keydown', (e) => {
    validateInput(e);
    playSound(soundOn, buttonSound);
  });

  const calculatorElement = new ElementCreator(elementParams);
  calculatorElement.addInnerElement(display);

  const buttonLayout = [
    ['AC', '(', ')', '×'],
    ['√', '%', '+/-', '÷'],
    ['7', '8', '9', '−'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '·', '⌫'],
  ];

  buttonLayout.forEach((row) => {
    row.forEach((text) => {
      const className = isNaN(text) && text !== '·' ? 'op' : 'num';
      let callback;

      switch (text) {
        case 'AC':
          callback = () => {
            displayElement.value = '0';
            playSound(soundOn, buttonSound);
          };
          break;
        case '⌫':
          callback = () => {
            displayElement.value = displayElement.value.slice(0, -1) || '0';
            playSound(soundOn, buttonSound);
          };
          break;
        case '+/-':
          callback = () => {
            const current = displayElement.value;
            const match = current.match(/(\(-?\d+(\.\d+)?\)|-?\d+(\.\d+)?)$/);

            if (match) {
              const number = match[0];
              let replacement;
              if (number.startsWith('(-')) {
                replacement = number.slice(2, -1);
              } else if (number.startsWith('-')) {
                replacement = `($number.slice(1)}`;
              } else {
                replacement = `(-${number})`;
              }

              displayElement.value =
                current.slice(0, -number.length) + replacement;
            }
            playSound(soundOn, buttonSound);
          };
          break;
        case '%':
          callback = () => {
            const expr = displayElement.value;
            const match = expr.match(/(.+?)([+\-*/])(\(?-?\d+(\.\d+)?\)?)$/);

            if (match) {
              const baseExpr = match[1]; // expression w/o last num
              const operator = match[2]; // operator before num
              const number = match[3];

              const percentageExpr = `(${baseExpr}${operator}(${baseExpr}*${number}/100))`;
              displayElement.value = percentageExpr;
            } else {
              const simpleMatch = expr.match(/(-?\d+(\.\d+)?)(?!.*\d)/);
              if (simpleMatch) {
                const number = simpleMatch[0];
                displayElement.value =
                  expr.slice(0, -number.length) + `(${number}*0.01)`;
              }
            }
            playSound(soundOn, buttonSound);
          };
          break;
        case '√':
          callback = () => {
            if (displayElement.value === '0') {
              displayElement.value = '√(';
            } else {
              displayElement.value += '√(';
            }
            playSound(soundOn, buttonSound);
          };
          break;
        case '=':
          callback = () => {
            const input = displayElement.value
              .replace(/×/g, '*')
              .replace(/÷/g, '/')
              .replace(/−/g, '-')
              .replace(/·/g, '.')
              .replace(/,/g, '.');

            const result = calculate(input);
            displayElement.value = result;
            playSound(soundOn, buttonSound);
          };
          break;
        default:
          callback = () => {
            if (displayElement.value === '0') {
              displayElement.value = text;
            } else {
              displayElement.value += text;
            }
            playSound(soundOn, buttonSound);
          };
      }

      const button = new ButtonCreator({
        tag: 'button',
        classNames: [className],
        textContent: text,
        callback,
      });

      calculatorElement.addInnerElement(button.getElement());
    });
  });

  appContainer.addInnerElement(sidebar);
  appContainer.addInnerElement(calculatorElement);

  return appContainer.getElement();
}

function playSound(soundOn, buttonSound) {
  if (soundOn) {
    buttonSound.play().catch((e) => console.log('Audio play error:', e));
  }
}
