<template>
  <div id="unos">
  <div>

<form>
  <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Vrsta ribe</label>
      <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Vrsta ribe
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="ostuka">Štuka</a>
    <a class="dropdown-item" @click="osaran">Šaran</a>
  </div>
    </div>
    <div class="col-auto my-1">
    </div>
    <div class="col-auto my-1">
    </div>
  </div>
</form>

  </div>

  <div v-if="saran" class="unossarana">

<div>
    <div class="row">
      <div class="col">
        <h3 class="text-center mb-5">Ulov šarana</h3>
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form @submit.prevent="unossaran">
          <div v-if="errorMessage" class="alert alert-danger">
            <strong>Ups!</strong>
            {{ errorMessage }}
          </div>
          <div class="form-group">
            <label >Broj iskaznice</label>
            <input
              v-model="bri"
              class="form-control"
              id="isk"
              placeholder="Unesite broj iskaznice"
            />
          </div>
          <div class="form-group">
            <label for="passwordField">Ulov u kg</label>
            <input
              v-model="kgsaran"
              class="form-control"
              id="kg"
              placeholder="Unesite ulov u kg"
            />
          </div>


          <button type="submit" class="btn btn-primary mt-5">Potvrdi</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>

  </div>

<div v-if="stuka" class="unosstuke">

<div>
    <div class="row">
      <div class="col">
        <h3 class="text-center mb-5">Ulov štuke</h3>
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form @submit.prevent="unosstuka">
          <div v-if="errorMessage" class="alert alert-danger">
            <strong>Ups!</strong>
            {{ errorMessage }}
          </div>
          <div class="form-group">
            <label >Broj iskaznice</label>
            <input
              v-model="bri"
              class="form-control"
              id="isk"
              placeholder="Unesite broj iskaznice"
            />
          </div>
          <div class="form-group">
            <label >Ulov u kg</label>
            <input
              v-model="kgstuka"
              class="form-control"
              id="kg"
              placeholder="Unesite ulov u kg"
            />
          </div>


          <button type="submit" class="btn btn-primary mt-5">Potvrdi</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>

  </div>


  </div>
</template>


<script>
import store from "../store";
export default {
  data() {
    return store;
  },
  mounted() {},
  methods: {
//     signup() {
//       firebase
//         .auth()
//         .createUserWithEmailAndPassword(this.email, this.password)
//         .then(() => {
//           // postavi podatke o korisniku
//           let id = this.email;
//           // sada moramo spremiti te dodatne podatke
//           firebase.firestore().collection("korisnici")
//             .doc(id)
//             .set({
//               ime: this.ime,
//               prezime: this.prezime
//             })
//             .then(function() {
//               console.log("Document successfully written!");
//             })
//             .catch(function(error) {
//               console.error("Error writing document: ", error);
//             });
//         })
//         .catch(error => {
//           console.error(error);
//           this.errorMessage = error.message;
//         });
//     }
ostuka(){
        this.stuka = true;
        this.saran = false;

      },
osaran(){
        this.stuka = false;
        this.saran = true;

      },

      unossaran(){
           firebase.firestore().collection("natjecatelji").doc("Saran").collection("korisnik").doc(this.userEmail).set
                      ({
                     bri:this.bri,
                      kgsaran: this.kgsaran,
                      ime: this.ime,
                      prezime: this.prezime,
                      prijava: 'Saran'
                       }
                       )
      },

      unosstuka(){
           firebase.firestore().collection("natjecatelji").doc("Stuka").collection("korisnik").doc(this.userEmail).set
                      ({
                     bri:this.bri,
                      kgstuka: this.kgstuka,
                      ime: this.ime,
                      prezime: this.prezime,
                      prijava: 'Stuka'
                       }
                       )
      },

  }
};
</script>