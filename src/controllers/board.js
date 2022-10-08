/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

import LoadMoreButton from "../components/load-more-button";
import Ticket from "../components/ticket";
import { render } from "../utils/render";
import { SHOWING_TICKETS_ON_START } from "../utils/utils";

export class BoardController {
  constructor(container, ticketsModel) {
    this._container = container;
    this._ticketsModel = ticketsModel;
    this._showingTicketsCount = SHOWING_TICKETS_ON_START;

    this._loadMoreButtonComponent = new LoadMoreButton();
    this._onLoadMoreButtonClick = this._onLoadMoreButtonClick.bind(this);

    this._onFilterChange = this._onFilterChange.bind(this);
    this._ticketsModel.setFilterChangeHandler(this._onFilterChange);

    this._filterComponent = null;
    // this._onFilterChange = this._onFilterChange.bind(this);
  }

  render() {
    const tickets = this._ticketsModel.getTickets();

    this._renderTickets(tickets.slice(0, this._showingTicketsCount));
    this._renderLoadMoreButton();
  }

  _renderTickets(tickets) {
    const boardComponent = this._container;

    tickets.forEach((ticketItem) => {
      const ticket = new Ticket(ticketItem);
      render(boardComponent, ticket, "afterbegin");
    });
    this._showingTicketsCount = tickets.length;
  }

  _updateTickets(count) {
    this._removeTickets();
    this._renderTickets(this._ticketsModel.getTickets().slice(0, count));
    this._renderLoadMoreButton();
  }

  _removeTickets() {
    const boardComponent = this._container;
    boardComponent.innerHTML = "";
  }

  _renderLoadMoreButton() {
    // remove(this._loadMoreButtonComponent);
    if (this._showingTicketsCount >= this._ticketsModel.getTickets().length) {
      return;
    }

    const boardTickets = this._container;
    render(boardTickets, this._loadMoreButtonComponent, "beforeend");
    // this._loadMoreButtonComponent.setClickHandler(this._onLoadMoreButtonClick);
  }

  _onFilterChange() {
    this._updateTickets(SHOWING_TICKETS_ON_START);
  }

  _onLoadMoreButtonClick() {}
}
