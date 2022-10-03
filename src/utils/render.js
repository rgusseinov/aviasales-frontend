// eslint-disable-next-line import/prefer-default-export
export const render = (element, component, position) => {
  // eslint-disable-next-line default-case
  switch (position) {
    case "afterbegin":
      element.insertAdjacentElement("afterbegin", component.getElement());
      break;
    case "beforeend":
      element.insertAdjacentElement("beforeend", component.getElement());
      break;
  }
};

export const createElement = (template) => {
  const element = document.createElement("div");
  element.innerHTML = template;

  return element.firstChild;
};
