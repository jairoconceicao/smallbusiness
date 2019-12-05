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

    <!-- Snack de Mensagem -->
    <v-snackbar v-model="showSnackbar" vertical timeout="120000">
      <v-btn dark flat @click.prevent="closeSnack()">
        Fechar
      </v-btn>
      {{ $store.getters.messageapp }}
    </v-snackbar>
    
    <!-- Spinner -->
    <v-dialog
      fullscreen
      persistent
      v-model="$store.getters.loading">
      <v-container fluid fill-height>
        <v-content>
          <div class="text-xs-center">
            <v-progress-circular
              indeterminate
              :size="80"
              :width="8"
              color="#aa00aa" />
          </div>
        </v-content>
      </v-container>
    </v-dialog>
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
      drawer: null,
      showSnackbar: null
    }
  },
}
</script>
