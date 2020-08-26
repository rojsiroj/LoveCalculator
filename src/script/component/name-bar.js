class NameBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        let yourName = this.shadowDOM.querySelector("#yourName").value
        let crushName = this.shadowDOM.querySelector("#crushName").value;

        return {yourName, crushName};
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
           .calc-container {
               max-width: 100%;
               width: 50%;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
               padding: 16px;
               border-radius: 5px;
               display: flex;
               position: absolute;
               top: 30%;
               left: 25%;
               background-color: white;
           }
          
           .calc-container > input {
               width: 75%;
               padding: 16px;
               border: 0;
               border-bottom: 1px solid indianred;
               font-weight: bold;
           }
          
           .calc-container > input:focus {
               outline: 0;
               border-bottom: 2px solid indianred;
           }
          
           .calc-container > input:focus::placeholder {
               font-weight: bold;
           }
          
           .calc-container >  input::placeholder {
               color: indianred;
               font-weight: normal;
           }
          
           .calc-container > button {
               width: 23%;
               cursor: pointer;
               margin-left: auto;
               padding: 16px;
               background-color: indianred;
               color: white;
               border: 0;
               text-transform: uppercase;
           }
           
           .name-input, #calculateButtonElement{
                margin-left: 2%;
           }
           
            @media screen and (max-width: 1024px){
               .calc-container {
                   flex-direction: column;
                   position: absolute;
                   top: 20%;
                   left: 10%;
                   width: 80%;
               }
          
               .calc-container > input {
                   width: 90%;
                   margin-bottom: 12px;
               }
          
               .calc-container > button {
                   margin: 5% 0 3% 0;
                   width: 95%;
               }
           }
          
           @media screen and (max-width: 550px){
               .calc-container {
                   flex-direction: column;
                   position: absolute;
                   top: 20%;
                   width: 80%;
               }
          
               .calc-container > input {
                   width: 90%;
                   margin-bottom: 12px;
               }
          
               .calc-container > button {
                   margin: 10% 0 3% 0;
                   width: 100%;
               }
           }
       </style>
       <div id="calc-container" class="calc-container">
           <input placeholder="Your name" id="yourName" type="text" class="name-input">
           <input placeholder="Your crush name" id="crushName" type="text" class="name-input">
           <button id="calculateButtonElement" type="submit">Calculate your love!</button>
       </div>
       `;

        this.shadowDOM.querySelector("#calculateButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("name-bar", NameBar);