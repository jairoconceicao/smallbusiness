<template>
  <section class="container">
    <h1>Novo</h1>
    <div class="row">
      <div v-for="(ctrl, index) in formElements" :key="index" :class="ctrl['layout']">
        <label>{{ctrl['label']}}</label>
        <input v-if="ctrl['type'] === 'text'" type="text" class="form-control" v-model="dataModel[index]" />

        <input v-else-if="ctrl['type'] === 'check'" type="checkbox" class="form-control" v-model="dataModel[index]" />

        <div v-else-if="ctrl['type'] === 'radio'">
          <div v-for="item in ctrl['enum']" :key="item" class="form-check">
            <input type="radio" class="form-check-input" v-model="dataModel[index]" />
            <label class="form-check-label">{{item}}</label>
          </div>
        </div>

        <textarea v-else-if="ctrl['type'] === 'textarea'" class="form-control" v-model="dataModel[index]"></textarea>
        <select v-else-if="ctrl['type'] === 'select'" class="form-control" v-model="dataModel[index]">
          <option v-for="option in ctrl['enum']" :value="option" :key="option"> {{option}} </option>
        </select>
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
