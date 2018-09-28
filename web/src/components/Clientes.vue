<template>
  <v-layout row>
    <v-flex xs12>
      <v-toolbar flat color="white">
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="$router.push('/clientes/new')">
          <v-icon>fa fa-plus</v-icon>
        </v-btn>
      </v-toolbar>
      <v-data-table :items="dataset" :headers="headset" item-key="_id">
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded" style="cursor: pointer;">
            <td v-for="(col, n) in headset" :key="n">{{ props.item[col.value] | format(col.format) }}</td>
          </tr>
        </template>        
        <template slot="expand" slot-scope="props">
          <v-card flat>
            <v-layout row>
              <v-flex xs12 align-right>
                <v-btn @click="deleteItem(props.item)">
                  Excluir
                </v-btn>
              </v-flex>
              <v-flex :class="ctrl['layout']" v-for="(ctrl, index) in detalhe" :key="index">
                <v-text-label disabled :label="ctrl['label']" :value="props.item[index]"></v-text-label>
              </v-flex>
            </v-layout>
          </v-card>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
import Detail from '../models/formelements.json'
import VTextLabel from './VTextLabel'

export default {
  name: 'clientes',

  components:{
    VTextLabel
  },

  computed:{
    headset() {
      return [{
            format: '',
            text: 'Tipo',
            align: 'left',
            sortable: true,
            value: 'TipoPessoa'
          },{
            format: 'code',
            text: 'Código',
            align: 'left',
            sortable: true,
            value: 'Codigo'
          },{
            format: 'cpfcnpj',
            text: 'CPF CNPJ',
            align: 'left',
            sortable: false,
            value: 'CpfCnpj'
          },{
            format: '',
            text: 'Nome',
            align: 'left',
            sortable: true,
            value: 'Nome'
          },{
            format: '',
            text: 'Cidade',
            align: 'left',
            sortable: true,
            value: 'Cidade'
          },{
            format: '',
            text: 'UF',
            align: 'left',
            sortable: true,
            value: 'UF'
          },{
            format: '',
            text: 'Cep',
            align: 'left',
            sortable: true,
            value: 'CEP'
          },{
            format: '',
            text: 'Status',
            align: 'left',
            sortable: true,
            value: 'Status'
          }]
    },

    dataset() {
      return this.$store.getters.getClientesList || [];
    },

    detalhe() {
      return Detail['person']
    }
  },

  methods: {
    deleteItem(item) {
      this.$store.dispatch('deleteCliente', item['_id']);
    }
  },

  created() {
    this.$store.dispatch('getClientesListAction');

  },
}
</script>
