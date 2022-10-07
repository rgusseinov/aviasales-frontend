/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable default-case */
/* eslint-disable import/prefer-default-export */
import { FilterType } from "./utils";

export const filters = [{
  type: "all",
  name: "Все",
},{
  type: 0,
  name: "Без пересадки",
},{
  type: 1,
  name: "1 пересадка",
},{
  type: 2,
  name: "2 пересадки",
},{
  type: 3,
  name: "3 пересадки",
}];

export const getTicketsByFilter = (tickets, filterTypes) => {
  const isAllExist = filterTypes.find(filterType => filterType === 'all');
  if (isAllExist) return tickets;

  const filterTypesArr = filterTypes.map(Number);
  if (!filterTypesArr.length) return tickets;

  return tickets.filter((ticket) => {
    return filterTypesArr.includes(ticket.segments[0].stops.length) && 
    filterTypesArr.includes(ticket.segments[1].stops.length)
  });
};
