class MeStrip extends HTMLElement {

  constructor() {
    super();
    // private variables
    this.awesomest = null;
    //create a shadow root
    this._root = this.attachShadow({"mode": "open"});
  }

  connectedCallback() {
    this.awesomest = true;
    this._root.innerHTML = `
      <style>
        .box {
          width: 300px;
          height: 200px;
          @apply --box-styles;
          background: var(--box-color, #eed3d7);
        }   
        
      </style>
      <div class="box">
      </div>
    `;

  }

}

window.customElements.define('me-strip', MeStrip);
