'use strict';
import ButtonCreator from '../utils/button/button-creator.js';
import ElementCreator from '../utils/element-creator.js';

export function createCalculatorUI() {
  const elementParams = {
    tag: 'section',
    classNames: ['calculator-container'],
    textContent: '',
    callback: null,
  };

  const displayParams = {
    tag: 'div',
    classNames: ['calculator-display'],
    textContent: '0',
    callback: null,
  };
  const display = new ElementCreator(displayParams);

  const calculatorElement = new ElementCreator(elementParams);
  calculatorElement.addInnerElement(display);

  const buttons = [
    { class: 'num', text: '0', callback: null },
    { class: 'num', text: '1', callback: null },
    { class: 'num', text: '2', callback: null },
    { class: 'num', text: '3', callback: null },
    { class: 'num', text: '4', callback: null },
    { class: 'num', text: '5', callback: null },
    { class: 'num', text: '6', callback: null },
    { class: 'num', text: '7', callback: null },
    { class: 'num', text: '8', callback: null },
    { class: 'num', text: '9', callback: null },
    { class: 'op', text: '+', callback: null },
    { class: 'op', text: '-', callback: null },
    { class: 'op', text: 'x', callback: null },
    { class: 'op', text: '=', callback: null },
    { class: 'op', text: '+/-', callback: null },
    { class: 'op', text: 'AC', callback: null },
    { class: 'op', text: '%', callback: null },
    { class: 'op', text: ',', callback: null },
  ];

  buttons.forEach(({ class: className, text, callback }) => {
    const button = new ButtonCreator({
      tag: 'button',
      classNames: [className],
      textContent: text,
      callback,
    });

    calculatorElement.addInnerElement(button.getElement());
  });

  return calculatorElement.getElement();
}
