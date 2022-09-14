<template>
    <div>
        <h3>Bienvenida Elisa</h3>
        <div class="card" style="width: 35rem">
      <div class="card-body">

        <div class="form-group">
          <label for="email">Email</label>
          <v-text-field
            v-model="email"
            type="text"
            class="form-control"
            placeholder="email@domain.cl"
            />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <v-text-field
            v-model="password"
            type="password"
            class="form-control"
            placeholder="*******"
          />
        </div>
       <v-btn class="btn btn-primary" @click="login">
         Iniciar sesión
        </v-btn>
        <v-btn class="btn btn-primary" @click="register">
         Registrar
        </v-btn>
        <p v-if="error" class="error">{{errorMessage}}</p>
      </div>
    </div>
    </div>
</template>

<script>


import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

export default {
    data(){
       return{ 
        email: "",
        password: "", 
        error: false,
        errorMessage: "",
       }
    },
    methods: {
        login(){
           console.log("login")
           this.error=false;
           let auth = getAuth();
           signInWithEmailAndPassword(auth, this.email, this.password)
           .then((res)=>{
             console.log(res)
             this.$router.push('/IngresarPeliculas')
           })
           .catch((error)=>{
             this.error=true;
             console.log(error)
             let msg="";
             console.log(error.code)
             if(error.code==='auth/wrong-password'){
               msg="Password incorrecto. Verifique e intente de nuevo"
            }
             else if(error.code==='auth/user-not-found'){
               msg="No se encontró el usuario. Verifique e intente nuevamente"
             }
              else if(error.code==='auth/invalid-email'){
                msg="Email inválido"
              }
              else{
                msg="Ha ocurrido un error, no se pudo iniciar sesión"
              }
              this.errorMessage = msg;
           })
        },
        register(){
           console.log("register")
           let auth= getAuth();
           createUserWithEmailAndPassword(auth, this.email, this.password)
           .then((res)=>{
             console.log(res);
             console.log("Se ha creado el usuario!!");
             console.log(auth.currentUser);
           this.$router.push('/IngresarPeliculas');
           })
           .catch((error)=>{
             console.log(error)
           })
        }
    }
}
</script>

<style scoped>
button{
    margin-right: 10px;
}
.error{
    color: red;
}
</style>