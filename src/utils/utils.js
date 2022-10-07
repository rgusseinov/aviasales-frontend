export const getCarrierLogo = (carrier) => `https://pics.avs.io/99/36/${carrier}.png`;
export const SHOWING_TICKETS_ON_START = 5;

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

export const FilterType = {
  ALL: "all",
  ONE_STOP: "oneStop",
  TWO_STOPS: "twoStops",
  THREE_STOPS: "threeStops",
  FOUR_STOPS: "fourStops",
};
