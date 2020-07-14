function criaCalculadora() {
    return {

        display: document.querySelector('.display'),



        iniciar() {
            this.cliqueBotoes();
            this.pressionarEnter();
        },

        realizarConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        pressionarEnter() {
            this.display.addEventListener('keyup', e => {
                
                if(e.keyCode === 13) {
                    this.realizarConta();
                }
            });
        },

        limparDisplay() {
            this.display.value = '';
        },

        apagarUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.limparDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagarUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizarConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },


    };
}

const calculadora = criaCalculadora();
calculadora.iniciar();
