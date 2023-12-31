/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { H as Helper } from './Helper.js';
import { d as defineCustomElement$2 } from './salla-price-range2.js';
import { d as defineCustomElement$1 } from './salla-rating-stars2.js';

var FilterOptionTypes;
(function (FilterOptionTypes) {
  // CATEGORIES = "categories",
  // BRANDs = "brands",
  // RATING = "rating",
  // PRICE = "price",
  // RADIO = "radio",
  FilterOptionTypes["VALUES"] = "values";
  FilterOptionTypes["VARIANTS"] = "variants";
  FilterOptionTypes["MINIMUM"] = "minimum";
  FilterOptionTypes["RANGE"] = "range";
})(FilterOptionTypes || (FilterOptionTypes = {}));
var FilterOptionInputType;
(function (FilterOptionInputType) {
  FilterOptionInputType["CHECKBOX"] = "checkbox";
  FilterOptionInputType["RADIO"] = "radio";
})(FilterOptionInputType || (FilterOptionInputType = {}));

const sallaFiltersWidgetCss = ":host{display:block}";

const SallaFiltersWidget = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.changed = createEvent(this, "changed", 7);
    this.initHeight = 195;
    this.withLoadMore = undefined;
    this.filtersData = undefined;
    this.option = undefined;
    this.isOpen = true;
    this.isShowMore = false;
    this.showMoreLabel = "عرض المزيد";
    this.showLessLabel = "عرض أقل";
  }
  connectedCallback() {
    //lets be smart and don't show 5 and more link for 8 options
    this.withLoadMore = this.option.key != 'price' && Array.isArray(this.option.values) && this.option.values.length > 8;
    salla.lang.onLoaded(() => {
      this.showMoreLabel = salla.lang.getWithDefault('common.titles.more', this.showMoreLabel);
      this.showLessLabel = salla.lang.getWithDefault('common.elements.show_less', this.showLessLabel);
    });
  }
  componentDidLoad() {
    this.widgetValues.scrollHeight < this.initHeight && (this.withLoadMore = false);
    (this.withLoadMore && this.widgetValues) && (this.widgetValues.style.maxHeight = `${this.initHeight}px`);
    this.widgetContent.style.height = `${this.widgetContent.scrollHeight}px`;
  }
  async setWidgetHeight(delay = 250) {
    this.widgetContent.removeAttribute('style');
    setTimeout(() => {
      let currentWidgetHeight = this.widgetContent.offsetHeight;
      this.widgetContent.style.height = currentWidgetHeight + 'px';
    }, delay);
  }
  /**
   * Reset selected filter options.
   */
  async reset() {
    if (this.option.type === FilterOptionTypes.RANGE) {
      this.priceRange.reset();
    }
    Array.from(this.host.querySelectorAll('input')).forEach(input => input.checked = false);
  }
  /**
   * Action to show more or less filter options.
   */
  async showMore() {
    this.isShowMore = !this.isShowMore;
    this.widgetContent.style.height = 'auto';
    this.widgetValues.style.maxHeight = this.isShowMore ? `${this.widgetValues.scrollHeight}px` : `${this.initHeight}px`;
    setTimeout(() => {
      this.widgetContent.style.height = `${this.widgetContent.scrollHeight}px`;
    }, 400); // get height after time of collapse animtion (duration-300)
  }
  /**
   * Action to toggle widget open or closed (expand/ collapse).
   */
  async toggleWidget() {
    this.isOpen = !this.isOpen;
    Helper.toggleElementClassIf(this.widgetContent, 's-filters-widget-opened', 's-filters-widget-closed', () => this.isOpen);
  }
  renderFilterOption(option) {
    if (![FilterOptionTypes.VALUES, FilterOptionTypes.MINIMUM, FilterOptionTypes.VARIANTS].includes(option.type)) {
      return '';
    }
    //@ts-ignore
    return option.values.map((filterOption, index) => {
      let value = typeof filterOption == 'number' ? filterOption : (filterOption.key || filterOption.value);
      return h("label", { class: "s-filters-label", htmlFor: `${option.key}-option-${index}` }, h("input", { id: `${option.key}-option-${index}`, name: option.key, type: option.inputType,
        //TODO:: debug more why sometimes it's not rendered as selected🤨
        checked: this.isSelectedOption(option, value), class: `s-filters-${option.inputType}`, onChange: e => this.changed.emit({ event: e, option: option, value: value }) }), this.getOptionLabel(option, filterOption));
    });
  }
  isSelectedOption(option, value) {
    if (!this.filtersData || !this.filtersData[option.key]) {
      return false;
    }
    return option.inputType === FilterOptionInputType.CHECKBOX
      ? this.filtersData[option.key].includes(value)
      : this.filtersData[option.key] == value;
  }
  getOptionLabel(option, filterOption) {
    if (option.key == 'rating') {
      //in amazon has stars & up, should we add it, to avoid those people who will come to say I selected 4 why I see 5 sars products
      return h("salla-rating-stars", { size: "small", value: filterOption });
    }
    let label = filterOption.value || 'null';
    //label+=filterOption.count ? ` (${salla.helpers.number(filterOption.count)})` : '';
    return h("span", { class: "s-filters-option-name" }, label);
  }
  render() {
    return (h(Host, { class: "s-filters-widget-container" }, h("h3", { class: "s-filters-widget-title", onClick: () => this.toggleWidget() }, h("span", null, this.option.label), h("span", { class: `s-filters-widget-plusminus ${this.isOpen ? 's-filters-widget-plusminus-active' : ''}` })), h("div", { class: "s-filters-widget-content", ref: (el) => this.widgetContent = el }, h("div", { class: "s-filters-widget-values", ref: (el) => this.widgetValues = el }, h("slot", null), this.option.type !== FilterOptionTypes.RANGE
      ? this.renderFilterOption(this.option)
      : h("salla-price-range", { onChanged: (event) => this.changed.emit(event.detail), ref: price => this.priceRange = price, filtersData: this.filtersData, option: this.option })), this.withLoadMore &&
      h("a", { class: "s-filters-widget-more", onClick: () => this.showMore() }, !this.isShowMore ? this.showMoreLabel : this.showLessLabel))));
  }
  get host() { return this; }
  static get style() { return sallaFiltersWidgetCss; }
}, [4, "salla-filters-widget", {
    "withLoadMore": [1028, "with-load-more"],
    "filtersData": [16],
    "option": [16],
    "isOpen": [32],
    "isShowMore": [32],
    "showMoreLabel": [32],
    "showLessLabel": [32],
    "setWidgetHeight": [64],
    "reset": [64],
    "showMore": [64],
    "toggleWidget": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-filters-widget", "salla-price-range", "salla-rating-stars"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-filters-widget":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaFiltersWidget);
      }
      break;
    case "salla-price-range":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "salla-rating-stars":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { FilterOptionInputType as F, SallaFiltersWidget as S, FilterOptionTypes as a, defineCustomElement as d };

//# sourceMappingURL=salla-filters-widget2.js.map