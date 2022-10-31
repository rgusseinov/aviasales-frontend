export const SortType = {
  CHEAP: "cheap",
  FAST: "fast",
  OPTIMAL: "optmal",
};

export function sortByPrice(ticketA, ticketB) {
  if (ticketA.price > ticketB.price) return 1;
  if (ticketA.price < ticketB.price) return -1;
  return 0;
}

export const sortByFlightTime = (ticketA, ticketB) => {
  const flightFrom = ticketA.segments[0].duration + ticketA.segments[1].duration;
  const flightTo = ticketB.segments[0].duration + ticketB.segments[1].duration;

  if (flightFrom > flightTo) return 1; if (flightFrom < flightTo) return -1;
  return 0;
};


export const getSortedTickets = (tickets, sortType, from, to) => {
  let sortedTickets = [];
  const showingTickets = tickets.slice();

  switch (sortType) {
    case SortType.CHEAP:
      sortedTickets = showingTickets.sort(sortByPrice);
      break;
    case SortType.FAST:
      sortedTickets = showingTickets.sort(sortByFlightTime);
      break;
    default:
      sortedTickets = showingTickets;
  }

  return sortedTickets.slice(from, to);
};