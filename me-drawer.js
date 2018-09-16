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
          height: 100%;          
        }
      
        #container {
          overflow: hidden;
          position: fixed;
          max-width: 600px;
          height: 100%;
          left: -600px;
          z-index: 1;
          transition: transform 1s;
          width:100%;
          text-align: right;
        }
        .close-drawer {
          margin-right: 1em;
        }
        
        .close-drawer:hover {
          cursor: pointer;
        }
        
        #container.open {
          transform: translateX(600px);
        }
      </style>
      <div id="container">
        <div id="collapse" class="close-drawer">x</div>
        <p id="text">ME Drawer...</p>    
       </div>
      
    `;
    this._$container = this._root.querySelector("#container");
    this._$text = this._root.querySelector('#text'); //store important elements for later use..prefixing DOM elements with $
  //  this._render();
  }

  _render() {
    this._$text.innerText = '... is awesome  dfasdf asdfad asdf asdf asdf asdf!'; // selectively update only parts of the template which need to change
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
