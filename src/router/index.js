import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 懒加载组件
// 酒店预定流程
// 预定
const BookHotel = resolve => require (['@/page/book/BookHotel'], resolve)
// 订单
const Order = resolve => require (['@/page/book/Order'], resolve)
// 填写订单
const FillOrder = resolve => require (['@/page/book/FillOrder'], resolve)
// 请选入住日期
const SelectCalendar = resolve => require (['@/page/book/SelectCalendar'], resolve)
// 订单支付
const OrderPay = resolve => require (['@/page/book/OrderPay'], resolve)
// 订单详情
const OrderInfo = resolve => require (['@/page/book/OrderInfo'], resolve)
// 404页面
const NotFoundComponent = resolve => require (['@/page/404'], resolve)
export default new Router({
  routes: [
    {path: '*', component: NotFoundComponent},
    {
      path: '/',
      name: 'BookHotel',
      component: BookHotel
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/FillOrder',
      name: 'FillOrder',
      component: FillOrder
    },
    {
      path: '/OrderInfo',
      name: 'OrderInfo',
      component: OrderInfo
    },
    {
      path: '/OrderPay',
      name: 'OrderPay',
      component: OrderPay
    },
    {
      path: '/SelectCalendar/:type',
      name: 'SelectCalendar',
      component: SelectCalendar
    }
  ]
})
