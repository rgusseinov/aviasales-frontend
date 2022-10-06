/* eslint-disable linebreak-style */
import Filter from "./components/filter";
import LoadMoreButton from "./components/load-more-button";
import Sort from "./components/sort";
import Ticket from "./components/ticket";
import { render } from "./utils/render";
import { tickets } from "./mock/tickets";
import "../public/scss/index.scss";

const appMainElement = document.querySelector("#app");
const appContentElement = document.querySelector(".app__content");
const appTicketListElement = document.querySelector(".ticket-list");

const filter = new Filter();
render(appMainElement, filter, "afterbegin");
filter.setFilterClickHandler((type) => {
  console.log(`filter`, type);
});

const sort = new Sort();
render(appContentElement, sort, "afterbegin");

tickets.forEach((ticketItem) => {
  const ticket = new Ticket(ticketItem);
  render(appTicketListElement, ticket, "afterbegin");
});

const loadMoreButton = new LoadMoreButton();
render(appTicketListElement, loadMoreButton, "beforeend");
