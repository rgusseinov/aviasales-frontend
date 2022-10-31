import { AbstractComponent } from "./abstract-component";

const createLoaderMarkup = () => ("<div class='app__loader'>Загрузка билетов...<div>");

export default class Loader extends AbstractComponent {
  getTemplate() {
    return createLoaderMarkup();
  }
}
