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
      <link rel="stylesheet" href="cssreset.css" type="text/css" />
      <style>
        html, body {
          height: 100%;          
        }
      
        #container {
          overflow: hidden;
          position: fixed;
          max-width: 200px;
          height: 100%;
          left: -200px;
          z-index: 1;
          transition: transform 1s;
          width:100%;
          
        }
        .close-drawer-container {
          width: 100%;
          text-align: right;
        }
        .close-drawer {
          margin-right: 1em;
        }
        
        .close-drawer:hover {
          cursor: pointer;
        }
        
        #container.open {
          transform: translateX(200px);
        }
        .info {
          margin-top: 1em;
          margin-bottom: 1em;
          margin-left: 1em;
        }
        li {
          margin-top: 1.0em;
        }
      </style>
      <div id="container">
        <div class="close-drawer-container">
          <div id="collapse" class="close-drawer">x</div>      
        </div>
        <p id="text"></p>
        <section>$&nbsp;printenv</section>
        <ul class="info">
          <li>name=Martin&nbsp;Etherton</li>
          <li>birth=March&nbsp;4th,&nbsp;1963</li>
          <li>address=Marknesse,&nbsp;Netherlands</li>
          <li>hobbies=football,&nbsp;cycling,&nbsp;skiing</li>
        </ul>
        <section>$</section>
         
       </div>
      
    `;
    this._$container = this._root.querySelector("#container");
    this._$text = this._root.querySelector('#text'); //store important elements for later use..prefixing DOM elements with $
  //  this._render();
  }

  _render() {
 //   this._$text.innerText = '... is awesome  dfasdf asd!'; // selectively update only parts of the template which need to change
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
