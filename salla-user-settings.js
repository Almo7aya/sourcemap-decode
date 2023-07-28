/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './salla-button2.js';
import { d as defineCustomElement$4 } from './salla-list-tile2.js';
import { d as defineCustomElement$3 } from './salla-loading2.js';
import { d as defineCustomElement$2 } from './salla-modal2.js';

const Bullhorn = `<!-- Generated by IcoMoon.io -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>bullhorn</title>
<path d="M30.129 0.264c-0.339-0.252-0.776-0.328-1.179-0.208l-24.951 7.485v-0.216c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333v14.667c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-0.112l3.448 1.207-0.595 1.704c-0.321 1.019-0.227 2.103 0.267 3.051s1.327 1.647 2.345 1.968l6.359 2.004c0.399 0.127 0.804 0.187 1.201 0.187 1.699 0 3.277-1.091 3.812-2.785l0.423-1.295 7.633 2.672c0.143 0.049 0.292 0.075 0.44 0.075 0.273 0 0.543-0.084 0.772-0.247 0.352-0.249 0.561-0.655 0.561-1.087v-28c0-0.421-0.199-0.819-0.537-1.069zM18.297 28.4c-0.221 0.701-0.973 1.089-1.673 0.871l-6.357-2.004c-0.34-0.108-0.617-0.34-0.781-0.656s-0.196-0.676-0.101-0.977l0.581-1.665 8.777 3.072zM28 27.453l-24-8.4v-8.728l24-7.2z"></path>
</svg>
`;

const UserOff = `<!-- Generated by IcoMoon.io -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>user-off</title>
<path d="M10.837 19.309c-4.963 1.284-8.171 4.303-8.171 7.691v3.667c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-3.667c0-2.101 2.48-4.155 6.172-5.109 0.713-0.184 1.141-0.912 0.957-1.625-0.184-0.711-0.908-1.137-1.625-0.956zM12.859 3.715c0.933-0.685 2.020-1.048 3.141-1.048 2.941 0 5.333 2.392 5.333 5.333 0 1.121-0.363 2.208-1.048 3.141-0.436 0.593-0.308 1.428 0.284 1.864 0.239 0.175 0.515 0.259 0.788 0.259 0.411 0 0.815-0.188 1.076-0.544 1.025-1.393 1.567-3.025 1.567-4.72 0-4.412-3.588-8-8-8-1.695 0-3.327 0.541-4.721 1.567-0.592 0.435-0.72 1.269-0.284 1.864 0.436 0.593 1.269 0.721 1.864 0.284zM31.609 29.724l-29.333-29.333c-0.521-0.521-1.364-0.521-1.885 0s-0.521 1.364 0 1.885l29.333 29.333c0.26 0.26 0.601 0.391 0.943 0.391s0.683-0.131 0.943-0.391c0.521-0.521 0.521-1.364 0-1.885z"></path>
</svg>
`;

const sallaUserSettingsCss = "";

const SallaUserSettings$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.deactivateAccount = salla.lang.get('pages.profile.deactivate_account');
    this.promotionalMsgs = salla.lang.get('pages.profile.promotional_messages');
    this.deactivateDesc = salla.lang.get('pages.profile.deactivate_account_description');
    this.promotionalMsgsDesc = salla.lang.get('pages.profile.promotional_messages_description');
    this.sorryForLeavingText = salla.lang.get('pages.profile.warning_for_deactivate');
    this.warningText = salla.lang.get('pages.profile.sorry_for_leaving');
    this.keepAccount = salla.lang.get('pages.profile.keep_account');
    this.buttonLoading = false;
    this.isNotifiable = false;
    salla.lang.onLoaded(() => {
      this.deactivateAccount = salla.lang.get('pages.profile.deactivate_account');
      this.promotionalMsgs = salla.lang.get('pages.profile.promotional_messages');
      this.deactivateDesc = salla.lang.get('pages.profile.deactivate_account_description');
      this.promotionalMsgsDesc = salla.lang.get('pages.profile.promotional_messages_description');
      this.warningText = salla.lang.get('pages.profile.warning_for_deactivate');
      this.sorryForLeavingText = salla.lang.get('pages.profile.sorry_for_leaving');
      this.keepAccount = salla.lang.get('pages.profile.keep_account');
    });
  }
  toggleNotification(event) {
    salla.profile.updateSettings({ is_notifiable: event.target.checked });
  }
  capitalizeText(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  openDeactivateModal() {
    this.confirmationModal.setTitle(this.capitalizeText(this.deactivateAccount));
    this.confirmationModal.open();
  }
  async deleteAccount() {
    await salla.profile.delete().finally(() => this.confirmationModal.close());
  }
  render() {
    return (h(Host, { class: "s-user-settings-wrapper" }, h("div", { class: "s-user-settings-section" }, h("salla-list-tile", null, h("div", { slot: "icon", class: "s-user-settings-section-icon" }, h("span", { innerHTML: Bullhorn })), h("div", { slot: "title", class: "s-user-settings-section-title" }, this.capitalizeText(this.promotionalMsgs)), h("div", { slot: "subtitle", class: "s-user-settings-section-subtitle" }, this.capitalizeText(this.promotionalMsgsDesc)), h("div", { slot: 'action', class: "s-user-settings-section-action" }, h("label", { class: "s-toggle" }, h("input", { class: "s-toggle-input", checked: this.isNotifiable, onChange: (e) => this.toggleNotification(e), type: "checkbox" }), h("div", { class: "s-toggle-switcher" }))))), h("div", { class: "s-user-settings-section s-user-settings-section-deactivate-user" }, h("salla-list-tile", null, h("div", { slot: "icon", class: "s-user-settings-section-icon" }, h("span", { innerHTML: UserOff })), h("div", { slot: "title", class: "s-user-settings-section-title" }, this.capitalizeText(this.deactivateAccount)), h("div", { slot: "subtitle", class: "s-user-settings-section-subtitle" }, this.capitalizeText(this.deactivateDesc)), h("div", { slot: 'action', class: "s-user-settings-section-action" }, h("salla-button", { fill: "outline", color: "danger", shape: "btn", size: "medium", width: "normal", onClick: () => this.openDeactivateModal() }, this.capitalizeText(this.deactivateAccount))))), h("salla-modal", { width: "sm", subTitle: this.capitalizeText(this.sorryForLeavingText), ref: modal => this.confirmationModal = modal }, h("span", { slot: 'icon', class: "s-user-settings-confirmation-icon", innerHTML: UserOff }), h("div", { class: "s-user-settings-confirmation" }, h("div", { class: "s-user-settings-confirmation-warning" }, this.capitalizeText(this.warningText)), h("div", { class: "s-user-settings-confirmation-actions" }, h("salla-button", { width: "wide", onClick: () => this.confirmationModal.close() }, this.capitalizeText(this.keepAccount)), h("salla-button", { fill: 'outline', loading: this.buttonLoading, width: "wide", onClick: () => this.deleteAccount() }, this.capitalizeText(this.deactivateAccount)))))));
  }
  static get style() { return sallaUserSettingsCss; }
}, [0, "salla-user-settings", {
    "isNotifiable": [516, "is-notifiable"],
    "deactivateAccount": [32],
    "promotionalMsgs": [32],
    "deactivateDesc": [32],
    "promotionalMsgsDesc": [32],
    "sorryForLeavingText": [32],
    "warningText": [32],
    "keepAccount": [32],
    "buttonLoading": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-user-settings", "salla-button", "salla-list-tile", "salla-loading", "salla-modal"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-user-settings":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaUserSettings$1);
      }
      break;
    case "salla-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "salla-list-tile":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "salla-loading":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "salla-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const SallaUserSettings = SallaUserSettings$1;
const defineCustomElement = defineCustomElement$1;

export { SallaUserSettings, defineCustomElement };

//# sourceMappingURL=salla-user-settings.js.map