import { filterByStops } from "./utils";

export const filters = [{
  type: "all",
  name: "Все",
},{
  type: "direct",
  name: "Без пересадки",
},{
  type: "oneStop",
  name: "1 пересадка",
},{
  type: "twoStops",
  name: "2 пересадки",
},{
  type: "threeStops",
  name: "3 пересадки",
}];

export const getTicketsByFilter = (tickets, filterType) => {
  let result = [];
  if (filterType.all) {
    result = tickets;
  } else if ((!filterType.direct && !filterType.oneStop && !filterType.twoStops && !filterType.threeStops)) {
    result = tickets;
  } else {
    if (filterType.direct) {
      result.push(...filterByStops(tickets, 0));
    }
    
    if (filterType.oneStop) {
      result.push(...filterByStops(tickets, 1));
    }

    if (filterType.twoStops) {
      result.push(...filterByStops(tickets, 2));
    }

    if (filterType.threeStops) {
      result.push(...filterByStops(tickets, 3));
    }
  }
  return result;
};
