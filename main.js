const { createApp } = Vue

createApp({

    data() {
        return {
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail',
            // result: 123, questo è il male :teschio //se ho capito bene mettendo questo io posso chiamare il "this" nelle funzioni senza arrow, da chiedere perché mi funziona anche senza
            mailRicevute: [],
            numeroMail : 10,
        }
    },

    methods: {
        getMail() {
            // this.mailRicevute = [];
            for (let i = 0; i < this.numeroMail; i++) {
                axios.get(this.indirizzo).then((result) => { //attenzione all'arrow function!!

                    let datiRisposta = result.data; //questo fa riferimento al data() a riga 5, esattamente quella funzione, ma non capisco come faccia riferimento all'elemento che restituisce... posso immaginare solo che dipende dalla variabile indirizzo, quindi la funzione è scritta lì che restituisce un email casuale

                    console.log("Ricevuta risposta", datiRisposta);

                    this.mailRicevute.push(datiRisposta.response);
                });

            }

        }
    },
    mounted() {
        console.log("App montata");
        window.vue = this; //con questo posso far vedere tutto dalla console.log, se metto () esegue la funzione

        this.getMail();
    }
}).mount('#app');