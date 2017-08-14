import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 懒加载组件
// 首页
const Home = resolve => require (['@/components/HelloFromVux'], resolve)

// 购物流程
// 订单支付
const OrderPay = resolve => require (['@/page/shopping/OrderPay'], resolve)

// 404页面
const NotFoundComponent = resolve => require (['@/page/404'], resolve)
export default new Router({
  routes: [
    {path: '*', component: NotFoundComponent},
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/OrderPay',
      name: 'OrderPay',
      component: OrderPay
    }
  ]
})
