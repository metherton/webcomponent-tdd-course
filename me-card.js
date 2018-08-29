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
        <button id="redBtn" type="button">Red</button>
        <button id="yellowBtn" type="button">Yellow</button>
        <button id="baseBtn" type="button">Base</button>
      </div>
    `;

    this._$redButton = this._root.querySelector("#redBtn");
    this._$yellowButton = this._root.querySelector("#yellowBtn");
    this._$baseButton = this._root.querySelector("#baseBtn");

    this._$redButton.addEventListener('click', (event) => {
      this.dispatchEvent(new CustomEvent('select-card', {detail: 'red'}));
    });
    this._$yellowButton.addEventListener('click', (event) => {
      this.dispatchEvent(new CustomEvent('select-card', {detail: 'yellow'}));
    });
    this._$baseButton.addEventListener('click', (event) => {
      this.dispatchEvent(new CustomEvent('select-card', {detail: 'base'}));
    });


  }

}

window.customElements.define('me-card', MeCard);
