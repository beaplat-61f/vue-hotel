<template>
  <div id="app">
    <div class="loading">
      <div v-transfer-dom>
        <loading v-model="isLoading"></loading>
      </div>
    </div>
    <view-box ref="viewBox" body-padding-top="48px" body-padding-bottom="50px" :key="key">
      <topbar :title="headerConfig.title"></topbar>
      <router-view :key="key"></router-view>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox, Loading, TransferDomDirective as TransferDom} from 'vux'
  import topbar from './components/header/header'
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    components: {
      ViewBox,
      Loading,
      topbar
    },
    computed: {
      ...mapState ({
        headerConfig: state => state.headerConfig,
        isLoading: state => state.isLoading
      }),
      key () {
        let now = new Date ()
        console.log (this.$route.path + '-' + now.getTime ())
        return this.$route.path + '-' + now.getTime ()
      }
    },
    directives: {
      TransferDom
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
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

</style>
