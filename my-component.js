class MyComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.awesomest = true;
    this.innerHTML = `
      <style>
        p {
          color: red;
        }
      </style>
      <p>My web component</p>
    `;

  }
}

window.customElements.define('my-component', MyComponent);
