import { createElement } from "../utils/render";

const createTicketMarkup = () => (`<article class="ticket-list__item ticket-item">
<div class="ticket-item__wrapper">
  <section class="ticket-item__header">
    <span class="ticket-item__price">13 400 Р</span>
    <img src="../img/carrier-logo.svg" alt="Logo" class="ticket-item__logo">
  </section>
  <section class="ticket-item__body">
    <div class="ticket-item__row">
      <div class="ticket-item__route">
        MOW – HKT
        <span>10:45 – 08:00</span>
      </div>
      <div class="ticket-item__route">
        В пути
        <span>21ч 15м</span>
      </div>
      <div class="ticket-item__route">
        2 пересадки
        <span>HKG, JNB</span>
      </div>
    </div>
    <div class="ticket-item__row">
      <div class="ticket-item__route">
        MOW – HKT
        <span>11:20 – 00:50</span>
      </div>
      <div class="ticket-item__route">
        В пути
        <span>13ч 30м</span>
      </div>
      <div class="ticket-item__route">
        1 пересадка
        <span>HKG</span>
      </div>
    </div>
  </section>
</div>
</article>`);

export default class Ticket {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTicketMarkup();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }
}
