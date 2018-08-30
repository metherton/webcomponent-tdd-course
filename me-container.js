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
      <div id="container" class="box blue">
          <me-card>
          </me-card>
      </div>
    `;

    this._$meCard = this._root.querySelector('me-card');
    this._$meCard.addEventListener('select-card', (event) => {
      console.log('button selected:' + event.detail);
      const conversation = document.createElement('me-conversation');
      conversation.setAttribute('theme', event.detail);
      conversation.classList.add(event.detail);
      const container = this._root.querySelector('#container');
      container.appendChild(conversation);
    });
  }

}

window.customElements.define('me-container', MeContainer);
