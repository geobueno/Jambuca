<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout row="" wrap="">
      <v-flex xs12="" class="text-xs-center" mt-5="">
        <h1>Tem Jambu!!!</h1>
      </v-flex>
    </v-layout>
    
    <v-layout>
      <v-flex xs12 sm12>
        <v-card>
          <v-container v-bind="lg" fluid>
            <v-layout row wrap>
              <v-flex v-for="product of products" :key="products.id" xs12 sm6 md4>
                <v-card flat tile>
                  <v-img :src="product.url"></v-img>
                    <div>
                      <h1 class="headline">{{ product.name }}</h1>
                      <p class="grey--text">{{ product.price }}</p>
                      <p class="grey--text">{{ product.content }}</p>
                   </div>
                   <v-card-actions>
                    <v-btn flat color="purple">Comprar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon v-on:click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-slide-y-transition>
                    <v-card-text v-show="show">
                      <p>{{ product.description }}</p>
                      <p>{{ product.ingredients }}</p>
                      <p>{{ product.advice }}</p>
                    </v-card-text>
                  </v-slide-y-transition>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Product from '@/services/products'
  export default {
    data () {
      return {
        products: [],
        el: '#app',
        show: false
      }
    },
    mounted () {
      Product.list().then(response => {
        this.products = response.data
      })
    }
  }
</script>
