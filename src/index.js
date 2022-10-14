import { BoardController } from "./controllers/board";
import { FilterController } from "./controllers/filter";
import TicketsModel from "./models/tickets";
import { tickets } from "./mock/tickets";
import "../public/scss/index.scss";

const appMainElement = document.querySelector("#app");
const appTicketListElement = document.querySelector(".ticket-list");

const ticketsModel = new TicketsModel();
ticketsModel.setTickets(tickets);

const filterController = new FilterController(appMainElement, ticketsModel);
filterController.render();

const boardController = new BoardController(appTicketListElement, ticketsModel);
boardController.render();
