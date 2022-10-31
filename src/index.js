import BoardController from "./controllers/board";
import { FilterController } from "./controllers/filter";
import TicketsModel from "./models/tickets";
import { API } from "./api/api";
import "../public/scss/index.scss";

const appMainElement = document.querySelector("#app");
const appTicketListElement = document.querySelector(".ticket-list");

const api = new API();
const ticketsModel = new TicketsModel();

const filterController = new FilterController(appMainElement, ticketsModel);
filterController.render();

const boardController = new BoardController(appTicketListElement, ticketsModel, null);

api.getTickets()
  .then((tickets) => {
    ticketsModel.setTickets(tickets);
    boardController.render();
  });
