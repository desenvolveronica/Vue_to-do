<template>
  <div>
    <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message4"
            label="Outlined"
            outlined
            clearable
          ></v-text-field>
        </v-col>
    <v-list
      flat
      subheader
    >
      <v-list-item-group
        v-model="settings"
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
      tarefas:[
        {titulo: 'Estudar PHP', concluido: false},
        {titulo: 'Estudar Vue', concluido: false}, 
        {titulo: 'Caminhar', concluido: false}, 

      ]
    }
  }
  }
</script>
