import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 懒加载组件
// 酒店预定流程
const Home = resolve => require (['@/page/book/Home'], resolve)
// 查询酒店列表
const HotelList = resolve => require (['@/page/book/HotelList'], resolve)
// 选择酒店
const City = resolve => require (['@/page/book/City'], resolve)
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
const router = new Router({
  routes: [
    {path: '*', component: NotFoundComponent},
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/HotelList',
      name: 'HotelList',
      component: HotelList,
      meta: {
        title: '酒店列表'
      }
    },
    {
      path: '/BookHotel',
      name: 'BookHotel',
      component: BookHotel,
      meta: {
        title: '酒店详情'
      }
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/FillOrder',
      name: 'FillOrder',
      component: FillOrder,
      meta: {
        title: '填写订单'
      }
    },
    {
      path: '/OrderInfo',
      name: 'OrderInfo',
      component: OrderInfo,
      meta: {
        title: '订单详情'
      }
    },
    {
      path: '/OrderPay',
      name: 'OrderPay',
      component: OrderPay,
      meta: {
        title: '支付订单'
      }
    },
    {
      path: '/SelectCalendar/:type',
      name: 'SelectCalendar',
      component: SelectCalendar,
      meta: {
        title: '选择日期'
      }
    },
    {
      path: '/City',
      name: 'City',
      component: City,
      meta: {
        title: '选择城市'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
