import BoardController from "./controllers/board";
import { FilterController } from "./controllers/filter";
import { API } from "./api/api";
import TicketsModel from "./models/tickets";
import Loader from "./components/loader";
import { remove, render } from "./utils/render";
import "../public/scss/index.scss";

const appMainElement = document.querySelector("#app");
const appTicketListElement = document.querySelector(".ticket-list");
const loaderComponent = new Loader();

const api = new API();
const ticketsModel = new TicketsModel();
render(appMainElement, loaderComponent, "afterbegin");

const filterController = new FilterController(appMainElement, ticketsModel);
filterController.render();

const boardController = new BoardController(appTicketListElement, ticketsModel, null);

api.getTickets()
  .then((tickets) => {
    ticketsModel.setTickets(tickets);
    boardController.render();
    remove(loaderComponent);
  });
