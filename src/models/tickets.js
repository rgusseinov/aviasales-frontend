/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { getTicketsByFilter } from "../utils/filter";
import { FilterType } from "../utils/utils";

export default class TicketsModel {
  constructor(tickets) {
    this._tickets = tickets;
    this._activeFilterType = FilterType.ALL;

    this._filterChangeHandlers = []; //  Должны реагировать на изминения фильтров
  }

  getTickets() {
    return getTicketsByFilter(this._tickets, this._activeFilterType);
  }

  getTicketsAll() {
    return this._tickets;
  }

  setTickets(tickets) {
    this._tickets = Array.from(tickets);
  }

  setFilter(filterType) {
    // console.log(`handlers`, this._filterChangeHandlers);
    this._activeFilterType = filterType;
    this._callHandlers(this._filterChangeHandlers);
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }

  setActiveFilterType(type) {
    this._activeFilterType = type;
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }
}
