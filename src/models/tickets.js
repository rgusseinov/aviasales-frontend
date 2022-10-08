/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { getTicketsByFilter } from "../utils/filter";

export default class TicketsModel {
  constructor(tickets) {
    this._tickets = tickets;

    this._filters = [];
    this._dataChangeHandlers = []; // Должны реагировать на изминения данных
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
    this._callHandlers(this._dataChangeHandlers);
  }

  setFilter(filterType) {
    if (!this._filters.includes(filterType)){
      this._filters.push(filterType);
    } else if (this._filters.includes(filterType)){
      this._filters = this._filters.filter(item => item !== filterType)
    }
    this._callHandlers(this._filterChangeHandlers);
  }

  getFilters() {
    return this._filters;
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }

  setDataChangeHandler(handler) {
    this._dataChangeHandlers.push(handler);
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }
}
