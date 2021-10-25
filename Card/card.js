class Card extends HTMLElement{

    constructor(){
        super();

        this.firstName = 'Maryvon'
        this.lastName = 'MICHEL'

        this.attachShadow({ mode: 'open' });

    }

    static get observedAttributes(){
        return ['first-name']
    }

    attributeChangedCallback(name, oldValue, newValue){
        this.render()
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
            <img  src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
            
            <h1>${this.firstName}  ${this.lastName}<h1>

        `;   
    }

   set firstName(val){
        if(val){
           this.setAttribute('first-name', val)
        }
        else{
            this.removeAttribute('first-name')
        }
    }
   
    get firstName(){
        return this.getAttribute('first-name')
    }
}

customElements.define('profile-card', Card);