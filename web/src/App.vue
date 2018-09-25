<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <menu-item :item="menuitem"  v-for="(menuitem, index) in menuItems" :key="index" :prepend-icon="menuitem['icon']"></menu-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="primary" app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">{{ $route['name'] }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Model from './models/menuaction.json'

import MenuItem from './components/MenuItem'

export default {
  components: {
    MenuItem
  },

  computed: {
    menuItems() {
      return Model
    }
  },

  data() {
    return {
      drawer: null
    }
  },
}
</script>
