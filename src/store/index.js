import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || null
    },
    getters: {
        loggedIn(state) {
            return !!state.token;
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },

        removeToken(state) {
            state.token = null
        },
    },
    actions: {
        login(context) {
            localStorage.setItem('token', 'DEMO')
            context.commit('setToken', 'DEMO')
        },

        logout(context) {
            localStorage.removeItem('token')
            context.commit('removeToken')
        }
    },
    modules: {}
})
