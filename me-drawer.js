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
          position: fixed;
          left: -600px;
          max-width: 600px;
          transition: transform 0.5s ease-in;
        }
        
        #container.open {
          transform: translateX(600px);
        }
      </style>
      <div id="container">
        <p id="text"></p>
        <section>$&nbsp;printenv</section>
        <ul class="info">
          <li>name=Martin&nbsp;Etherton</li>
          <li>birth=March&nbsp;4th,&nbsp;1963</li>
          <li>address=Marknesse,&nbsp;Netherlands</li>
          <li>hobbies=football,&nbsp;cycling,&nbsp;skiing</li>
        </ul>
        <section>$</section>  
       </div>`;
    this._$container = this._root.querySelector("#container");
    this._$text = this._root.querySelector('#text'); //store important elements for later use..prefixing DOM elements with $
    //  this._render();
  }

  _render() {
    this._$text.innerText = ''; // selectively update only parts of the template which need to change
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
