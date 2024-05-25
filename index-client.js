// front-end utils
export const domUtils = {
  $(elem) {
    return document.querySelector(elem);
  },
  $$(elem) {
    return document.querySelectorAll(elem);
  },
  // eg: createElem('span', { textContent: 'hello' })
  createElem(tagName, props = {}) {
    const el = document.createElement(tagName);
    return Object.assign(el, props);
  },
};
