<template>
  <div id="order-pay">
    <div class="banner">
      <img src="../../images/shopping/bg01.gif" alt="">
      <p>
        <span>需支付<span class="money">3198.00</span>元</span>
      </p>
    </div>
    <group title="选择支付方式">
      <cell class="weui-cell cell" v-for="(item, index) in payList" :key="index" @click.native="change(item)">
        <div slot="default" class="default">
          <check-icon :value.sync="item.check"></check-icon>
        </div>
        <div slot="title">
          <p class="tip" v-text="item.tip"></p>
        </div>
        <div slot="icon" class="icon">
          <img :src="item.imgUrl" alt="">
        </div>
      </cell>
    </group>
    <x-button type="primary">确 定</x-button>
  </div>
</template>

<script>
  import {Group, Checklist, CheckIcon, Cell, XButton} from 'vux'
  import {mapMutations} from 'vuex'

  export default {
    name: 'order-pay',
    components: {
      Group, Checklist, CheckIcon, Cell, XButton
    },
    computed: {},
    data () {
      return {
        title: '订单支付',
        payList: [{
          imgUrl: require ('@/images/shopping/icon01.jpg'),
          tip: '微信',
          check: true,
          id: 'wechat'
        }, {
          imgUrl: require ('@/images/shopping/icon02.jpg'),
          tip: '支付宝',
          check: false,
          id: 'zhifubao'
        }, {
          imgUrl: require ('@/images/shopping/icon03.jpg'),
          tip: '银行卡',
          check: false,
          id: 'card'
        }]
      }
    },
    mounted () {
      this.initHeader ()
    },
    methods: {
      ...mapMutations ({
        updateHeader: 'UPDATE_HEADER'
      }),
      initHeader () {
        this.updateHeader ({
          title: this.title
        })
      },
      change (item) {
        this.payList.map (function (currentValue, index, array) {
          currentValue.check = (currentValue.id == item.id)
          return currentValue
        })
      }
    }
  }
</script>

<style scoped>
  * {
    color: #333333;
  }

  .banner {
    position: relative;
  }

  .banner img {
    width: 100%;
  }

  .banner p {
    position: absolute;
    top: .8rem;
    width: 100%;
    text-align: center;
    font-size: .9rem;
    font-weight: 600;
  }

  span.money {
    font-size: 1rem;
    color: #d32836;
    font-weight: 600;
  }

  .cell {
    height: 2.5rem;
  }

  .icon {
    margin-right: .2rem;
    margin-left: .3rem;
    line-height: 1rem;
  }

  .icon img {
    width: 2rem;
  }

  .default {
    margin-right: .3rem;
  }

  button {
    background-color: #01994b;
    width: 80% !important;
    margin-top: 2rem;
    font-family: "Pingfang SC" !important;
    color: #ffffff;
    font-size: .9rem;
  }

  .tip {
    color: #666666;
  }

  #order-pay .weui-cells:after {
    border-bottom: 1px solid #ebebeb !important;
  }
</style>
