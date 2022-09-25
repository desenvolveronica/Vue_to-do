<template>
  <div>
          <v-list-item
          :class="{'blue lighten-4'  :tarefa.concluido}"
          @click="changeValue"
          >
          <template v-slot:default="{  }">
            <!-- Ícone de chackbox -->
            <v-list-item-action>
              <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
            </v-list-item-action>

            <!-- Tarefas -->
            <v-list-item-content>
              <v-list-item-title :class="{'text-decoration-line-through' :tarefa.concluido}"
              >{{tarefa.titulo}}</v-list-item-title>
            </v-list-item-content>

            <!-- Ícone para excluir -->
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="pink lighten-2" @click = 'handleRemoveTarefa(tarefa.id)'
                >mdi-trash-can</v-icon>
              </v-btn>
          </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider style="background-color: pink"></v-divider>
  </div>
</template>

<script>

export default {
        name: 'TarefaC',
        props: ['tarefa'],
        data() {
          return {
            tarefaR: this.tarefa
          }
        },
        methods: {
          changeValue() {
            this.tarefaR.concluido = !this.tarefaR.concluido
          }, 
          handleRemoveTarefa(id){
            this.$store.commit('removeTarefa' , id)
          }
        }
    }

</script>

<style>

</style>
