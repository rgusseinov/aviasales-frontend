import { AbstractComponent } from "./abstract-component";

const createFilterMarkup = () => (`<aside class="app__filter filter">
  <div class="filter__group">
    <div class="filter__header">Количество пересадок</div>
    <div class="filter__content filter-stops">
      <div class="filter__row">
        <label class="filter-checkbox">
          <div class="filter-checkbox__wrapper">
            <input type="checkbox" class="filter-checkbox__input" />
            <div class="filter-checkbox__hidden"></div>
            <span>Все</span>
          </div>
        </label>
      </div>
      <div class="filter__row">
        <label class="filter-checkbox">
          <div class="filter-checkbox__wrapper">
            <input type="checkbox" class="filter-checkbox__input" />
            <div class="filter-checkbox__hidden"></div>
            <span>Без пересадок</span>
          </div>
        </label>
      </div>
      <div class="filter__row">
        <label class="filter-checkbox">
          <div class="filter-checkbox__wrapper">
            <input type="checkbox" class="filter-checkbox__input" />
            <div class="filter-checkbox__hidden"></div>
            <span>1 пересадки</span>
          </div>
        </label>
      </div>
      <div class="filter__row">
        <label class="filter-checkbox">
          <div class="filter-checkbox__wrapper">
            <input type="checkbox" class="filter-checkbox__input" />
            <div class="filter-checkbox__hidden"></div>
            <span>2 пересадки</span>
          </div>
        </label>
      </div>
      <div class="filter__row">
        <label class="filter-checkbox">
          <div class="filter-checkbox__wrapper">
            <input type="checkbox" class="filter-checkbox__input" />
            <div class="filter-checkbox__hidden"></div>
            <span>3 пересадки</span>
          </div>
        </label>
      </div>
    </div>
    </div>
  </aside>`);

export default class Filter extends AbstractComponent {
  getTemplate() {
    return createFilterMarkup();
  }
}
