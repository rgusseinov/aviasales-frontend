import { AbstractComponent } from "./abstract-component";

const createLoadMoreButtonMarkup = () => ("<div class='app__loadmore-tickets'>Показать еще 5 билетов!<div>");

export default class LoadMoreButton extends AbstractComponent {
  getTemplate() {
    return createLoadMoreButtonMarkup();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener("click", () => handler())
  }
}
