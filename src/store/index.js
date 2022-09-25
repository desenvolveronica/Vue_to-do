import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      {titulo: 'Estudar PHP', concluido: false},
      {titulo: 'Estudar Vue', concluido: false}, 
      {titulo: 'Caminhar', concluido: false}, 

    ] 
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
