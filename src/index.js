/* eslint-disable linebreak-style */
import "../public/scss/index.scss";
import Filter from "./components/filter";
import LoadMoreButton from "./components/load-more-button";
import Sort from "./components/sort";
import Ticket from "./components/ticket";
import { render } from "./utils/render";

const TICKET_COUNT = 5;

const appMainElement = document.querySelector("#app");
const appContentElement = document.querySelector(".app__content");
const appTicketListElement = document.querySelector(".ticket-list");

const filter = new Filter();
const sort = new Sort();
const ticket = new Ticket();
const loadMoreButton = new LoadMoreButton();

render(appMainElement, filter, "afterbegin");
render(appContentElement, sort, "afterbegin");

for (let i = 0; i < TICKET_COUNT; i += 1) {
  render(appTicketListElement, ticket, "afterbegin");
}

render(appTicketListElement, loadMoreButton, "beforeend");
