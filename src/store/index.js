import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      {id: 1,titulo: 'Estudar PHP', concluido: false},
      {id: 2,titulo: 'Estudar Vue', concluido: false}, 
      {id: 3,titulo: 'Caminhar', concluido: false}, 

    ] 
  },
  getters: {
  },
  
  mutations: {
    adicionaTarefa(state, titulo){
      if(titulo){
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })
      }
    }, 

    removeTarefa(state, id){
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
      //filter retorna uma array e na array vamos ratornar todos os IDs diferentes do clicado
      //state.tarefas equivale a lista de tarefas
    }
  },


  actions: {
  },
  modules: {
  }
})
