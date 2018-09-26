<template>
  <v-layout row>
    <v-flex xs12>
      <v-toolbar flat color="white">
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="$router.push('/clientes/new')">
          <v-icon>fa fa-plus</v-icon>
        </v-btn>
      </v-toolbar>
      <v-data-table :items="dataset" :headers="headset">
        <template slot="items" slot-scope="props">
          <td>{{ props.item['TipoPessoa'] }}</td>
          <td>{{ props.item['Codigo'] | padZero(9) }}</td>
          <td>{{ props.item['CpfCnpj'] }}</td>
          <td>{{ props.item['Nome'] }}</td>
          <td>{{ props.item['DataNasc'] | formatDate }}</td>
          <td>{{ props.item['Cidade'] }}</td>
          <td>{{ props.item['UF'] }}</td>
          <td>{{ props.item['CEP'] }}</td>
          <td>{{ props.item['Status'] }}</td>
        </template>        
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed:{
    headset() {
      return [{
            text: '',
            align: 'left',
            sortable: false,
            value: 'TipoPessoa'
          },{
            text: 'Código',
            align: 'left',
            sortable: false,
            value: 'Codigo'
          },{
            text: 'CPF CNPJ',
            align: 'left',
            sortable: false,
            value: 'CpfCnpj'
          },{
            text: 'Nome',
            align: 'left',
            sortable: false,
            value: 'Nome'
          },{
            text: 'Data Nasc',
            align: 'left',
            sortable: false,
            value: 'DataNasc'
          },{
            text: 'Cidade',
            align: 'left',
            sortable: false,
            value: 'Cidade'
          },{
            text: 'UF',
            align: 'left',
            sortable: false,
            value: 'UF'
          },{
            text: 'Cep',
            align: 'left',
            sortable: false,
            value: 'CEP'
          },{
            text: 'Status',
            align: 'left',
            sortable: false,
            value: 'Status'
          }]
    },

    dataset() {
      return this.$store.getters.getClientesList || [];
    }
  },

  created() {
    this.$store.dispatch('getClientesListAction');

  },
}
</script>
