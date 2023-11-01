(function(){
    class SuperButton extends HTMLElement{
        constructor(){
            super();
            console.log('New Super Button object has been instantiated.');
            const shadowRoot = this.attachShadow({mode: 'open'})
        }
    
        connectedCallback(){
            this.textContent = this.labelText;
        }
    
        get labelText(){
            return this.getAttribute('label-text');
        }
    
        set labelText(value){
            if(value){
                this.setAttribute('label-text', value);
            }
        }

        static get observedAttributes(){
            return ['label-text'];
        }

        disconnectedCallback() {
            // Disconnected means unmounting of the component
            console.log('Disconnected callback hook for any book keeping');
        }

        attributeChangedCallback(name, oldValue, newValue){
            switch(name){
                case 'label-text':
                    if(this.shadowRoot.querySelector('.button') && newValue ){
                        this.shadowRoot.querySelector('.btnText').textContent = newValue;
                    }
                    break;
            }
        }
    }
    
    window.customElements.define('super-button', SuperButton);
})