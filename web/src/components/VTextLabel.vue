<template>
  <div class="v-text-field--solo">
    <label class="primary--text">{{label}}</label>
    <div class="input-group__input">
      <span class="text black--text">{{value}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VTextLabel',
    props: ['label', 'value']
  };

</script>

<style>

</style>
