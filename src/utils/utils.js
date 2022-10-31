export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`
};

export function convertMinuteToHM(minutes) {
  let rhours;
  let minute; 
  let result = null;
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

