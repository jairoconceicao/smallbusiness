<template>
  <v-text-field 
    ref="inputCep"
    solo
    clearable
    :loading="$store.getters.getCepLoading"
    label="CEP"
    append-icon="fa fa-search" 
    @click:append.stop.prevent="search()"
    @click:clear.stop.prevent="search()"
    v-model="cep"
    ></v-text-field>
</template>
<script>
export default {
  name: 'busca-cep',
  props: ['value'],
  data() {
    return {
      cep: null
    }
  },
  methods: {
    search() {
      this.$store.dispatch('getCep', this.cep)
      .then( (data) => {
        this.$emit('recoveryCep', data);
        this.$emit('input', this.cep);
      })
    }
  }
}
</script>
