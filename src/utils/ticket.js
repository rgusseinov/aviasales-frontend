export const SHOWING_TICKETS_ON_START = 5;
export const SHOWING_TICKETS_ON_LOAD = 5;

export const getCarrierLogo = (carrier) => `https://pics.avs.io/99/36/${carrier}.png`;

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
