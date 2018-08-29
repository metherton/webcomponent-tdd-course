class MeContainer extends HTMLElement {

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
          width: 600px;
          height: 300px;
        }
        
        .blue {
          background: #528CE0;
        }      
        
      </style>
      <div class="box blue">
          <me-card>
          </me-card>
      </div>
    `;
  }

}

window.customElements.define('me-container', MeContainer);
