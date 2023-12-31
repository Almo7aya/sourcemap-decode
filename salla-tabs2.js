/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const sallaTabsCss = ".s-tabs-header{-ms-overflow-style:none;scrollbar-width:none;}.s-tabs-header::-webkit-scrollbar{display:none}";

const SallaTabs = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.backgroundColor = undefined;
    this.vertical = false;
  }
  componentWillLoad() {
    this.createGroup().then(() => {
      const [group] = this.tabGroup;
      this.selectGroup(group);
    });
  }
  onSelectedTab(event) {
    const group = this.tabGroup.find(group => group.header.id === event.detail.id);
    this.selectGroup(group);
  }
  async createGroup() {
    const tabsHeaderEl = Array.from(this.host.querySelectorAll('salla-tab-header'));
    this.tabsHeader = await Promise.all(tabsHeaderEl.map(async (el) => await el.getChild()));
    const tabsContentEl = Array.from(this.host.querySelectorAll('salla-tab-content'));
    this.tabsContent = await Promise.all(tabsContentEl.map(async (el) => await el.getChild()));
    this.tabGroup = this.tabsHeader.map(header => {
      const content = this.tabsContent.find(content => content.name === header.name);
      return {
        header: header,
        content: content
      };
    });
  }
  selectGroup(group) {
    this.tabGroup.map(g => {
      g.header.unselect();
      g.content.unselect();
    });
    group.header.selected();
    group.content.selected();
  }
  render() {
    return [
      h("div", { class: "s-tabs" }, h("div", { class: "s-tabs-header" }, h("slot", { name: "header" })), h("div", { class: "s-tabs-content-wrapper" }, h("slot", { name: "content" })))
    ];
  }
  get host() { return this; }
  static get style() { return sallaTabsCss; }
}, [4, "salla-tabs", {
    "backgroundColor": [1, "background-color"],
    "vertical": [4]
  }, [[0, "tabSelected", "onSelectedTab"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-tabs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaTabs);
      }
      break;
  } });
}

export { SallaTabs as S, defineCustomElement as d };

//# sourceMappingURL=salla-tabs2.js.map