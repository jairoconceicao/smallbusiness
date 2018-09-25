<template>
  <v-list-group
    :prepend-icon="item['icon']" 
    v-if="item['children'] != undefined && item['children'].length > 0" 
  >
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>{{ item['title'] }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile v-for="(child, i) in item['children']" :key="i" @click="goPage(child['route'])">
      <v-list-tile-action>
        <v-icon>{{ child['icon'] }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>{{ child['title'] }}</v-list-tile-title>
    </v-list-tile>            
  </v-list-group>
  <v-list-tile v-else  @click="goPage(item['route'])">
    <v-list-tile-action>
      <v-icon>{{ item['icon'] }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-title>{{ item['title'] }}</v-list-tile-title>
  </v-list-tile>
</template>
<script>
export default {
  name: 'menu-item',

  props: ['item'],

  methods: {
    goPage(route) {
      if(route !== undefined && route !== '')
        this.$router.push(route);
    }
  }
}
</script>
