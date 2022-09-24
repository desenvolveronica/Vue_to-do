<template>
  <div>
    <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="campoInput"
            label="Digite sua nova tarefa"
            outlined
            clearable
            @keyup.enter="handleAddTarefa"
          ></v-text-field>
        </v-col>
    <v-list
      flat
      subheader
    >
      <v-list-item-group
        multiple
        active-class=""
      >
      <div
      v-for="tarefa, index in tarefas"
      :key="index"
      >
        <Tarefa 
        :tarefa = 'tarefa'
        />
      </div>
      
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefa from '../components/tarefas/NovaTarefa.vue'
  export default {
    
    components: {
     Tarefa,
},
  data(){
    return {
      campoInput: null,
      tarefas:[
        {titulo: 'Estudar PHP', concluido: false},
        {titulo: 'Estudar Vue', concluido: false}, 
        {titulo: 'Caminhar', concluido: false}, 

      ]
    }
  }, 

  
  }
</script>
