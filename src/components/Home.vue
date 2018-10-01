<template>
  <v-container fluid grid-list-md text-xs-center pa-0="">
    <v-layout column=""  align-center=""   justify-center="" >
      <v-flex xs12="" class="text-xs-center" mt-5="">
        <h1>TEM JAMBU!!!</h1>
      </v-flex>
      <v-flex xs12="" sm12="">
        <v-card color="#46B4AA">
          <v-container fluid="">
            <v-layout row="" wrap="">
              <v-flex v-for="product in products" :key="products.id" xs12="" sm6="" md4="">
                <v-hover>
                  <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4">
                    <v-img  :aspect-ratio="10/15" :src="product.url">
                      <v-expand-transition>
                        <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 black--text" style="height: 100%;">
                          R$ {{ product.price }},00
                        </div>
                      </v-expand-transition>
                    </v-img>
                  <v-card-text class="pt-4" style="position: relative;">
                    <v-btn absolute color="orange" class="white--text" type="button" @click="addToBasket( product )" icon large right top>
                      <v-icon>add_shopping_cart</v-icon>
                    </v-btn>
                    <h4 class="display-1 font-weight-light orange--text mb-2">{{ product.name }}</h4>
                    <div class="font-weight-light grey--text title mb-2">{{ product.content }}</div>
                    <div class="font-weight-light title mb-2">Ingredientes: {{ product.ingredients }}</div>
                  </v-card-text>
                </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <div>
      <div v-if="basket.length>0" >
        <v-layout row="" wrap="">
          <v-flex xs10 sm10 offset-sm1 offset-xs1>
            <v-card>
              <v-toolbar color="#FFBC49">
                <v-icon>shopping_cart</v-icon>
                <v-toolbar-title>Meu Carrinho</v-toolbar-title>
              </v-toolbar>
              <v-toolbar>
                <span class="subheading">Itens</span>
                <v-spacer></v-spacer>
                <v-divider vertical></v-divider>
                <span class="subheading">&nbsp&nbsp Quantidade &nbsp</span>
                <v-divider vertical></v-divider>
                <span class="subheading">&nbsp Total</br>&nbsp(R$)</span>
              </v-toolbar>
              <v-flex v-for="product in basket" :key="products.id">
                <v-toolbar>
                  <span class="subheading">{{product.name}}</span>
                  <v-spacer></v-spacer>
                  <v-divider vertical></v-divider>
                  <v-btn  icon @click="decreaseQuantity( product )"><v-icon>remove_circle</v-icon></v-btn>
                  <span class="subheading">{{ product.quantity }}</span>
                  <v-btn  icon @click="increaseQuantity( product )"><v-icon>add_circle</v-icon></v-btn>
                  <v-divider vertical></v-divider>
                  <span class="subheading">{{product.price * product.quantity}},00</span>
                </v-toolbar>
              </v-flex>
              <v-toolbar color="#FFBC49">
                <span class="subheading"><strong>Valor Final:</strong></span>
                <v-spacer></v-spacer>
                <span class="subheading"><strong>R$ {{ total }},00</strong></span>
              </v-toolbar>
              <v-btn  type="button" color="#FFBC49" @click="Buy()">Finalizar Compra</v-btn>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <div v-else></div>
    </div>
  </v-container>
</template>

<script>
  import Product from '@/services/products'
  export default {
    data () {
      return {
        products: [],
        el: '#app',
        show: false,
        basket: []
      }
    },
    computed: {
      total () {
        var totalCost = 0
        for (var products in this.basket) {
          var individualProduct = this.basket[products]
          totalCost += individualProduct.quantity * individualProduct.price
        }
        return totalCost
      }
    },
    mounted () {
      Product.list().then(response => {
        this.products = response.data
      })
    },
    methods: {
      addToBasket (product) {
        this.basket.push({
          name: product.name,
          price: product.price,
          quantity: 1
        })
      },
      removeFromBasket (product) {
        this.basket.splice(this.basket.indexOf(product), 1)
      },
      increaseQuantity (product) {
        product.quantity++
      },
      decreaseQuantity (product) {
        product.quantity--
        if (product.quantity === 0) {
          this.removeFromBasket(product)
        }
      },
      Buy () {
        alert('Obrigada pela compra!')
      }
    }
  }
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.v-content__wrap {
  background-color:#46B4AA;
}
</style>
