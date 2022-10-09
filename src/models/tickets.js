/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { getTicketsByFilter } from "../utils/filter";
import { FILTER_TYPES } from "../utils/utils";

export default class TicketsModel {
  constructor(tickets) {
    this._tickets = tickets;

    this._filterTypes = { ...FILTER_TYPES };
    this._filterChangeHandlers = []; //  Должны реагировать на изминения фильтров
  }

  getTickets() {
    return getTicketsByFilter(this._tickets, this._filterTypes);
  }

  getTicketsAll() {
    return this._tickets;
  }

  setTickets(tickets) {
    this._tickets = Array.from(tickets);
  }

  setFilter(filterType) {
    this._filterTypes[filterType] = !this._filterTypes[filterType];
    this._callHandlers(this._filterChangeHandlers);
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }
}
