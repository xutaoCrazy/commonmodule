import Vue from 'vue'
import Router from 'vue-router'
// Vue.prototype.Global = Global
import hospitaloutbreakwarning from '@/components/homePage/hospitaloutbreakwarning' // 爆发预警
// import patientcharge from '@/components/homePage/patientcharge' // 门诊收费退费
import Global from '../components/frameWork/Global'
import login from '../components/login/login'

// import commonparameter from '@/components/homePage/commonparameter' // 公共参数
import main from '@/components/homePage/main' // 首页
import home from '@/home' // 保险机构
Vue.prototype.Global = Global
Vue.use(Router)
window.vueRouter = new Router({
  routes: [{
      path: '/home', // 
      name: 'home',
      component: home,
      children: [{
          path: 'hospitaloutbreakwarning', // 病人管理
          name: 'hospitaloutbreakwarning',
          component: hospitaloutbreakwarning
        },
        //   {
        //     path: 'commonparameter', //   公共参数
        //     name: 'commonparameter',
        //     component: commonparameter
        //   },
        {
          path: '/', //   首页
          name: 'main',
          component: main
        }
      ]
    },
    // {
    //   path: '/patientmanagment', // 病人管理
    //   name: 'patientmanagment',
    //   component: patientmanagment
    // },
    // {
    //   path: 'commonparameter', //   公共参数
    //   name: 'commonparameter',
    //   component: commonparameter
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
let _this = this

export default vueRouter
