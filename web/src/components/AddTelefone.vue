<template>
  <div>
    <v-dialog v-model="dialog" width="360">
      <v-btn flat slot="activator">
        <v-icon>fa fa-plus</v-icon>
      </v-btn>
      <v-card>
        <v-card-title color="orange" primary-title>
          <h3 class="headline mb-0">Telefones</h3>
        </v-card-title>
        <v-card-text>
          <v-layout row>
            <v-flex xs3>
              <v-text-field label="DDD" v-model.number="telDDDItem" solo />
            </v-flex>
            <v-flex xs9>
              <v-text-field label="Nro" v-model.number="telNroItem" solo />
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat @click.stop="save()">
            <v-icon>fa fa-check</v-icon>
          </v-btn>
          <v-btn color="red-darken-4" flat @click.stop="cancel()">
            <v-icon>fa fa-close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'add-telefone',

  props: ['value'],

  data() {
    return {
      dialog: null,
      telDDDItem: null,
      telNroItem: null,
      telefonesModel: []
    }
  },

  methods: {
    save() {
      this.telefonesModel.push({
        ddd: this.telDDDItem,
        nro: this.telNroItem
      })
      this.telDDDItem = null;
      this.telNroItem = null;

      this.$emit('input', this.telefonesModel)
    },

    cancel() {
      this.telDDDItem = null;
      this.telNroItem = null;

      this.dialog = null;
    }
  }
}
</script>
