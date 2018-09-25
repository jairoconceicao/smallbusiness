<template>
  <form class="container">
    <div class="row">
      <div :class="(ctrl['type'] === 'check' ? `form-check form-group ${ctrl['layout']}`  : `form-group ${ctrl['layout']}`)" v-for="(ctrl, index) in formElements" :key="index">
        <label :class="ctrl['type'] === 'check' ? 'form-check-label' : ''" :for="`cmp${index}`">{{ctrl['label']}}</label>
        <input :id="`cmp${index}`" v-if="ctrl['type'] === 'check'" type="checkbox" class="form-check-input" v-model="dataModel[index]" />

        <input v-else-if="ctrl['type'] === 'text'" type="text" class="form-control" v-model="dataModel[index]" />

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

        <div v-else-if="ctrl['type'] === 'date'" class="input-group">
          <input type="text" class="form-control" :value="dataModel[index]"/>
          <div  class="input-group-append">
            <button 
              class="btn btn-outline" 
              @click="showPicker = !showPicker"
            >
              <i class="fa fa-calendar"></i>
            </button>
          </div>
          <date-picker
            color="#236AB9"
            @close="showPicker = false"
            @input="$emit('input', value)"
            v-if="showPicker" 
            v-model="dataModel[index]" 
          ></date-picker>
        </div>

        <div v-else-if="ctrl['type'] === 'collection'">
          <button type="button" class="btn">
            <i class="fa fa-plus"></i>
          </button>
          <table>
            <tr>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-success">Salvar</button>
      <button type="button" class="btn btn-danger">Cancelar</button>
    </div>
  </form>
</template>

<script>
import DatePicker  from 'vue-md-date-picker'
import Model from '../models/formelements.json'

export default {
  components: {
    DatePicker
  },

  computed: {
    formElements() {
      return Model['person'];
    }
  },

  data() {
    return {
      showPicker: null,
      dataModel : { }
    }
  }
}
</script>
