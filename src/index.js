/* eslint-disable linebreak-style */
import { BoardController } from "./controllers/board";
import { FilterController } from "./controllers/filter";
import TicketsModel from "./models/tickets";
import Sort from "./components/sort";
import LoadMoreButton from "./components/load-more-button";
import { render } from "./utils/render";
import { tickets } from "./mock/tickets";
import "../public/scss/index.scss";

const appMainElement = document.querySelector("#app");
const appContentElement = document.querySelector(".app__content");
const appTicketListElement = document.querySelector(".ticket-list");

const ticketsModel = new TicketsModel();
ticketsModel.setTickets(tickets);

const filterController = new FilterController(appMainElement, ticketsModel);
filterController.render();

const sort = new Sort();
render(appContentElement, sort, "afterbegin");

const boardController = new BoardController(appTicketListElement, ticketsModel);
boardController.render();

const loadMoreButton = new LoadMoreButton();
render(appTicketListElement, loadMoreButton, "beforeend");
