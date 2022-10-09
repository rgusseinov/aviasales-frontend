export const getCarrierLogo = (carrier) => `https://pics.avs.io/99/36/${carrier}.png`;
export const SHOWING_TICKETS_ON_START = 2;
export const SHOWING_TICKETS_ON_LOAD = 2;

export const FilterType = {
  ALL: "all",
  DIRECT: 'direct',
  ONE_STOP: "oneStop",
  TWO_STOPS: "twoStops",
  THREE_STOPS: "threeStops",
};

export const FILTER_TYPES = {
  all: false,
  direct: false,
  oneStop: false,
  twoStops: false,
  threeStops: false,
}

export const SortType = {
  CHEAP: "cheap",
  FAST: "fast",
  OPTIMAL: "optmal"
};

export function convertMinuteToHM(minutes) {
  let rhours; let minute; let
    result = null;
  const hours = minutes / 60;
  rhours = Math.floor(hours);
  minute = Math.round((hours - rhours) * 60);

  rhours = (rhours < 10) ? `0${rhours}` : rhours;
  minute = (minute < 10) ? `0${minute}` : minute;

  result = `${rhours}ч : ${minute}м`;
  return result;
}

export function getArrivalTime(date, durationMinutes) {
  const newDate = new Date(date);
  newDate.setUTCMinutes(new Date(date).getMinutes() + durationMinutes);
  const h = (newDate.getHours() < 10) ? `0${newDate.getHours()}` : `${newDate.getHours()}`;
  const m = (newDate.getMonth() < 10) ? `0${newDate.getMonth()}` : `${newDate.getMonth()}`;

  return `${h}:${m}`;
}

export const getStopsSentense = (countStops) => {
  switch (countStops) {
    case 0:
      return "без пересадок";
    case 1:
      return `${countStops} пересадка`;
    case 2:
      return `${countStops} пересадки`;
    case 3:
      return `${countStops} пересадки`;
    default:
      return `${countStops} пересадок`;
  }
};

export function sortByPrice(ticketA, ticketB){
  if (ticketA.price > ticketB.price) return 1;
  if (ticketA.price < ticketB.price) return -1;
  return 0;
}

export const sortByFlightTime = (ticketA, ticketB) => {
  const flightFrom = ticketA.segments[0].duration + ticketA.segments[1].duration;
  const flightTo = ticketB.segments[0].duration + ticketB.segments[1].duration;

  if (flightFrom > flightTo) return 1; else if (flightFrom < flightTo) return -1;
  return 0;
};

export const filterByStops = (tickets, stops) => {
  return tickets.filter(ticket => {
    const [first, second] = ticket.segments;
    return first.stops.length === stops && second.stops.length === stops;
  });
};
