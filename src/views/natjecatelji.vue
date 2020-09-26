<template>

 <div id="nat">
  <div>

<form>
  <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Vrsta ribe</label>
      <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Riba
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
      <div class="col">
        <h3 class="text-center mb-5">Šaran</h3>
      </div>
<nat :key="nat.id" :nat="nat" v-for="nat in natjecateljisa" />
  </div>

<div v-if="stuka" class="unosstuke">
    <div class="col">
        <h3 class="text-center mb-5">Štuka</h3>
      </div>
<nat :key="nat.id" :nat="nat" v-for="nat in natjecateljist" />
  </div>


  </div>
</template>


<script>
import nat from '@/components/nat.vue'
import store from "../store";
export default {
  data() {
    return store;
  },
    components: {
    nat
  },
  mounted(){
   if(this.natjecateljist.some(nat => nat.bri === doc.data().bri)==false){
    firebase.firestore().collection("natjecatelji").doc("Stuka").collection("korisnik").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
        let doc = change.doc
         let nat=doc.data()
         nat.id = doc.id
         nat.kg=doc.data().kgstuka
        this.natjecateljist.push(nat);
}

 else if( change.type === 'removed'){
                           this.natjecateljist = this.natjecateljist.filter(natjecateljist =>{
                            return natjecateljist.id != change.doc.id
                          })
                        }


    });
});
 }


if(this.natjecateljisa.some(nat => nat.bri === doc.data().bri)==false){
    firebase.firestore().collection("natjecatelji").doc("Saran").collection("korisnik").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
        let doc = change.doc
         let nat=doc.data()
         nat.id = doc.id
         nat.kg=doc.data().kgsaran
        this.natjecateljisa.push(nat);
}

 else if( change.type === 'removed'){
                           this.natjecateljisa = this.natjecateljisa.filter(natjecateljisa =>{
                            return natjecateljisa.id != change.doc.id
                          })
                        }


    });
});
 }

  },
  methods: {
ostuka(){
        this.stuka = true;
        this.saran = false;

      },
osaran(){
        this.stuka = false;
        this.saran = true;

      },


 },

};
</script>

<style>



.kartica{
margin-left: -10%;
height: 70px;
width: 100vw;
border-top: #aaa 2px solid;
border-bottom: #aaa 2px solid;
background-color: rgb(255, 255, 255);
padding-bottom: 2%;
}

.podaci{
margin-left: 8%;
}

.column {
  float: left;
  width: 15%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>