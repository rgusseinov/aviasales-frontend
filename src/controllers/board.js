import LoadMoreButton from "../components/load-more-button";
import Sort from "../components/sort";
import Ticket from "../components/ticket";
import { getSortedTickets, SHOWING_TICKETS_ON_LOAD, SHOWING_TICKETS_ON_START } from "../utils/utils";
import { remove, render } from "../utils/render";

export default class BoardController {
  constructor(container, ticketsModel, api) {
    this._container = container;
    this._api = api;

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
    this._updateTickets();
  }

  _onSortTypeChange(sortType) {
    this._ticketsModel.setSortType(sortType);
    this._updateTickets();
  }

  _updateTickets() {
    this._removeTickets();
    this._renderTickets(this._ticketsModel.getTickets());
    this._renderLoadMoreButton();
  }

  render() {
    const tickets = this._ticketsModel.getTickets();
    const appContentElement = document.querySelector(".app__content");
    render(appContentElement, this._sortComponent, "afterbegin");

    this._renderTickets(tickets);
    this._renderLoadMoreButton();
  }

  _renderTickets(tickets) {
    const boardComponent = this._container;

    const sortType = this._ticketsModel.getActiveSortType();
    const sortedTickets = getSortedTickets(tickets, sortType, 0, this._showingTicketsCount);

    sortedTickets.forEach((ticketItem) => {
      const ticket = new Ticket(ticketItem);
      render(boardComponent, ticket, "beforeend");
    });
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
    const sortType = this._ticketsModel.getActiveSortType();
    const sortedTickets = getSortedTickets(tickets, sortType, prevTicketsCount, this._showingTicketsCount);

    this._renderTickets(sortedTickets);

    if (this._showingTicketsCount >= tickets.length) {
      remove(this._loadMoreButtonComponent);
    }
  }
}
