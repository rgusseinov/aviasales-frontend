import {
  convertMinuteToHM, getArrivalTime, getCarrierLogo, getStopsSentense,
} from "../utils/utils";
import { AbstractComponent } from "./abstract-component";

const createTicketMarkup = (ticket) => {
  const { price, carrier, segments } = ticket;
  const carrierLogo = getCarrierLogo(carrier);

  const segmentMarkup = segments.map((segment) => {
    const {
      origin, destination, date, stops, duration,
    } = segment;

    const durationInMinutes = getArrivalTime(date, duration);
    const timeDuration = convertMinuteToHM(duration);
    const stopsSentence = getStopsSentense(stops.length);

    return `<div class="ticket-item__row">
      <div class="ticket-item__route">
        ${origin}-${destination}
        <span>${date.substr(11, 5)} - ${durationInMinutes}</span>
      </div>
      <div class="ticket-item__route">
        В пути
        <span>${timeDuration}</span>
      </div>
      <div class="ticket-item__route">
        ${stopsSentence}
        <span>${stops.join(",")}</span>
      </div>
    </div>`;
  }).join(" ");

  return (`<article class="ticket-list__item ticket-item">
             <div class="ticket-item__wrapper">
                <section class="ticket-item__header">
                  <span class="ticket-item__price">${price} Р.</span>
                  <img src="${carrierLogo}" alt="Logo" class="ticket-item__logo">
                </section>
                <section class="ticket-item__body">
                  ${segmentMarkup}
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
