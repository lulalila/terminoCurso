export const state = () => ({
    
    state(){ //esto es el equivalente a la data
        return{
            //aquí definimos nuesta data, data global
            isLoggedIn: false,
        }
    }
})

export const mutations = {
                       //{isAuth: boolean}
        setAuth(state, payload){
           state.isLoggedIn = payload.isAuth;
        }
     }
export const actions = {
        
        logout(context){
           context.commit('setAuth', {isAuth: false});
        }
     }
export const getters = {
        
        authStatus(state){
           return state.isLoggedIn;
        }
     }

