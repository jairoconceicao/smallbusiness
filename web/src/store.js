import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientes_list: [],

    cepAddr: {},
    cepLoading: false
  },

  getters: {
    getClientesList: (state) => { return state.clientes_list },
    getCepAddr: (state) => { return state.cepAddr },
    getCepLoading: (state) => { return state.cepLoading }
  },

  mutations: {
    setClientesList: (state, data) => state.clientes_list = data,
    setCepAddr: (state, data) => state.cepAddr = data,
    setCepLoading: (state, loading) => state.cepLoading = loading
  },

  actions: {
    getClientesListAction({commit}) {
      axios.get('http://localhost:3000/cliente')
      .then( (response) => commit('setClientesList', response.data) )
    },

    getCep({commit}, cep) {
      return new Promise( (resolve, reject) => {
        commit('setCepLoading', true)
        if(cep !==null && cep !== undefined && cep !== '') {
          axios.get(`https://viacep.com.br/ws/${cep}/json/`)
          .then( (response) => { 
            commit('setCepAddr', response.data) 
            commit('setCepLoading', false)
            resolve(response.data);
          }).catch( () => {
            commit('setCepAddr', {}) 
            commit('setCepLoading', false)
            reject(response.data);
          })
        }
        else {
          commit('setCepAddr', {}) 
          commit('setCepLoading', false)
          resolve({});
        }

      });
    }
  }
})
