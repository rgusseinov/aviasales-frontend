import { FilterType, getTicketsByFilter } from "../utils/filter";
import { SortType } from "../utils/sort";

export default class TicketsModel {
  constructor(tickets) {
    this._tickets = tickets;

    this._filterTypes = { ...FilterType };
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

  setFilter(filterType) {
    this._filterTypes = { ...filterType };
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
