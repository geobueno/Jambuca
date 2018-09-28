<template>
  <v-container fluid="">
    <v-layout row="" wrap="">
      <v-flex xs12="" class="text-xs-center" mt-5="">
        <h1>Tem Jambu!!!</h1>
      </v-flex>
      <v-flex xs12="" class="text-xs-center" mt-3="">
        <p>Nossos produtos</p>
      </v-flex>
      <article v-for="product in products" :key="products.id" >
        <h2>{{ products.name }}</h2>
        <h3>{{ products.price }}</h3>
      </article>
    </v-layout>
  </v-container>
 </template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    mounted () {
      this.setList()
    },
    methods: {
      ...mapActions('products', ['setList'])
    },
    computed: {
      ...mapState('products', ['list'])
    }
  }
</script>