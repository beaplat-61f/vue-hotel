<template>
  <div class="fotter">
    <tabbar>
      <tabbar-item link="/" :selected="route.path === '/'">
        <img slot="icon" src="../../images/icon/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/Statistics" :selected="route.path === '/Statistics'">
        <img slot="icon" src="../../images/icon/statistics.png">
        <span slot="label">统计</span>
      </tabbar-item>
      <tabbar-item show-dot link="/proxy" :selected="route.path === '/proxy'">
        <img slot="icon" src="../../images/icon/proxy.png">
        <span slot="label">代理</span>
      </tabbar-item>
      <tabbar-item show-dot link="/msg" :selected="route.path === '/msg'">
        <img slot="icon" src="../../images/icon/message.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="/profile" :selected="route.path === '/profile'">
        <img slot="icon" src="../../images/icon/profile.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: 'bar',
    data() {
      return {
      }
    },
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
    computed: {
      ...mapState({
        route: state => state.route,
        path: state => state.route.path
      })
    }
  }
</script>
