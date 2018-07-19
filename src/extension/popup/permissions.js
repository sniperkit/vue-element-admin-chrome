
import router from '@/extension/popup/router/index.js' // custom router
// import router from './router'
import store from '@/components/admin-lite/store'

import NProgress from 'nprogress' // Progress bar
import 'nprogress/nprogress.css'// Progress bar style sheet
import { Message } from 'element-ui'
import { getToken } from '@/components/admin-lite/utils/auth' // Authenticate

const whiteList = ['/login'] // Do not redirect whitelist
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => { // Get user information
          next()
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // End Progress
})