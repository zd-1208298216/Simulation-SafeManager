import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

export default new Router({
  mode: 'history',
  // routes: [
  //   {
  //     path: '/',
  //     name: 'login',
  //     component: Login
  //   },
  //   {
  //     path: '/index',
  //     name: '首页',
  //     component: () => import('@/views/Index.vue'),
  //     children:[
  //       {
  //         path:'/index',
  //         name:'首页',
  //         component:() => import('@/views/Index.vue'),
  //       },
  //       {
  //         path:'/digcurrpay',
  //         name:'数字货币支付',
  //         component:() => import('@/components/appMain.vue'),
  //         children:[
  //           {
  //             path:'/opermanage',
  //             name:'运营管理类',
  //             component:() => import('@/components/appMain.vue'),
  //             children:[
  //               {
  //                 path:'/banknamemanage',
  //                 name:'行名行号管理',
  //                 component: () => import('@/views/bankNameManage/bankNameManage.vue'),
  //               }
  //             ]
  //           },
  //           {
  //             path:'/businessquery',
  //             name:'业务查询类',
  //             component:() => import('@/components/appMain.vue'),
  //             children:[
  //               {
  //                 path:'/paybusinessquery',
  //                 name:'支付业务查询',
  //                 component: () => import('@/views/payBusinessQuery.vue'),
  //               }
  //             ]
  //           },
  //           {
  //             path:'/businessmanage',
  //             name:'业务管理类',
  //             component:() => import('@/components/appMain.vue'),
  //             children:[
  //               {
  //                 path:'/initfreeformat',
  //                 name:'发起自由格式',
  //                 component: () => import('@/views/initFreeFormat.vue'),
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: '',
      component: () => import('@/views/Index.vue'),
      children:[
        {
          path:'/index',
          name:'首页',
          component:() => import('@/views/Index.vue'),
        },
        {
          path:'/digcurrpay',
          name:'数字货币支付',
          component:() => import('@/components/appMain.vue'),
          children:[
            {
              path:'/opermanage',
              name:'运营管理类',
              component:() => import('@/components/appMain.vue'),
              children:[
                {
                  path:'/banknamemanage',
                  name:'行名行号管理',
                  component: () => import('@/views/bankNameManage/bankNameManage.vue'),
                }
              ]
            },
            {
              path:'/businessquery',
              name:'业务查询类',
              component:() => import('@/components/appMain.vue'),
              children:[
                {
                  path:'/paybusinessquery',
                  name:'支付业务查询',
                  component: () => import('@/views/payBusinessQuery.vue'),
                }
              ]
            },
            {
              path:'/businessmanage',
              name:'业务管理类',
              component:() => import('@/components/appMain.vue'),
              children:[
                {
                  path:'/initfreeformat',
                  name:'发起自由格式',
                  component: () => import('@/views/initFreeFormat.vue'),
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
