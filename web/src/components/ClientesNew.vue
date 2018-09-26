<template>
  <v-layout row>
    <v-flex :class="ctrl['layout']" v-for="(ctrl, index) in formElements" :key="index">
      <v-switch v-if="ctrl['type'] === 'check'" :label="ctrl['label']" v-model="dataModel[index]"></v-switch>
      <v-radio-group v-else-if="ctrl['type'] === 'radio'" :label="ctrl['label']" v-model="dataModel[index]">
        <v-radio
          v-for="(item, n) in ctrl['enum']"
          :key="n"
          :label="item"
          :value="n"
        ></v-radio>
      </v-radio-group>
      <v-select v-else-if="ctrl['type'] === 'select'"
        box
        :items="ctrl['enum']"
        :label="ctrl['label']"
        v-model="dataModel[index]"
      ></v-select>      
      <v-dialog v-else-if="ctrl['type'] === 'date'"
        ref="dialog"
        v-model="showPicker"
        :return-value.sync="date"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="dataModel[index]"
          :label="ctrl['label']"
          append-icon="fa fa-calendar"
          solo
          readonly
        ></v-text-field>
        <v-date-picker v-model="dataModel[index]" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="showPicker = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
      
      <v-text-field v-else-if="ctrl['type'] === 'text'"
        v-model="dataModel[index]"
        :label="ctrl['label']"
        solo
      ></v-text-field>

      <v-textarea v-else-if="ctrl['type'] === 'textarea'"
          v-model="dataModel[index]"
          solo
          name="input-7-4"
          :label="ctrl['label']"
          value=""
        ></v-textarea>

      <div v-else-if="ctrl['type'] === 'collection'">
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

    </v-flex>
  </v-layout>
</template>

<script>
import Model from '../models/formelements.json'
import VTextLabel from './VTextLabel'

export default {
  components:{
    VTextLabel
  },

  computed: {
    formElements() {
      return Model['person'];
    }
  },

  data() {
    return {
      showPicker: null,
      dialog: false,
      dataModel : { }
    }
  }
}
</script>
