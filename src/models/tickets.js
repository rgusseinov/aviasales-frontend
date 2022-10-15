import { getTicketsByFilter } from "../utils/filter";
import { FilterTypes, SortType } from "../utils/utils";

export default class TicketsModel {
  constructor(tickets) {
    this._tickets = tickets;

    this._filterTypes = { ...FilterTypes };
    this._sortType = SortType.CHEAP;

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

  setFilter(filterTypes) {
    this._filterTypes = { ...filterTypes };
    this._callHandlers(this._filterChangeHandlers);
  }

  setSortType(type) {
    this._sortType = type;
  }

  getActiveSortType() {
    return this._sortType;
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }
}
