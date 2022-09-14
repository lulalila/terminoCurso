<template>
<div>
  <v-app>
  
  <v-text-field>Películas</v-text-field>
   <v-flex d-flex>
   <v-layout wrap>
       <v-flex md4 v-for="peli in datosPelicula" :key="peli.id">
         <v-card class="card-container pa-6">
                 {{peli.nombre}}
                 <v-spacer></v-spacer>
                 {{peli.director}}
               <v-img :src='peli.imagen'  max-height="20%" max-width="auto"></v-img>
                <v-spacer></v-spacer>
                 </v-card>
          <!-- <v-item-group> 
          <v-item v-slot="{ active, toggle }">
              <v-img
                @click="toggle"
              >
                <v-btn
                  icon
                  dark
                >
                  <v-icon>
                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </v-img>
            </v-item>
           </v-item-group>  -->
     
      </v-flex>
   </v-layout>
</v-flex>
    </v-app>
</div>
    
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
       datosPelicula: [],
       alignments: [
        'start',
        'center',
        'end',
      ],
      //  items: [
      //   {
      //     src: 'backgrounds/bg.jpg',
      //   },
      //   {
      //     src: 'backgrounds/md.jpg',
      //   },
      //   {
      //     src: 'backgrounds/bg-2.jpg',
      //   },
      //   {
      //     src: 'backgrounds/md2.jpg',
      //   },
      // ],
      // selected: [],
    }
  },
  methods:{
    obtenerPeliculas(){
      axios.get('https://proyecto-final-cf888-default-rtdb.firebaseio.com/' + 'peliculas.json')
        .then( (res)=>{
          let results=[];
          console.log(res);
          for (let id in res.data){
            console.log(id);
            console.log(res.data[id]);
            results.push({
               id: id, 
               nombre: res.data[id].nombre,
               director: res.data[id].director,
               imagen: res.data[id].imagen,
            });
          }
          this.datosPelicula= results;
          })
        .catch((error)=>{
          console.log(error) 
        })       
       }
     }, 
    created(){
      this.obtenerPeliculas();
    }
}; 
</script>

<style scoped>

.h2{
   font-size: 1.2em;
}
</style>