import { AbstractComponent } from "./abstract-component";

const createTicketMarkup = (ticket) => {
  console.log(ticket)
  const origin = `HK-MOW`;
  const originDurationDate = `10:45 – 08:00`;
  const originDurationTime = `13ч 20м`;
  const originStops = `HKG, JNB`;

  const destination = `HK-MOW`;
  const destinationDurationDate = `04:20 – 12:10`;
  const destinationDurationTime = `8ч 10м`;
  const destinationStops = `HKG`;

  return (`<article class="ticket-list__item ticket-item">
            <div class="ticket-item__wrapper">
              <section class="ticket-item__header">
                <span class="ticket-item__price">13 400 Р</span>
                <img src="../img/carrier-logo.svg" alt="Logo" class="ticket-item__logo">
              </section>
              <section class="ticket-item__body">
                <div class="ticket-item__row">
                  <div class="ticket-item__route">
                    ${origin}
                    <span>${originDurationDate}</span>
                  </div>
                  <div class="ticket-item__route">
                    В пути
                    <span>${originDurationTime}</span>
                  </div>
                  <div class="ticket-item__route">
                    2 пересадки
                    <span>${originStops}</span>
                  </div>
                </div>
                <div class="ticket-item__row">
                  <div class="ticket-item__route">
                    ${destination}
                    <span>${destinationDurationDate}</span>
                  </div>
                  <div class="ticket-item__route">
                    В пути
                    <span>${destinationDurationTime}</span>
                  </div>
                  <div class="ticket-item__route">
                    1 пересадка
                    <span>${destinationStops}</span>
                  </div>
                </div>
              </section>
            </div>
            </article>`);
};

export default class Ticket extends AbstractComponent {
  constructor(ticket) {
    super();
    this._ticket = ticket;
  }

  getTemplate() {
    return createTicketMarkup(this._ticket);
  }
}
