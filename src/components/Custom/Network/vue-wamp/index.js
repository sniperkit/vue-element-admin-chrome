import Vue from 'vue'
import VueWamp from 'vue-wamp'

import SnkWamp from "./snk-wamp.vue"

Vue.use(VueWamp, {
  debug: true,
  url: 'ws://localhost:3000/ws',
  realm: 'realm1',
  onopen: function (session, details) {
    console.log('SNK-WAMP connected', session, details)
  },
  onclose: function (reason, details) {
    console.log('SNK-WAMP closed: ' + reason, details)
  }
})

export default function install (Vue) {
  Vue.component('SnkWamp', SnkWamp)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
