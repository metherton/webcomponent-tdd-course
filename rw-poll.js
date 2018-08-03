class RwPoll extends HTMLElement {

  constructor() {
    super();
    this._attached = false;
    this._data = null;
    // $ used for anything which appears in the DOM .. just a convention
    this._selected  = null;
    this._$question = null;
    this._$answers = null;
  }

  set data(data) {
    if (this._data === data) return;
    this._data = data;
    this._render();
  }

  set selected(index) {
    const $answer = this._$answers.querySelector(`li:nth-child(${index + 1})`);
    if ($answer !== null) {
      this._$answers.querySelectorAll('li').forEach((li) => {
        li.classList.remove('selected');
      });
      $answer.classList.add('selected');
      this._selected = index;
    }
  }

  get selected() {
    return this._selected;
  }
  get data() {
    return this._data;
  }

  connectedCallback() {
    this._attached = true;
    this.innerHTML = `
      <style>
        HTML, body {
          margin: 0px;
          padding: 0px;
          border: 0px;
        }
        
        .rw-poll-container {
           width: 30%;
           border: solid grey 1px
        }
        h3 {
          background: black;
          color: white;
          padding: 20px;
        }
        ul li {
          background: lightgray;
          list-style: none;
          list-style-type: none;
        }
        li {
          border-top: solid grey 1px;
          padding: 20px;
        }
        li.selected {
          background: green;
          color: white;
        }
        li:hover {
          cursor: pointer;
        }
        .rw-container {
          width: 500px;
          margin: auto;
          border: dotted 1px #999;
          padding: 20px;
        }
        
        .rw-container h1 {
          font-size: 20px;
          margin: 0;
        }

      </style>
      
      <div class="rw-poll-container">
        <h3 id="question"></h3>
        <ul id="answers"> </ul>
      </div>
      
    `;
    this._$question = this.querySelector('#question');
    this._$answers = this.querySelector('#answers');
    this._$answers.addEventListener('click', (event) => {
      this._$answers.querySelectorAll('li').forEach(($li, index) => {
        if ($li === event.target) {
          this.selected = index;
        }
      });
    });
    this._render();
  }

  static get observedAttributes() {
    return ['interval'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._setInterval(newValue);
  }

  _render() {
    if (this._attached && this._data !== null) {
      this._$answers.innerHTML = '';
      this._$question.innerHTML = this._data.question;
      this._data.answers.forEach((answer) => {
        const $li = document.createElement('li');
        $li.innerHTML = answer;
        this._$answers.appendChild($li);
      });
    }
  }

  disconnectedCallback() {
    clearInterval(this._interval);
  }

  _setInterval(value) {
    if (this._interval !== null) {
      clearInterval(this._interval);
    }
    if (value > 0) {
      this._interval = setInterval(() => this._render(), value);
    }
  }

}

window.customElements.define('rw-poll', RwPoll);
