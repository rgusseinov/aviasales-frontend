/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
import { FilterType } from "./utils";

export const filters = [{
  type: "all",
  name: "Все",
}, {
  type: "oneStop",
  name: "1 пересадка",
}, {
  type: "twoStops",
  name: "2 пересадки",
}, {
  type: "threeStops",
  name: "3 пересадки",
}, {
  type: "fourStops",
  name: "4 пересадки",
}];

const getOneStopTickets = (tickets) => {
  return tickets.filter((ticket) => ticket.segments[0].stops.length === 1);
};

const getTwoStopsTickets = (tickets) => {
  return tickets.filter((ticket) => ticket.segments[0].stops.length === 2);
};

const getThreeStopsTickets = (tickets) => {
  return tickets.filter((ticket) => ticket.segments[0].stops.length === 3);
};

const getFourStopsTickets = (tickets) => {
  return tickets.filter((ticket) => ticket.segments[0].stops.length === 4);
};

export const getTicketsByFilter = (tickets, filterType) => {
  switch (filterType) {
    case FilterType.ALL:
      return tickets;
    case FilterType.ONE_STOP:
      return getOneStopTickets(tickets);
    case FilterType.TWO_STOPS:
      return getTwoStopsTickets(tickets);
    case FilterType.THREE_STOPS:
      return getThreeStopsTickets(tickets);
    case FilterType.FOUR_STOPS:
      return getFourStopsTickets(tickets);
  }
};
