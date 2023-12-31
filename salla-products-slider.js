/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { H as Helper } from './Helper.js';
import { d as defineCustomElement$c } from './salla-add-product-button2.js';
import { d as defineCustomElement$b } from './salla-button2.js';
import { d as defineCustomElement$a } from './salla-count-down2.js';
import { d as defineCustomElement$9 } from './salla-loading2.js';
import { d as defineCustomElement$8 } from './salla-modal2.js';
import { d as defineCustomElement$7 } from './salla-product-availability2.js';
import { d as defineCustomElement$6 } from './salla-product-card2.js';
import { d as defineCustomElement$5 } from './salla-progress-bar2.js';
import { d as defineCustomElement$4 } from './salla-quick-buy2.js';
import { d as defineCustomElement$3 } from './salla-slider2.js';
import { d as defineCustomElement$2 } from './salla-tel-input2.js';

const sallaProductsSliderCss = "";

const SallaProductsSlider$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.blockTitle = undefined;
    this.subTitle = undefined;
    this.sliderId = undefined;
    this.displayAllUrl = undefined;
    this.autoplay = undefined;
    this.source = undefined;
    this.sourceValue = undefined;
    this.limit = undefined;
    this.productsData = undefined;
    this.isReady = undefined;
    this.sourceValueIsValid = undefined;
    this.hasCustomComponent = undefined;
    this.apiUrl = '';
    this.parsedSourceValue = undefined;
    salla.onReady(() => {
      this.sourceValueIsValid = !!(this.getSourceValue() || this.isSourceWithoutValue());
      if (!this.sourceValueIsValid) {
        salla.logger.warn(`source-value prop is required for source [${this.getSource()}]`);
        return;
      }
      this.hasCustomComponent = !!customElements.get('custom-salla-product-card');
    });
  }
  isSourceWithoutValue() {
    return ['offers', 'latest', 'sales'].includes(this.getSource());
  }
  getItemHTML(product) {
    if (this.hasCustomComponent) {
      return h("div", { class: "s-products-slider-card" }, h("custom-salla-product-card", { product: product, source: this.getSource(), "source-value": this.getSourceValue() }));
    }
    return h("div", { class: "s-products-slider-card" }, h("salla-product-card", { "show-quantity": this.getSource() == 'landing-page', "hide-add-btn": this.getSource() == 'landing-page', "shadow-on-hover": true, product: product }));
  }
  canRender() {
    return this.sourceValueIsValid && this.isReady;
  }
  componentWillLoad() {
    if (this.source === 'json') {
      this.productsData = this.getSourceValue();
      this.isReady = true;
      return;
    }
    return salla.product.api.fetch({
      source: this.getSource(),
      source_value: this.getSourceValue(),
      limit: this.limit,
    }).then(res => {
      this.productsData = res.data;
      this.isReady = true;
      salla.event.emit('salla-products-slider::products.fetched', res.data);
    });
  }
  getSource() {
    return Helper.getProductsSource(this.source);
  }
  getSourceValue() {
    return Helper.getProductsSourceValue(this.source, this.sourceValue);
  }
  render() {
    var _a;
    if ((this.getSource() == 'related' && !salla.config.get('store.settings.product.related_products_enabled')) || !this.canRender()) {
      return;
    }
    return (h(Host, { class: "s-products-slider-wrapper" }, h("salla-slider", { class: "s-products-slider-slider", id: this.sliderId || `s-products-slider-${Math.random().toString(36).substr(2, 9)}`, "auto-play": this.autoplay, type: "carousel", "block-title": this.blockTitle, "block-subTitle": this.subTitle, "display-all-url": this.displayAllUrl }, h("div", { slot: "items" }, (_a = this.productsData) === null || _a === void 0 ? void 0 : _a.map(product => this.getItemHTML(product))))));
  }
  get host() { return this; }
  static get style() { return sallaProductsSliderCss; }
}, [0, "salla-products-slider", {
    "blockTitle": [1, "block-title"],
    "subTitle": [1, "sub-title"],
    "sliderId": [1, "slider-id"],
    "displayAllUrl": [1, "display-all-url"],
    "autoplay": [1028],
    "source": [1537],
    "sourceValue": [1, "source-value"],
    "limit": [1026],
    "productsData": [32],
    "isReady": [32],
    "sourceValueIsValid": [32],
    "hasCustomComponent": [32],
    "apiUrl": [32],
    "parsedSourceValue": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-products-slider", "salla-add-product-button", "salla-button", "salla-count-down", "salla-loading", "salla-modal", "salla-product-availability", "salla-product-card", "salla-progress-bar", "salla-quick-buy", "salla-slider", "salla-tel-input"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-products-slider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaProductsSlider$1);
      }
      break;
    case "salla-add-product-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "salla-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "salla-count-down":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "salla-loading":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "salla-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "salla-product-availability":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "salla-product-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "salla-progress-bar":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "salla-quick-buy":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "salla-slider":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "salla-tel-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const SallaProductsSlider = SallaProductsSlider$1;
const defineCustomElement = defineCustomElement$1;

export { SallaProductsSlider, defineCustomElement };

//# sourceMappingURL=salla-products-slider.js.map