export const ElementParams = {
  tag: string,
  classNames: Array,
  textContent: string,
  callback: Function,
};

export default class ElementCreator {
  constructor(params) {
    this.element = null;
    this.createElement(params);
  }

  createElement(params) {
    this.element = document.createElement(params.tag);
    this.setCssClasses(params.classNames);
    this.setTextContent(params.textContent);
    this.setCallback(params.callback);
  }

  setCssClasses(classNames) {
    classNames.forEach((className) => {
      this.element.classList.add(className);
    });
  }

  setTextContent(textContent) {
    this.element.textContent = textContent;
  }

  setCallback(callback) {
    this.element.addEventListener('click', (e) => callback(e));
  }

  getElement() {
    return this.element;
  }

  addInnerElement(element) {
    if (element instanceof ElementCreator) {
      this.element.append(element.getElement());
    } else {
      this.element.append(element);
    }
  }
}
