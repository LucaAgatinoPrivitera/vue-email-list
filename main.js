const { createApp } = Vue

createApp({

    data() {
        return {
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail',
            result: this, //se ho capito bene mettendo questo io posso chiamare il "this" nelle funzioni senza arrow, da chiedere perché mi funziona anche senza
            mailRicevute : []
        }
    },

    methods: {
        getMail() {
            for (let i = 0; i <= 10; i++) {
                axios.get(this.indirizzo).then((result) => { //attenzione all'arrow function!!

                    let datiRisposta = result.data; //questo fa riferimento al data() a riga 5, esattamente quella funzione, ma non capisco come faccia riferimento all'elemento che restituisce... posso immaginare solo che dipende dalla variabile indirizzo, quindi la funzione è scritta lì che restituisce un email casuale
    
                    console.log("Ricevuta risposta", datiRisposta);
                
                    this.mailRicevute.push(this.datiRisposta);
                    return datiRisposta;
                });
                
            }

<<<<<<< HEAD
=======
                console.log("Ricevuta risposta", datiRisposta);
                return datiRisposta

            });
>>>>>>> d29f8c3516333d23236b6ec54ff9cb33d50c2803
        }
    },
    mounted() {
        console.log("App montata");

        this.getMail();
    }

}).mount('#app');