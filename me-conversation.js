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
          height: 400px;
          background: #cc0000;
          float: left;
        }
        
        me-strip {
          --box-color: orange;
          --box-styles {
            background: #eed3d7;
            border: 3px solid brown;
          }
        }
                  
        :host([theme="yellow"]) .box {
          width: 300px;
          height: 600px;
          background: #f0ad4e;
          float: left;
        }
      </style>
      <div class="box">
        <me-strip></me-strip>
      </div>
    `;


  }

}

window.customElements.define('me-conversation', MeConversation);
