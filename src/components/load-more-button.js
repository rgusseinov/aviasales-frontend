const createLoadMoreButtonMarkup = () => (`<div class="app__loadmore-tickets">Показать еще 5 билетов!</div>`);

export default class LoadMoreButton {
  getTemplate() {
    return createLoadMoreButtonMarkup();
  }
}
