import './button.css';
import ElementCreator from '../element-creator';

export default class ButtonCreator extends ElementCreator {
  createElement(params) {
    this.element = document.createElement('div');
    this.element.classList.add('button-container');

    if (params.classNames) {
      params.classNames.forEach((name) => {
        this.element.classList.add(name);
      });
    }

    this.buttonElement = document.createElement('button');
    this.setTextContent(params.textContent);
    this.element.append(this.buttonElement);
    this.setCallback(params.callback);

    return this.element;
  }

  setTextContent(textContent) {
    this.buttonElement.textContent = textContent;
  }

  setCallback(callback) {
    this.buttonElement.addEventListener('click', (e) => callback(e));
  }
}
