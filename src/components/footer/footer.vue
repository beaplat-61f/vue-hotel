<template>
  <div class="fotter">
    <tabbar>
      <tabbar-item link="/Order" :selected="route.path === '/Order'">
        <!-- <img slot="icon" src="../../images/icon/home.png"> -->
        <span slot="label" class="label"><i class="fa fa-book"></i>我的订单</span>
      </tabbar-item>
      <tabbar-item link="/" :selected="route.path === '/'">
        <!-- <img slot="icon" src="../../images/icon/statistics.png"> -->
        <span slot="label" class="label"><i class="fa fa-jpy"></i>继续预订</span>
      </tabbar-item>
      <tabbar-item show-dot link="/" :selected="route.path === '/'">
        <!-- <img slot="icon" src="../../images/icon/proxy.png"> -->
        <span slot="label" class="label"><i class="fa fa-home"></i>酒店位置</span>
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

<style scoped>
/* .weui-tabbar {
  background: #F2F2EE !important;
} */

.label {
  background: #F2F2EE;
  display: block;
  color: #000;
  font-size: .7rem;
  border: 1px solid #C9CABF;
  height: 48px;
}

.label i {
  color: #DB905C;
  margin-right: .2rem;
}
</style>

