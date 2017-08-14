<template>
  <div>
    <div class="header">
      <x-header :left-options="{'showBack':showBack, 'backText': backText, 'preventGoBack': true}"
                @on-click-back="goBack">
        <a slot="right">
          <slot name="rightContent"></slot>
        </a>
        <div class="overwrite-title-demo" slot="overwrite-title">
          <span v-text="title"></span>
        </div>
      </x-header>
      <div class="msgtip" v-if="showMsgtip">
        <a @click="showMsg">
          <img src="../../images/icon/msgtip.png" slot="icon">
          <p v-text="msg.title"></p>
        </a>
        <a class="hide-tip" @click.prev="hideMsgTip">&times;</a>
      </div>
    </div>
  </div>

</template>

<script>
  import {XHeader, TransferDom} from 'vux'
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: 'topbar',
    data () {
      return {
        msg: {
          title: '关于代理收益的公告！点此查看详情！',
          id: 1,
          type: 1
        }
      }
    },
    directives: {
      TransferDom
    },
    components: {
      XHeader
    },
    props: ['backText', 'showBack', 'title', 'backUrl', 'showMsgtip'],
    computed: {
      ...mapState ({
        headerConfig: state => state.headerConfig
      })
    },
    methods: {
      ...mapMutations ({
        updateHeader: 'UPDATE_HEADER'
      }),
      goBack () {
        if (this.backText == '返回') {
          if (this.$route.path == '/Statistics' || this.$route.path == '/msg' || this.$route.path == '/profile' || this.$route.path == '/proxy') {
            this.$router.push ('/')
          }
          else {
            this.$router.go (-1)
          }
        }
        else {
          this.$router.push (this.backUrl)
        }
      },
      showMsg () {
        console.log ('显示消息')
        this.$router.push ('/msginfo/' + this.msg.id + '/' + this.msg.type)
      },
      hideMsgTip () {
        this.updateHeader ({
          paddingTop: '45px',
          showMsgtip: false
        })
      }
    }
  }
</script>

<style scoped>
  img {
    width: 1.4rem;
    height: 1.4rem;
    padding-top: .2rem;
    float: left;
  }

  .msgtip {
    width: 100%;
    height: 35px;
    background: #FEFCEC;
  }

  .msgtip p {
    color: #FAA271;
    font-size: .75rem;
    padding-top: .2rem;
  }

  .hide-tip {
    position: absolute;
    top: 48%;
    right: 5px;
    color: #FAA271 !important;
    font-size: 1.3rem;
  }

</style>
