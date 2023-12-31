/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const sallaPriceRangeCss = ":host{display:block}.rtl .rtl-range-slider,[dir=rtl] .rtl-range-slider{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.rtl .rtl-range-numbers,[dir=rtl] .rtl-range-numbers{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.rtl .form-select,.rtl select,[dir=rtl] .form-select,[dir=rtl] select{background-position:left 0.5rem center;padding-right:12px}.rtl .menu-divide li:not(:last-child):after,[dir=rtl] .menu-divide li:not(:last-child):after{left:0;right:auto}input[type=range]::-webkit-slider-thumb{pointer-events:all;width:24px;height:24px;-webkit-appearance:none}[type=checkbox]:checked{background-size:80%}";

const SallaPriceRange = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.changed = createEvent(this, "changed", 7);
    this.filterValues = [];
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.option = undefined;
    this.filtersData = undefined;
    this.min = 0;
    this.max = 10000;
    this.priceOptions = undefined;
    this.moreThanLabel = "أكثر من";
    this.lessThanLabel = "أقل من";
    this.toLabel = "الى";
    this.fromLabel = "من";
  }
  connectedCallback() {
    var _a;
    if (this.filtersData && ((_a = this.filtersData) === null || _a === void 0 ? void 0 : _a.price)) {
      this.minPrice = this.filtersData.price.min;
      this.maxPrice = this.filtersData.price.max;
    }
    salla.lang.onLoaded(() => {
      this.moreThanLabel = salla.lang.getWithDefault('common.elements.more_than', this.moreThanLabel);
      this.lessThanLabel = salla.lang.getWithDefault('common.elements.less_than', this.lessThanLabel);
      this.toLabel = salla.lang.getWithDefault('common.elements.to', this.toLabel);
      this.fromLabel = salla.lang.getWithDefault('common.elements.from', this.fromLabel);
    });
    //no need to show one option only
    if (this.option.values.length == 1) {
      return;
    }
    //here we may receive too many prices, we will group all inputs to
    if (this.option.values.length <= 5) {
      this.filterValues = this.option.values;
      return;
    }
    const chunkSize = Math.ceil(this.option.values.length / 5);
    for (let i = 0; i < this.option.values.length; i += chunkSize) {
      this.filterValues.push(this.option.values
        .slice(i, i + chunkSize)
        .reduce((final, currentValue) => {
        final.to = currentValue.to;
        final.count += currentValue.count;
        return final;
      }));
      // do whatever
    }
  }
  /**
   * reset the price range inputs
   */
  async reset() {
    //@ts-ignore
    this.minInput.value = null;
    this.maxInput.value = null;
  }
  getPriceLabel(filterValue) {
    // @ts-ignore
    if (isNaN(filterValue.from) || filterValue.from < 1) {
      return `${this.lessThanLabel} ${salla.money(filterValue.to)}`;
    }
    // @ts-ignore
    if (isNaN(filterValue.to) || filterValue.to < 1) {
      return `${this.moreThanLabel} ${salla.money(filterValue.from)}`;
    }
    return `${salla.money(filterValue.from)} ${this.toLabel} ${salla.money(filterValue.to)}`;
  }
  handleMinMaxPrice(event, value) {
    //todo:: cover when from is star
    this.minPrice = value.from;
    this.maxPrice = value.to != '*' ? value.to : null;
    this.changedEventHandler(event);
  }
  async changedEventHandler(event, isMin = false) {
    salla.helpers.inputDigitsOnly(event.target);
    let value = event ? event.target.value * 1 : null;
    if (isMin) {
      this.minInputValidation(value);
    }
    else {
      this.maxInputValidation(value);
    }
    this.isReady && this.changed.emit({
      event: event,
      option: this.option,
      value: { max: this.maxPrice, min: this.minPrice }
    });
  }
  minInputValidation(value) {
    if (value && (value > this.max || value > this.maxPrice)) {
      // this.minPrice = this.maxPrice;
      return;
    }
    if (value < this.min) {
      this.minPrice = this.min;
      return;
    }
    if (value) {
      this.minPrice = value;
    }
  }
  maxInputValidation(value) {
    if (value && (value < this.min || value < this.minPrice)) {
      // this.maxPrice = this.minPrice;
      return;
    }
    if (value > this.max) {
      this.maxPrice = this.max;
      return;
    }
    if (value) {
      this.maxPrice = value;
    }
  }
  isChecked(filterValue) {
    if (!this.minPrice && !this.maxPrice) {
      return false;
    }
    //1 filterValue.from zero or * and this.minPrice not set or zero
    //2 filterValue.from == this.minPrice
    //@ts-ignore
    let isMinEqual = ((filterValue.from < 1 || filterValue.from == '*') && this.minPrice == 0) || filterValue.from == this.minPrice;
    //1 filterValue.to == "*" or null
    //2 filterValue.to == this.max
    let isMaxEqual = filterValue.to == '*' || !filterValue.to || filterValue.to == this.maxPrice;
    return isMinEqual && isMaxEqual;
  }
  render() {
    return (h(Host, null, this.filterValues.map((filterValue, index) => {
      return h("label", { class: "s-filters-label", htmlFor: `${this.option.key}-${index}` }, h("input", { id: `${this.option.key}-${index}`, name: "price", type: "radio", checked: this.isChecked(filterValue), class: "s-filters-radio", onChange: e => this.handleMinMaxPrice(e, filterValue) }), this.getPriceLabel(filterValue));
    }), h("div", { class: "flex justify-center items-center" }, h("div", { class: "relative max-w-xl w-full" }, h("div", { class: "s-price-range-inputs" }, h("div", { class: "s-price-range-relative" }, h("div", { class: "s-price-range-currency" }, " ", salla.config.currency().symbol), h("input", { type: "number", maxlength: "5", ref: el => this.minInput = el, onInput: (event) => this.changedEventHandler(event, true), value: this.minPrice, placeholder: this.fromLabel, class: "s-price-range-number-input" })), h("div", { class: "s-price-range-gray-text" }, " -"), h("div", { class: "s-price-range-relative" }, h("div", { class: "s-price-range-currency" }, " ", salla.config.currency().symbol), h("input", { type: "number", maxlength: "5", placeholder: this.toLabel, ref: el => this.maxInput = el, onInput: (event) => this.changedEventHandler(event), value: this.maxPrice, class: "s-price-range-number-input", "aria-describedby": "price-currency" })))))));
  }
  componentDidLoad() {
    this.isReady = true;
  }
  static get style() { return sallaPriceRangeCss; }
}, [0, "salla-price-range", {
    "minPrice": [1032, "min-price"],
    "maxPrice": [1032, "max-price"],
    "option": [16],
    "filtersData": [520, "filters-data"],
    "min": [32],
    "max": [32],
    "priceOptions": [32],
    "moreThanLabel": [32],
    "lessThanLabel": [32],
    "toLabel": [32],
    "fromLabel": [32],
    "reset": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-price-range"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-price-range":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaPriceRange);
      }
      break;
  } });
}

export { SallaPriceRange as S, defineCustomElement as d };

//# sourceMappingURL=salla-price-range2.js.map