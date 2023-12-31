/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as PendingOrdersIcon } from './cart.js';
import { d as defineCustomElement$6 } from './salla-button2.js';
import { d as defineCustomElement$5 } from './salla-loading2.js';
import { d as defineCustomElement$4 } from './salla-modal2.js';
import { d as defineCustomElement$3 } from './salla-product-availability2.js';
import { d as defineCustomElement$2 } from './salla-quick-buy2.js';
import { d as defineCustomElement$1 } from './salla-tel-input2.js';

const sallaAddProductButtonCss = ":host{display:block}salla-add-product-button[width=wide]{width:100%}";

const SallaAddProductButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.success = createEvent(this, "success", 7);
    this.failed = createEvent(this, "failed", 7);
    this.hostAttributes = {};
    this.channels = undefined;
    this.subscribedOptions = undefined;
    this.quickBuy = undefined;
    this.quantity = undefined;
    this.donatingAmount = undefined;
    this.notifyOptionsAvailability = undefined;
    this.productId = undefined;
    this.supportStickyBar = undefined;
    this.productStatus = 'sale';
    this.productType = 'product';
    this.hasOutOfStockOption = undefined;
    this.hasSubscribedOptions = undefined;
    this.selectedOptions = [];
    this.showQuickBuy = undefined;
    salla.onReady(() => {
      this.showQuickBuy = this.quickBuy && !!salla.config.get('store.settings.buy_now') && this.productStatus == 'sale' && this.productType !== 'booking';
    });
  }
  getLabel() {
    if (this.productStatus === 'sale' && this.supportStickyBar && window.innerWidth <= 768 && this.showQuickBuy) {
      return PendingOrdersIcon;
    }
    if (this.productStatus === 'sale' && this.productType === 'booking') {
      return salla.lang.get('pages.cart.book_now');
    }
    if (this.productStatus === 'sale') {
      return salla.lang.get('pages.cart.add_to_cart');
    }
    if (this.productType !== 'donating') {
      return salla.lang.get('pages.products.out_of_stock');
    }
    // donating
    return salla.lang.get('pages.products.donation_exceed');
  }
  addProductToCart(event) {
    var _a;
    if (this.productType === 'booking') {
      event.preventDefault();
      return this.addBookingProduct();
    }
    // we want to ignore the click action when the type of button is submit a form
    if (this.hostAttributes.type === 'submit') {
      return false;
    }
    event.preventDefault();
    (_a = this.btn) === null || _a === void 0 ? void 0 : _a.disable();
    /**
     * by default the quick add is just an alias for add item function
     * but its work only when the id is the only value is passed via the object
     * so we will filter the object entities to remove null and zero values in case we don't want the normal add item action
     */
    const data = Object.entries({
      id: this.productId,
      donation_amount: this.donatingAmount,
      quantity: this.quantity,
      endpoint: 'quickAdd'
    }).reduce((a, [k, v]) => (v ? (a[k] = v, a) : a), {});
    return salla.cart.addItem(data)
      .then(response => {
      var _a;
      this.selectedOptions = [];
      (_a = this.btn) === null || _a === void 0 ? void 0 : _a.enable();
      this.success.emit(response);
    })
      .catch(error => { var _a; this.failed.emit(error); (_a = this.btn) === null || _a === void 0 ? void 0 : _a.enable(); });
  }
  addBookingProduct() {
    if (salla.config.isGuest()) {
      salla.auth.api.setAfterLoginEvent('booking::add', this.productId);
      salla.event.dispatch('login::open');
      return;
    }
    return salla.booking.add(this.productId)
      .then(resp => this.success.emit(resp))
      .catch(error => this.failed.emit(error));
  }
  getBtnAttributes() {
    for (let i = 0; i < this.host.attributes.length; i++) {
      if (!['id', 'class'].includes(this.host.attributes[i].name)) {
        this.hostAttributes[this.host.attributes[i].name] = this.host.attributes[i].value;
      }
    }
    return this.hostAttributes;
  }
  getQuickBuyBtnAttributes() {
    return Object.assign(Object.assign({}, this.getBtnAttributes()), { type: this.supportStickyBar && window.innerWidth <= 768 ? 'plain' : this.productType == 'donating' ? 'donate' : 'buy' });
  }
  componentWillLoad() {
    var _a;
    this.passedLabel = this.host.innerHTML.replace('<!---->', '').trim();
    if (!!this.passedLabel && window.innerWidth >= 768) {
      (_a = this.btn) === null || _a === void 0 ? void 0 : _a.setText(this.passedLabel);
      return;
    }
    if (this.host.hasAttribute('type') && this.host.getAttribute('type') === 'submit' && this.supportStickyBar) {
      window.addEventListener('resize', () => {
        var _a, _b;
        if (window.innerWidth >= 768 && !!this.passedLabel) {
          (_a = this.btn) === null || _a === void 0 ? void 0 : _a.setText(this.passedLabel);
        }
        else {
          (_b = this.btn) === null || _b === void 0 ? void 0 : _b.setText(this.getLabel());
        }
      });
    }
  }
  render() {
    var _a;
    //TODO:: find a better fix, this is a patch for issue that duplicates the buttons more than twice @see the screenshot inside this folder
    if ((_a = this.host.closest('.swiper-slide')) === null || _a === void 0 ? void 0 : _a.classList.contains('swiper-slide-duplicate')) {
      return '';
    }
    if (this.hasSubscribedOptions) {
      return h(Host, null, h("salla-product-availability", Object.assign({}, this.getBtnAttributes(), { "is-subscribed": true }), h("span", { class: "s-hidden" }, h("slot", null))));
    }
    if ((this.productStatus === 'out-and-notify' && this.channels) || this.hasOutOfStockOption) {
      return h(Host, null, h("salla-product-availability", Object.assign({}, this.getBtnAttributes()), h("span", { class: "s-hidden" }, h("slot", null))));
    }
    return h(Host, { class: {
        's-add-product-button-with-quick-buy': this.showQuickBuy,
        's-add-product-button-with-sticky-bar': this.supportStickyBar
      } }, h("salla-button", Object.assign({ color: this.productStatus === 'sale' ? 'primary' : 'light', type: "button", fill: this.productStatus === 'sale' ? 'solid' : 'outline', ref: el => this.btn = el, onClick: event => this.addProductToCart(event), disabled: this.productStatus !== 'sale' }, this.getBtnAttributes(), { "loader-position": "center" }), h("slot", null)), this.showQuickBuy ? h("salla-quick-buy", Object.assign({}, this.getQuickBuyBtnAttributes())) : '');
  }
  componentDidLoad() {
    if (!this.notifyOptionsAvailability) {
      return;
    }
    salla.event.on('product-options::change', async (data) => {
      var _a, _b;
      if (!['thumbnail', 'color', 'single-option'].includes(data.option.type)) {
        return;
      }
      this.hasSubscribedOptions = false;
      this.selectedOptions = await ((_a = document.querySelector(`salla-product-options[product-id="${this.productId}"]`)) === null || _a === void 0 ? void 0 : _a.getSelectedOptions());
      this.hasOutOfStockOption = await ((_b = document.querySelector(`salla-product-options[product-id="${this.productId}"]`)) === null || _b === void 0 ? void 0 : _b.hasOutOfStockOption());
      let subscribedDetails = salla.storage.get(`product-${this.productId}-subscribed-options`);
      if (!subscribedDetails && !this.subscribedOptions || !this.hasOutOfStockOption) {
        return;
      }
      if (salla.config.isGuest()) {
        const parsedSubscribedDetails = subscribedDetails ? subscribedDetails.map(ids => ids.split(',').map(id => parseInt(id))) : [];
        this.hasSubscribedOptions = parsedSubscribedDetails.length > 0 && parsedSubscribedDetails.some(ids => ids.every(id => this.selectedOptions.some(option => option.id === id)));
      }
      else {
        this.hasSubscribedOptions = this.subscribedOptions && this.subscribedOptions !== 'null' && this.subscribedOptions !== '[]' ? JSON.parse(this.subscribedOptions).some(ids => ids.every(id => this.selectedOptions.some(option => option.id === id))) : false;
      }
    });
  }
  componentDidRender() {
    var _a, _b;
    //if label not passed, get label
    if (!!this.passedLabel && (!this.supportStickyBar || window.innerWidth >= 768)) {
      // if passed label, set it
      (_a = this.btn) === null || _a === void 0 ? void 0 : _a.setText(this.passedLabel);
      return;
    }
    (_b = this.btn) === null || _b === void 0 ? void 0 : _b.setText(this.getLabel());
    salla.lang.onLoaded(() => { var _a; return (_a = this.btn) === null || _a === void 0 ? void 0 : _a.setText(this.getLabel()); });
  }
  get host() { return this; }
  static get style() { return sallaAddProductButtonCss; }
}, [4, "salla-add-product-button", {
    "channels": [513],
    "subscribedOptions": [1, "subscribed-options"],
    "quickBuy": [1540, "quick-buy"],
    "quantity": [514],
    "donatingAmount": [514, "donating-amount"],
    "notifyOptionsAvailability": [516, "notify-options-availability"],
    "productId": [520, "product-id"],
    "supportStickyBar": [516, "support-sticky-bar"],
    "productStatus": [513, "product-status"],
    "productType": [513, "product-type"],
    "hasOutOfStockOption": [32],
    "hasSubscribedOptions": [32],
    "selectedOptions": [32],
    "showQuickBuy": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-add-product-button", "salla-button", "salla-loading", "salla-modal", "salla-product-availability", "salla-quick-buy", "salla-tel-input"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-add-product-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaAddProductButton);
      }
      break;
    case "salla-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "salla-loading":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "salla-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "salla-product-availability":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "salla-quick-buy":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "salla-tel-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { SallaAddProductButton as S, defineCustomElement as d };

//# sourceMappingURL=salla-add-product-button2.js.map