<template>
  <div>
    <v-text-label :label="ctrl['label']"></v-text-label>
    <table>
      <tr v-for="(row, i) in dataModel[index]" :key="i">
        <td v-for="(col, c) in row" :key="c">
          {{col}}
        </td>
      </tr>
    </table>
    <v-dialog v-model="dialog" width="360">
      <v-btn flat slot="activator">
        <v-icon>fa fa-plus</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <p>Cadastre o Item aqui</p>
          
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'add-telefone'
}
</script>
