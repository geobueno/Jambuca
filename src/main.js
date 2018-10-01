import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase/'

Vue.use(Vuetify)
firebase.initializeApp({
  apiKey: 'AIzaSyDQ-kbBtqoWKdis3QMt-gSfl6Ur3NeU36A',
  authDomain: 'a-jambuca.firebaseapp.com',
  databaseURL: 'https://a-jambuca.firebaseio.com',
  projectId: 'a-jambuca',
  storageBucket: '',
  messagingSenderId: '817049259915'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App),
      created () {
        if (firebaseUser) {
          store.dispatch('autoSignIn', firebaseUser)
        }
      }
    })
    unsubscribe()
  })
