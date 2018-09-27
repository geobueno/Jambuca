import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase/'

Vue.use(Vuetify)
firebase.initializeApp({
  apiKey: 'AIzaSyBejY06d4MA5S_OSjiNCY7DSAkkIv_hhTQ',
  authDomain: 'jambuca-63222.firebaseapp.com',
  databaseURL: 'https://jambuca-63222.firebaseio.com',
  projectId: 'jambuca-63222',
  storageBucket: 'jambuca-63222.appspot.com',
  messagingSenderId: '1050978374053'
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
