<template>
  <div class="container">
    <h1>Clientes</h1>
    <div class="row">
      <button type="button" class="btn" @click="$router.push('/clientes/new')">Novo</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Código</th>
          <th>CpfCnpj</th>
          <th>Nome</th>
          <th>Data Nasc</th>
          <th>Cidade</th>
          <th>UF</th>
          <th>CEP</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataset" :key="item['_id']">
          <td>{{item['TipoPessoa']}}</td>
          <td>{{ item['Codigo'] | padZero(9) }}</td>
          <td>{{item['CpfCnpj']}}</td>
          <td>{{item['Nome']}}</td>
          <td>{{ item['DataNasc'] | formatDate }}</td>
          <td>{{item['Cidade']}}</td>
          <td>{{item['UF']}}</td>
          <td>{{item['CEP']}}</td>
          <td>{{item['Status']}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="9">
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
