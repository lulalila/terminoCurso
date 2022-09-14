
<template>
    
        <div>
          <button v-if="isAuth" @click="logout">Logout</button>
        
       </div>
</template>
<script>

export default {
    computed:{
        isAuth(){
            // return this.$store.state.isLoggedIn;
             return this.$store.getters.authStatus;
          }
    }, 
    methods:{
       logout(){
        //    this.$store.state.isLoggedIn= false;
               this.$store.dispatch('logout');

        },
    }
}
</script>
<style scoped>
div{
    text-align: center;
}
</style>