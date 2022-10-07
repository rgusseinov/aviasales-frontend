/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { getTicketsByFilter } from "../utils/filter";

export default class TicketsModel {
  constructor(tickets) {
    this._tickets = tickets;

    this._filters = [];
    this._filterChangeHandlers = []; //  Должны реагировать на изминения фильтров
  }

  getTickets() {
    return getTicketsByFilter(this._tickets, this._filters);
  }

  getTicketsAll() {
    return this._tickets;
  }

  setTickets(tickets) {
    this._tickets = Array.from(tickets);
  }

  setFilter(filterType) {
    if (!this._filters.includes(filterType)){
      this._filters.push(filterType);
    } else if (this._filters.includes(filterType)){
      this._filters = this._filters.filter(item => item !== filterType)
    }
    // console.log(`filters`, this._filters);
    this._callHandlers(this._filterChangeHandlers);
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }

  /* setActiveFilterType(type) {
    // this._activeFilterType = type;
  } */

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }
}
