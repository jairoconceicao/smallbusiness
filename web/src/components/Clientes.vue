<template>
  <div class="container">
    <h1>Clientes</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Data Nac</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataset" :key="item['Id']">
          <td>{{item['Id']}}</td>
          <td>{{item['NomeCliente']}}</td>
          <td>{{item['DataNasc']}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="3">
            {{dataset.length}} 
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
