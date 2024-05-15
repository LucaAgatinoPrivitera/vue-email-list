const { createApp } = Vue

createApp({

    data() {
        return {
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail',
            result : this //se ho capito bene mettendo questo io posso chiamare il "this" nelle funzioni senza arrow, da chiedere perché mi funziona anche senza
        }
    },
    methods: {
        
        getMail() {
            axios.get(this.indirizzo).then(function(result) { //attenzione all'arrow function!!

                let datiRisposta = result.data; //questo fa riferimento al data() a riga 5, esattamente quella funzione, ma non capisco come faccia riferimento all'elemento che restituisce... posso immaginare solo che dipende dalla variabile indirizzo, quindi la funzione è scritta lì che restituisce un email casuale

                console.log("Ricevuta risposta", datiRisposta);

            });
        }
    },
    mounted() {
        console.log("App montata");

        this.getMail();
    }

}).mount('#app');