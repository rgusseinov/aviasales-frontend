/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-underscore-dangle */
/* eslint-disable space-before-blocks */
/* eslint-disable arrow-body-style */

import { filters } from "../utils/filter";
import { AbstractComponent } from "./abstract-component";

const createFilterMarkup = (filter) => {
  const { type, name } = filter;
  return (`<div class="filter__row">
            <label class="filter-checkbox">
              <div class="filter-checkbox__wrapper">
                <input type="checkbox" class="filter-checkbox__input" name="filter" data-filter-type="${type}" value="${type}" />
                <div class="filter-checkbox__hidden"></div>
                <span>${name}</span>
              </div>
            </label>
          </div>`);
};

const createFilterTemplate = () => {
  const filterTemplate = filters.map((filter) => createFilterMarkup(filter));

  return `<aside class="app__filter filter">
            <div class="filter__group">
              <div class="filter__header">Количество пересадок</div>
              <div class="filter__content filter-stops">
                ${filterTemplate.join("")}
              </div>
              </div>
            </aside>`;
};

export default class Filter extends AbstractComponent {
  constructor(){
    super();
  }
  getTemplate() {
    return createFilterTemplate();
  }

  setFilterChangeHandler(handler) {
    this.getElement().addEventListener("change", (evt) => {
      handler(evt.target.value);
    });
  }
}
