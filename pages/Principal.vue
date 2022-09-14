<template>
 <div>
   <v-app>
    <v-app-bar
      color="blue lighten-4"
      dense
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>A la luz del cine</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.to"
          >
            <v-btn>
            {{item.title}}
            </v-btn>
            <!-- <v-list-item-title>Registro {{ n }}</v-list-item-title> -->
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <ver-peliculas></ver-peliculas>
    <registro></registro>
    <ingresar-peliculas></ingresar-peliculas>
    </v-app>
  </div>
</template>

<script>
import VerPeliculas from '../pages/VerPeliculas.vue'
import Registro from '../pages/Registro.vue'
import IngresarPeliculas from '../pages/IngresarPeliculas'
export default {
  components:{
    VerPeliculas,
    Registro,
    IngresarPeliculas,
  },
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          
          title: 'Registro',
          to: '/registro'
        },
        {
          
          title: 'Ingresar',
          to: '/IngresarPeliculas'
        },
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
