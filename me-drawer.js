class MeDrawer extends HTMLElement {

  constructor() {
    super();
    // private variables
    this._open = false;
    //create a shadow root
    this._root = this.attachShadow({"mode": "open"});
  }

  connectedCallback() {
    this._root.innerHTML = `
      <style>
        html, body, div {
          background-color: grey;
        }
      
        #container {
          position: fixed;
          left: -250px;
          transition: transform 0.5s ease-in;
        }
        
        #container.open {
          transform: translateX(250px);
        }
      </style>
      <div id="container">
        <p id="text">ME Drawer...</p>    
       </div>
      
    `;
    this._$container = this._root.querySelector("#container");
    this._$text = this._root.querySelector('#text'); //store important elements for later use..prefixing DOM elements with $
    //  this._render();
  }

  _render() {
    this._$text.innerText = '... is awesome !'; // selectively update only parts of the template which need to change
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
  set open(data) {
    if (this._open === data) return;
    this._open = data;
    if (this._open) {
      this._$container.classList.add("open");
    } else {
      this._$container.classList.remove("open");
    }
    this._render();
  }

  get open() {
    return this._open;
  }

  disconnectedCallback() {
    // do stuff
  }


}

window.customElements.define('me-drawer', MeDrawer);
