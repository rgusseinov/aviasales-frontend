/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

import LoadMoreButton from "../components/load-more-button";
import Sort from "../components/sort";
import Ticket from "../components/ticket";
import { remove, render } from "../utils/render";
import { SHOWING_TICKETS_ON_LOAD, SHOWING_TICKETS_ON_START, sortByFlightTime, sortByPrice } from "../utils/utils";

export class BoardController {
  constructor(container, ticketsModel) {
    this._container = container;

    this._ticketsModel = ticketsModel;
    this._showingTicketsCount = SHOWING_TICKETS_ON_START;

    this._sortComponent = new Sort(); 
    this._loadMoreButtonComponent = new LoadMoreButton();

    this._onSortTypeChange = this._onSortTypeChange.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);
    this._onLoadMoreButtonClick = this._onLoadMoreButtonClick.bind(this);

    this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
    this._ticketsModel.setFilterChangeHandler(this._onFilterChange);
  }

  _onFilterChange() {
    this._updateTickets(this._showingTicketsCount);
  }

  _onSortTypeChange(sortType) {
    this._updateTickets(this._showingTicketsCount, sortType);
  }

  render() {
    const tickets = this._ticketsModel.getTickets();
    const appContentElement = document.querySelector(".app__content");
    render(appContentElement, this._sortComponent, "afterbegin");

    this._renderTickets(tickets.slice(0, this._showingTicketsCount));
    this._renderLoadMoreButton();
  }

  _renderTickets(tickets, sortType) {
    const boardComponent = this._container;

    if (sortType && sortType == 'cheap'){
      tickets = tickets.slice().sort(sortByPrice);
    } else if (sortType && sortType == 'fast'){
      tickets = tickets.slice().sort(sortByFlightTime);
    }

    tickets.forEach((ticketItem) => {
      const ticket = new Ticket(ticketItem);
      render(boardComponent, ticket, "beforeend");
    }); 
  }

  _updateTickets(count, sortType = null) {
    this._removeTickets();
    this._renderTickets(this._ticketsModel.getTickets().slice(0, count), sortType);
    this._renderLoadMoreButton();
  }

  _removeTickets() {
    const boardComponent = this._container;
    boardComponent.innerHTML = "";
  }

  _renderLoadMoreButton() {
    remove(this._loadMoreButtonComponent);
    if (this._showingTicketsCount >= this._ticketsModel.getTickets().length) {
      return;
    }

    const boardTickets = this._container;
    render(boardTickets, this._loadMoreButtonComponent, "afterend");
    this._loadMoreButtonComponent.setClickHandler(this._onLoadMoreButtonClick);
  }

  _onLoadMoreButtonClick() {
    const prevTicketsCount = this._showingTicketsCount;
    const tickets = this._ticketsModel.getTickets();

    this._showingTicketsCount += SHOWING_TICKETS_ON_LOAD;

    const filteredTickets = tickets.slice(prevTicketsCount, this._showingTicketsCount)
    this._renderTickets(filteredTickets);

    if (this._showingTicketsCount >= tickets.length) {
      remove(this._loadMoreButtonComponent);
    }
  }
}
