const { createApp } = Vue

createApp({

    data() {
        return {
            mail: null,
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail',
            result : this
        }
    },
    methods: {
        
        getMail() {
            axios.get(this.indirizzo).then((result) => { //attenzione all'arrow function!!

                let datiRisposta = result.data;

                console.log("Ricevuta risposta", datiRisposta);

                this.mail = datiRisposta.mail;

            });
        }
    },
    mounted() {
        console.log("App montata");

        this.getMail();
    }

}).mount('#app');