import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


Vue.config.productionTip = false;
Vue.filter('date', dateFilter);
Vue.use(Vuelidate);
Vue.use(messagePlugin);

const firebaseConfig = {
  apiKey: "AIzaSyA5VbqglB2SKkDOvSthirri4R7FB2mQl94",
  authDomain: "pet-vue-crm-b127c.firebaseapp.com",
  projectId: "pet-vue-crm-b127c",
  storageBucket: "pet-vue-crm-b127c.appspot.com",
  messagingSenderId: "165012605412",
  appId: "1:165012605412:web:72f4bed645c41924019ff1",
  measurementId: "G-MQEJET23X0"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


