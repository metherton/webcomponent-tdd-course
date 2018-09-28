class MeNetwork extends HTMLElement {

  constructor() {
    super();
    // private variables
    this._private1 = null;
    //create a shadow root
    this._root = this.attachShadow({"mode": "open"});
  }

  connectedCallback() {
    this._root.innerHTML = `
      <style>
        #container {
          display: flex;
          flex-direction: column;
        }
        #start-simulation {
          width: 100%;
          padding: 1em;
        }
        #network-path {
          width: 100%;
          background: ghostwhite;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        #packet-generator {
          width: 10%;
          background: lightgrey;
        }
        #packet-consumer {
          width: 10%;
          background: lightgrey;
        }
        #button-container {
          width: 100%;
          display:flex;
        }
        #buffer {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 2em;
        }
        #buffer div {
          width: 5%;
        }
      </style>
        
      <div id="container">
        <div id="button-container">
          <button id="start-simulation" type="button">Start Network Simulation</button>        
        </div>
        <div id="network">
          <div id="network-path">
            <div id="packet-generator">Packet generator</div>
            <div id="packet-consumer">Packet consumer</div>
          </div>
        </div>
        <div id="buffer">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    `;
    this._$startSimultionButton = document.querySelector('#start-simulation');
    this._$startSimultionButton.addEventListener('click', (event) => {

    });
    //this._$text = this._root.querySelector('#text'); //store important elements for later use..prefixing DOM elements with $
  //  this._render();
  }

  _render() {
    //this._$text.innerText = '... is awesome !'; // selectively update only parts of the template which need to change
  }

  // observe attribute changes
  static get observedAttributes() {
    return ['an-important-attribute'];
  }

  // react to attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    // do stuff
  }

  // use setters and getters to create an API for the component
  set property1(data) {
    if (this._private1 === data) return;
    this._private1 = data;
  //  this._render();
  }

  get property1() {
    return this._private1;
  }

  disconnectedCallback() {
   // do stuff
  }


}

window.customElements.define('me-network', MeNetwork);
