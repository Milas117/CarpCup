<template>
 <div id="nat">
  <div class="kartica">
      <div class="podaci">
    <div class="row">
    <div class="column"><h6>Br. Iskaznice</h6>
    <a>{{ nat.bri }}</a></div>
  <div class="column"><h6>Ime</h6>
  <a>{{ nat.ime }}</a>
  </div>
  <div class="column"><h6>Prezime</h6><a>{{ nat.prezime }}</a></div>
  <div class="column"><h6>Ulov u kg</h6><a>{{ nat.kg }}</a></div>
  <div v-if="adminstatus" class="column2"><button  @click="brisanje(nat.prijava, nat.bri)" id="obrisi">Obriši</button></div>

</div>
      </div>
  </div>


  </div>
</template>
<style>
.column2{
padding-top: 20px;
}
#obrisi {
margin-bottom: 30px;
color: red
}
</style>

<script>
import store from "../store";
export default {
    data() {
    return store;
  },
  props: [ "nat" ],
  methods: {
      
  brisanje(prijava, bri){
var brisanje_upit = firebase.firestore().collection("natjecatelji").doc(prijava).collection("korisnik").where("bri","==",bri);
brisanje_upit.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    doc.ref.delete();
  });
}).then(alert("Uspješno obrisano"));
  }
  
  },
  
}
</script>


