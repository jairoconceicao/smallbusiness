<template>
  <div>
    <v-dialog v-model="dialog" width="360">
      <v-btn flat slot="activator">
        <v-icon>fa fa-plus</v-icon>
      </v-btn>
      <v-card>
        <v-card-title color="orange" primary-title>
          <h3 class="headline mb-0">CNAE</h3>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Cnae" v-model.trim="cnaeItem" solo />
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
  name: 'add-cnae',
  props: ['value'],

  data() {
    return {
      dialog: null,
      cnaeItem: null,
      cnaeModel: []
    }
  },

  methods: {
    save() {
      this.cnaeModel.push(this.cnaeItem);
      this.cnaeItem = null;
      this.$emit('input', this.cnaeModel);
    },

    cancel() {
      this.cnaeItem = null;
      this.dialog = null;
    }
  }
}
</script>
