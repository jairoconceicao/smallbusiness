<template>
  <div class="container">
    <h1>Clientes</h1>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Código</th>
          <th>CpfCnpj</th>
          <th>Nome</th>
          <th>Cidade</th>
          <th>UF</th>
          <th>CEP</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataset" :key="item['_id']">
          <td>{{item['TipoPessoa']}}</td>
          <td>{{item['Codigo']}}</td>
          <td>{{item['CpfCnpj']}}</td>
          <td>{{item['Nome']}}</td>
          <td>{{item['Cidade']}}</td>
          <td>{{item['UF']}}</td>
          <td>{{item['CEP']}}</td>
          <td>{{item['Status']}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="8">
            {{dataset.length}} clientes encontrados 
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Clientes',

  computed:{
    dataset() {
      return this.$store.getters.getClientesList || [];
    }
  },

  created() {
    this.$store.dispatch('getClientesListAction');

  },
}
</script>
