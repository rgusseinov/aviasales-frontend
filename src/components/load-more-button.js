import { createElement } from "../utils/render";

const createLoadMoreButtonMarkup = () => ("<div class='app__loadmore-tickets'>Показать еще 5 билетов!<div>");

export default class LoadMoreButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createLoadMoreButtonMarkup();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }
}
