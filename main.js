//* Instanza VUE JS
const { createApp } = Vue;
createApp({
  data() {
    return {
      genEmails: [],
    };
  },

  //* Methods
  methods: {
    generateRandomEmails() {
      //TODO: Ciclo per creare 10 email random.
      for (let i = 0; i < 10; i++) {
        //TODO: Con axios recupero l'API oggetto.data.response(email)
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            //TODO: Creo una variabile della singola email
            const randomEmail = response.data.response;
            //TODO: Pusho le singole email dentro l'array
            this.genEmails.push(randomEmail);
          });
      }
    },
  },
  mounted() {
    //TODO: su mounted evoco il metodo per attivarlo!
    this.generateRandomEmails();
  },
}).mount("#app");

//! come leggere axios
/* axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        console.log(response.data.response);
      });
    console.log(axios); */
