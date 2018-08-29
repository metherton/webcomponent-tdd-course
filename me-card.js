class MeCard extends HTMLElement {

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
          width: 200px;
          height: 200px;
        }
        
        .green {
          background: #008800;
        }      
        
      </style>
      <div class="box green">
        <button type="button">Red</button>
        <button type="button">Green</button>
      </div>
    `;
  }

}

window.customElements.define('me-card', MeCard);
