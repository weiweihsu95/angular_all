import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import {fb}   from './firebase';

window.$ = window.jQuery = jQuery;

import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

// Sweet Alert 提醒功能
import Swal from 'sweetalert2';
window.Swal = Swal;

Vue.config.productionTip = false;

// 可於各檔案加入
Vue.component('Navbar',require('./components/Navbar.vue').default);
Vue.component('Login',require('./components/Login.vue').default);

//當驗證狀態改變時才會mount資料，避免登入後/未登出回首頁需重新登入
let app = '';
fb.auth().onAuthStateChanged(function(user) {
  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});