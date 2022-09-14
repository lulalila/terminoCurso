<template>
<div>
  <v-app>
    <v-form>
      <v-row row="4"
      align="center">
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
        <label>Ingresa el nombre de la película</label>
          <v-text-field
            v-model="nombre"
            label="Película"
          ></v-text-field>
          </v-col>
      </v-row>
      <v-row row="4">
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
        <label>Ingresa el nombre del director de la película</label>
          <v-text-field
            v-model="director"
            label="Director"
            placeholder="Placeholder"
          ></v-text-field>
         </v-col>
      </v-row>

        <label>Ingresa el cartel de la película</label>
      <v-row row="4">
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
          <v-file-input
            v-model="imagen"
            accept="image/*"
            label="File input"
            placeholder="Placeholder"
          ></v-file-input>
         </v-col>

      </v-row>
      <v-btn @click="addMovie"
              small
              color="error"
              dark
            >
              Ingresar datos
            </v-btn>
    </v-form>
<br>
<br>
<br>
<div>
    <v-form>
        <v-row row="6">
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
          <label>Modifica el nombre de la película</label>
            <v-text-field
              v-model="nombre"
              label="Película"
            ></v-text-field>
          </v-col>
         </v-row>
         <v-row row="6">
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
          <label>Modifica el nombre del director de la película</label>
            <v-text-field
              v-model="director"
              label="Director"
              placeholder="Placeholder"
            ></v-text-field>
           </v-col>
         </v-row>
    <div class="card" v-if="movies != undefined && !loading">
        <div v-if="!editando"></div>
        <h5 class="card-header">{{movies.nombre}}</h5>
           <div class="card-body">
              <div class="card-text">
                <p>Nombre {{movies.nombre}}</p>
                <p>Director {{movies.director}}</p>
              </div>
          </div>
    </div>
    <div class="actions">
         <v-btn color="error" @click="edit">{{editando?'Cancelar':'Editar'}}</v-btn>
    </div>
    <div v-if="loading">
      Cargando...
    </div>
    <div v-else class="alert alert-danger" roler="alert">
       <!-- <p>No hay datos disponibles</p> -->
    </div>      
  </v-form>
    </div>
       

 </v-app>

</div>     
</template>

<script>
import axios from 'axios'


export default {
   
  data(){
    return{
      nombre: "",
      director: "",
      imagen: [],
      movies: null,
      loading: false,
      editando: false,
    };    
  },
  methods: {     
    edit(){
      console.log("Editando...")
      this.editando=!this.editando;
    },
    saveChanges(){
      axios.put('https://proyecto-final-cf888-default-rtdb.firebaseio.com/' + 'peliculas.json', this.movies)
      .then((res)=>{
        console.log(res.data)
        this.persona=res.data;
        this.editando=!this.editando;
      })
      .catch()
      console.log("Guardando cambios...")
    },
    addMovie(){
      if(this.nombre != "" && this.director != "" && this.imagen != ""){
        const pelicula = {
          nombre: this.nombre,
          director: this.director,
          imagen: this.imagen,
        };
 
 
  axios.post('https://proyecto-final-cf888-default-rtdb.firebaseio.com/' + 'peliculas.json', pelicula)
  .then( (res)=>{
    console.log(res)
    this.nombre= "";
    this.director= "";
    this.imagen= "";
  })
  .catch((error)=>{
    console.log(error)
  })
      }
    }
  }
};
</script>

