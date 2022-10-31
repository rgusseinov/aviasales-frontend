import { AbstractComponent } from "./abstract-component";

const createSortMarkup = () => (`<ul class="app__sort sort-list">
              <li class="sort-list__item selected">
                <label for="sort-cheap">Самые дешевые</label>
                <input type="radio" name="sort" id="sort-cheap" value="cheap" />
              </li>
              <li class="sort-list__item">
                <label for="sort-fast">Самый быстрый</label>
                <input type="radio" name="sort" id="sort-fast" value="fast" />
              </li>
            </ul>`);

export default class Sort extends AbstractComponent {
  getTemplate() {
    return createSortMarkup();
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener("change", (evt) => {
      handler(evt.target.value);

      const sortLiElements = this.getElement().querySelectorAll("li");
      sortLiElements.forEach((element) => {
        if (element.classList.contains("selected")) {
          element.classList.remove("selected");
        }
      });

      const sortElement = this.getElement()
        .querySelector(`#sort-${evt.target.value}`)
        .closest("li.sort-list__item");
      sortElement.classList.add("selected");
    });
  }
}
