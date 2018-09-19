<template>
  <section class="container">
    <h1>Novo</h1>
    <div class="row">
      <div v-for="ctrl in formElements" :key="ctrl['label']" :class="ctrl['layout']">
        <label>{{ctrl['label']}}</label>
        <input v-if="ctrl['type'] === 'text'" type="text" class="form-control" />
        <input v-else-if="ctrl['type'] === 'check'" type="check" class="form-control" />
        <input v-else-if="ctrl['type'] === 'radio'" type="radio" class="form-control" />
        <textarea v-else-if="ctrl['type'] === 'textarea'" class="form-control"></textarea>
      </div>
    </div>
    <div class="row">
      <button type="button" class="btn btn-primary">Salvar</button>
    </div>
  </section>
</template>

<script>
import Model from '../models/person.json'

export default {
  name: 'ClientesNew',

  computed: {
    formElements() {
      return Model;
    }
  },

  data() {
    return {
      dataModel : { }
    }
  }
}
</script>
