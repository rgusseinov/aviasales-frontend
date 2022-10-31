export const render = (element, component, position) => {
  switch (position) {
    case "afterbegin":
      element.insertAdjacentElement("afterbegin", component.getElement());
      break;
    case "beforeend":
      element.insertAdjacentElement("beforeend", component.getElement());
      break;
    case "afterend":
      element.insertAdjacentElement("afterend", component.getElement());
      break;
    default:
      element.insertAdjacentElement("afterbegin", component.getElement());
      break;
  }
};

export const createElement = (template) => {
  const element = document.createElement("div");
  element.innerHTML = template;

  return element.firstChild;
};

export const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};
