<template>
  <div>
          <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon>
              <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          </template>
          <v-list>
          <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
          >         <v-icon left>{{item.icon}}</v-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          </v-list>
          </v-menu>

  </div>
</template>

<script>
 export default {
    data: () => ({
      items: [
        { icon: 'mdi-pencil', title: 'Editar' },
        { icon: 'mdi-trash-can', title: 'Excluir' },

      ],
    }),
  }
</script>

<style>

</style>