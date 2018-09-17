import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientes_list: []
  },
  getters: {
    getClientesList: (state) => { return state.clientes_list }
  },

  mutations: {
    setClientesList: (state, data) => state.clientes_list = data
  },

  actions: {
    getClientesListAction({commit}) {
      axios.get('http://localhost:3000/cliente')
      .then( (response) => commit('setClientesList', response.data) )
    }
  }
})
