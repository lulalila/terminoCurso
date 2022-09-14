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
           <!-- <v-list-item-title>Registro {{index}}</v-list-item-title>  -->
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
        <v-container>
            <Nuxt/>
        </v-container>
    </v-main>
    <!-- <ver-peliculas></ver-peliculas>
    <registro></registro>
    <ingresar-peliculas></ingresar-peliculas> -->
    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
         Elisa Cabrera Espinoza
         <v-spacer></v-spacer>
         Proyecto final para el curso del 2022
                                      <v-spacer></v-spacer>
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. 
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
    </v-app>
  </div>
</template>

<script>
// import VerPeliculas from '../pages/VerPeliculas.vue'
// import Registro from '../pages/Registro.vue'
// import IngresarPeliculas from '../pages/IngresarPeliculas'
export default {
//   components:{
//     VerPeliculas,
//     Registro,
//     IngresarPeliculas,
//   },
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
       
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  }
}
</script>
