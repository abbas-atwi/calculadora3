function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        // Aqui se inicia
        iniciarCalculadora() {
            this.pressEnter()
            this.cliqueButtons()
        },
        clearInput() {
            this.display.value = '';
        },

        pressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizarCalculo()
                }
            })
        },
        cliqueButtons() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnValueDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearInput()
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizarCalculo()
                }
                if (el.classList.contains('btn-del')) {
                    this.clearOneToOne();
                }
            })
        },
        btnValueDisplay(valor) {
            this.display.value += valor;
        },
        clearOneToOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizarCalculo() {
            let inputCalculo = this.display.value;
            try {
                inputCalculo = eval(inputCalculo);
                if (!inputCalculo) {
                    alert('Calculo Invalido');
                    return
                }
                this.display.value = inputCalculo
            } catch (e) {
                alert('Calculo invalido')
                return;
            }

        }
    
    }
}

const calc = new criaCalculadora();
calc.iniciarCalculadora()