<template>
  <div id="app" style="height: 100%;">
    <div class="loading">
      <div v-transfer-dom>
        <loading v-model="isLoading"></loading>
      </div>
    </div>
    <view-box ref="viewBox" body-padding-top="100px" body-padding-bottom="50px" :key="key">
      <topbar slot="header" :title="headerConfig.title" :topTitle="headerConfig.topTitle">
        <a class="header-right" slot="rightContent" v-if="headerConfig.showRight" @click="showPhones=!showPhones">
          <span class="icon-span"><img src="./assets/images/icon_o_phone.png" alt=""></span><span>电话</span>
        </a>
      </topbar>
      <router-view :key="key"></router-view>
      <bar slot="bottom"></bar>
      <popup v-model="showPhones">
        <div class="popup">
          <p class="tip">请选择拨打电话方式</p>
          <p class="phone"><a :href="'tel://'+hotel.phone">门店电话：<span v-text="hotel.phone"></span></a></p>
          <p class="phone"><a :href="'tel://'+system.phone">客服电话：<span v-text="system.phone"></span></a></p>
        </div>
      </popup>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox, Loading, TransferDomDirective as TransferDom, Popup} from 'vux'
  import topbar from './components/header/header.vue'
  import bar from './components/footer/footer.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    components: {
      ViewBox,
      Loading,
      topbar,
      bar,
      Popup
    },
    computed: {
      ...mapState ({
        headerConfig: state => state.headerConfig,
        isLoading: state => state.isLoading,
        system: state => state.system,
        hotel: state => state.hotel
      }),
      key () {
        let now = new Date ()
        console.log (this.$route.path + '-' + now.getTime ())
        return this.$route.path + '-' + now.getTime ()
      }
    },
    directives: {
      TransferDom
    },
    data() {
      return {
        showPhones: false
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #FEFEFE;
  }

  #app {
    height: 100%;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .loading {
    z-index: 99999999999999999999;
  }

  i {
    font-size: 1rem !important;
  }

  .header-right {
    color: #DF734B !important;
  }

  .header-right .icon-span {
    display: block;
    float: left;
    padding-top: .1rem;
  }

  .header-right .icon-span img {
    width: .8rem;
  }

  .header-right span {
    font-size: .7rem;
  }

  .popup {
    text-align: center;
    height: 6.5rem;
    font-size: .7rem;
  }

  .popup p.tip {
    color: #EA7A38;
    padding-top: .3rem;
  }

  .popup p.phone {
    margin-top: .5rem;
  }

  .popup p.phone a {
    background: #DFB987;
    display: block;
    width: 70%;
    height: 1.5rem;
    border-radius: .2rem;
    line-height: 1.5rem;
    color: #ffffff;
    margin: 0 auto;
    text-align: justify;
    padding-left: 2rem;
  }
</style>
