class MeConversation extends HTMLElement {

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
        :host([theme="red"]) .box {
          width: 300px;
          height: 200px;
          background: #cc0000;
          float: left;
        }
      </style>
      <div class="box">
      </div>
    `;


  }

}

window.customElements.define('me-conversation', MeConversation);
