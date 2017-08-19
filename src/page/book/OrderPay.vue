<template>
  <div class="order-pay">
    <div class="info">
      <!--<div class="title">
        <group>
          <cell>
            <div slot="title" class="cell-title">
              <p>
                <span class="cell-icon"><img src="../../assets/images/icon_g_trick.png" alt=""></span>
              </p>
              <span class="msg">预订成功</span>
            </div>
          </cell>
        </group>
      </div>-->
      <card>
        <div slot="header" class="title">
          <div class="cell-title">
            <p>
              <span class="cell-icon"><img src="../../assets/images/icon_g_trick.png" alt=""></span>
            </p>
            <span class="msg">预订成功</span>
          </div>
        </div>
        <div slot="content" class="tips">
          <p>亲，您的订单信息如下：</p>
          <p>订单号：W20170817095316105981915113001</p>
          <p>酒店名：广州增城新塘港口大道店</p>
          <p>最晚入住：10-25</p>
          <p>最晚退房：10-26</p>
          <p>房间数：1</p>
          <p>金额：219.00元</p>
          <p>电话：202-32860888</p>
          <p>传真：020-32860882</p>
          <p>地址：广州省广州市增城区新塘镇港口大道325号</p>
        </div>
        <div slot="footer" class="footer">
          <div class="tip">
            <p><img src="../../assets/images/icon_info.png" alt=""><span>提示：在线支付成功后，可享受房间整晚保留特权！</span></p>
            <p>
              <group>
                <x-button @click.native="$router.push('/OrderInfo')">马上支付</x-button>
              </group>
            </p>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  import {Group, Cell, Card, XButton} from 'vux'

  export default {
    name: 'order-pay',
    data () {
      return {
        headerTitle: '订单支付'
      }
    },
    components: {
      Group, Cell, Card, XButton
    },
    computed: {
      ...mapState ({
        room: state => state.room,
        system: state => state.system
      })
    },
    mounted () {
      this.initHeader ()
    },
    methods: {
      ...mapMutations ({
        updateHeader: 'UPDATE_HEADER',
        updateRoom: 'UPDATE_ROOM'
      }),
      initHeader () {
        this.updateHeader ({
          title: this.headerTitle,
          topTitle: '维也纳酒店',
          showRight: false
        })
      }
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    font-size: .7rem;
    border: none;
  }

  .order-pay {
    background: #E5E5E5;
  }

  .title {
    height: 2rem;
    line-height: 2rem;
    border-bottom: .5rem solid #E5E5E5;
  }

  .title .cell-title {
    text-align: center;
  }

  .title .cell-title p {
    display: inline-block;
  }

  .title .cell-title p .cell-icon {
    display: block;
  }

  .title .cell-title p .cell-icon img {
    width: .9rem;
    position: absolute;
    /* top: 24%; */
    top: .5rem;
  }

  .title .cell-title .msg {
    margin-left: .9rem;
  }

  .tips p {
    margin-top: .2rem;
    padding: 0 .3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .tip p {
    padding: 0 .5rem;
    margin-top: .4rem;
  }

  .tip p img {
    position: absolute;
    width: .9rem;
  }

  .tip p span {
    margin-left: 1rem;
  }

  button {
    width: 60%;
    height: 1.5rem;
    border-radius: 1.5rem;
    background: #EB7836;
    color: #ffffff;
    line-height: 1;
    margin: 0 auto;
  }
</style>


