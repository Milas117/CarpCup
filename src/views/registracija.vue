<template>
  <div>
    <div class="row">
      <div class="col">
        <h1 class="text-center mb-5">Registracija</h1>
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form @submit.prevent="signup">
          <div v-if="errorMessage" class="alert alert-danger">
            <strong>Ups!</strong>
            {{ errorMessage }}
          </div>
          <div class="form-group">
            <label for="emailField">Email adresa</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="emailField"
              aria-describedby="emailHelp"
              placeholder="Unesite Email"
            />
          </div>
          <div class="form-group">
            <label for="passwordField">Lozinka</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="passwordField"
              placeholder="Lozinka"
            />
          </div>
          <div class="form-group">
            <label for="confirmPasswordField">Potvrda lozinke</label>
            <input
              v-model="password2"
              type="password"
              class="form-control"
              id="confirmPasswordField"
              placeholder="Potvrda lozinke"
            />
          </div>

   <div class="form-group">
            <label for="Ime">Ime</label>
            <input
              v-model="ime"
              type="ime"
              class="form-control"
              id="ime"
              placeholder="Unesite ime"
            />
          </div>

             <div class="form-group">
            <label for="Prezime">Prezime</label>
            <input
              v-model="prezime"
              type="prezime"
              class="form-control"
              id="prezime"
              placeholder="Unesite prezime"
            />
          </div>


          <button type="submit" class="btn btn-primary mt-5">Potvrdi</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import store from "../store";
export default {
  data() {
    return {
      errorMessage: "",
      email: "",
      password: "",
      password2: "",
      ime: "",
      prezime: "",

    };
  },
  mounted() {},
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // postavi podatke o korisniku
          let id = this.email;
          // sada moramo spremiti te dodatne podatke
          firebase.firestore().collection("korisnici")
            .doc(id)
            .set({
              ime: this.ime,
              prezime: this.prezime
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        }).then(this.$router.push('/natjecatelji'))
        .catch(error => {
          console.error(error);
          this.errorMessage = error.message;
        });
    }
  }
};
</script>