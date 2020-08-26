const LOGO = 'assets/images/logo.gif';
const ALT = "Love Calc.";
const createImg = (id, src, alt) => {
    const div = document.createElement('div');
    div.className = id+"wrap";

    const img = document.createElement('img');
    img.src = src;
    img.id = id;
    img.alt = alt;

    div.appendChild(img);
    return div;
}

class LogoBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        this.shadowDOM.appendChild(createImg('logo', LOGO, ALT));
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
            }
            :host {
               display: block;
               width: 100%;
               background-color: white;
               color: red;
            }
            .logowrap{
                position:absolute;
                max-width:50%;
                max-height:50%;
                top:30%;
                left:50%;
                overflow:visible;
            }
            #logo{
                position:relative;
                max-width:100%;
                max-height:100%;
                margin-top:-50%;
                margin-left:-50%;
            }
            
            @media screen and (max-width: 1024px){
                .logowrap{
                    position:absolute;
                    max-width:50%;
                    max-height:50%;
                    top:20%;
                    left:50%;
                    overflow:visible;
                }
                #logo{
                    position:relative;
                    max-width:100%;
                    max-height:100%;
                }
           }
            
           @media screen and (max-width: 550px){
                .logowrap{
                    position:absolute;
                    max-width:50%;
                    max-height:50%;
                    top:15%;
                    left:50%;
                    overflow:visible;
                }
                #logo{
                    position:relative;
                    max-width:100%;
                    max-height:100%;
                }
           }
        </style>`;
    }
}

customElements.define("logo-bar", LogoBar);