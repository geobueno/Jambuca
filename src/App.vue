
<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app >
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isAuthenticated" @click="userSignOut">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Sair</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app color="#FFBC49">
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
      </span>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">
        <img src="@/assets/logo.png" width="150px"></img>
      </router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path"><v-icon left dark>{{ item.icon }}</v-icon>{{ item.title }}</v-btn>
        <v-btn flat v-if="isAuthenticated" @click="userSignOut"><v-icon left>exit_to_app</v-icon>Sair</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
  
</template>

<script>
  export default {
    data () {
      return {
        sidebar: false
      }
    },
    computed: {
      appTitle () {
        return this.$store.state.appTitle
      },
      isAuthenticated () {
        return this.$store.getters.isAuthenticated
      },
      menuItems () {
        if (this.isAuthenticated) {
          return [
            { title: 'Loja', path: '/home', icon: 'shopping_cart' },
            { title: 'Sobre', path: '/about', icon: 'info' }
          ]
        } else {
          return [
            { title: 'Cadastrar', path: '/signup', icon: 'face' },
            { title: 'Entrar', path: '/signin', icon: 'lock_open' }
          ]
        }
      }
    },
    methods: {
      userSignOut () {
        this.$store.dispatch('userSignOut')
      }
    }
  }
</script>

<style>
  .theme--light.v-navigation-drawer{
    background-color: #FFBC49;
  }
</style>
