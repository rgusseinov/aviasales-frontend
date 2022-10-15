import { BoardController } from "./controllers/board";
import { FilterController } from "./controllers/filter";
import TicketsModel from "./models/tickets";
// import { API } from "./api/api";
import { tickets } from "./mock/tickets";
import "../public/scss/index.scss";

const appMainElement = document.querySelector("#app");
const appTicketListElement = document.querySelector(".ticket-list");

// const api = new API();
const ticketsModel = new TicketsModel();
ticketsModel.setTickets(tickets);

const filterController = new FilterController(appMainElement, ticketsModel);
filterController.render();

const boardController = new BoardController(appTicketListElement, ticketsModel, null);
boardController.render();

/* api.getTickets()
  .then((tickets) => {
    ticketsModel.setTickets(tickets);
    boardController.render();
  })
 */
