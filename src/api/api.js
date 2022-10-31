const getSearchId = async () => await fetch("https://front-test.dev.aviasales.ru/search")
  .then((response) => response.json());

const requestTickets = async (searchId) => {
  const response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`);
  return response;
};

export class API {
  constructor(endPoint) {
    this._endPoint = endPoint;
  }

  async getTickets() {
    const searchIdResponse = await getSearchId();
    const { searchId } = searchIdResponse;
    let result = [];

    while (true) {
      const response = await requestTickets(searchId);

      if (response.ok) {
        const data = await response.json();
        result = data.tickets;

        if (data.stop) {
          break;
        }
      }
    }
    return result;
  }
}
