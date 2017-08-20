<template>
  <div class="order-info">
    <div class="hotel-info">
      <group>
        <cell>
          <div slot="title" class="title">
            <p class="title_ellipsis"><strong v-text="hotel.name+'('+hotel.nickname+'店)'">维也纳酒店（广州增城新塘港口大道店）</strong>
            </p>
          </div>
        </cell>
        <cell is-link>
          <div slot="icon" class="icon">
            <img src="../../assets/images/icon_o_location.png" alt="">
          </div>
          <div slot="title" class="title">
            <p class="title_ellipsis" v-text="hotel.address">广东省广州市增城区新塘镇港口大道325号</p>
          </div>
        </cell>
        <cell is-link>
          <div slot="icon" class="icon">
            <img src="../../assets/images/icon_o_phone.png" alt="">
          </div>
          <div slot="title" class="title">
            <p class="title_ellipsis" v-text="'门店电话：'+hotel.phone">门店电话：020-32860888</p>
          </div>
        </cell>
      </group>
    </div>
    <div class="person-order">
      <group>
        <cell>
          <div slot="title" class="title">
            <p class="title_ellipsis">订单号：W20170817095316105981915113001</p>
            <p class="title_ellipsis"><span v-text="'房型：'+room.type">房型：标准单人房</span> <span class="color-green" v-text="order.roomNum+'间房'">1间房</span></p>
            <p class="title_ellipsis"><span v-text="'入住：'+dateFilter.begin">入住：10-25</span> <span class="brackets">}</span><span
              class="prompt color-green" v-text="'住'+order.total_day+'晚'">住1晚</span></p>
            <p class="title_ellipsis" v-text="'离店：'+dateFilter.end">离店：10-26</p>
            <p class="title_ellipsis" v-text="'到店时间：'+order.arrivalTime+'前'">到店时间：15:00前</p>
          </div>
        </cell>
        <cell>
          <div slot="title" class="title">
            <p v-text="'联系人：'+user.name">联系人：林生</p>
            <p v-text="'手机：'+user.phone">手机：159XXXX0100</p>
            <p class="remark" v-text="'备注：'+order.remark">备注：</p>
          </div>
        </cell>
        <cell>
          <div slot="title" class="title">
            <p class="total">总价<span>￥</span><span v-text="order.total">219.00</span></p>
          </div>
        </cell>
      </group>
    </div>
    <div class="footer">
      <group>
        <p>
          <x-button class="pay">支付</x-button>
        </p>
        <p>
          <x-button class="cancel" @click.native="show=!show"><i class="fa fa-times-circle-o"></i>取消订单</x-button>
        </p>
      </group>
    </div>
    <div v-transfer-dom class="order-info-dialog">
      <confirm v-model="show"
               ref="confirm"
               title="提示"
      >
        <p><i class="fa fa-question-circle-o"></i>你确定要取消该订单吗？</p>
      </confirm>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  import {Group, Cell, Card, Confirm, XButton, TransferDomDirective as TransferDom, dateFormat} from 'vux'

  export default {
    name: 'order-info',
    directives: {
      TransferDom
    },
    data () {
      return {
        headerTitle: '订单详情',
        show: false
      }
    },
    components: {
      Group, Cell, Card, Confirm, XButton
    },
    computed: {
      ...mapState ({
        room: state => state.room,
        system: state => state.system,
        hotel: state => state.hotel,
        order: state => state.order,
        user: state => state.user
      }),
      dateFilter () {
        return {
          begin: dateFormat (this.order.begin, 'MM-DD'),
          end: dateFormat (this.order.end, 'MM-DD'),
          total_day: this.order.total_day
        }
      }
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

  .order-info {
    background: #E5E5E5;
  }

  .hotel-info .icon img {
    width: .9rem;
  }

  .hotel-info .title p,
  .person-order .title p {
    width: 95%;
  }

  .person-order {
    margin-top: .5rem;
  }

  .person-order .total {
    text-align: center;
  }

  .person-order .total span {
    font-size: 1.2rem;
    color: #EB7836;
  }

  .brackets {
    font-size: 1.4rem;
    position: absolute;
    margin-left: .2rem;
  }

  .prompt {
    display: inline-block;
    position: absolute;
    margin-left: .8rem;
    margin-top: .5rem;
  }

  .footer {
    padding: .5rem;
    background: #EFEFE7;
  }

  .footer button {
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: .7rem;
  }

  .footer .pay {
    margin-bottom: .5rem;
    background: #EB7836;
    color: #ffffff;
  }

  .footer .cancel {
    color: #EB7836;
  }

  .footer .cancel i {
    margin-right: .1rem;
  }

  .order-info-dialog p {
    color: #000000;
  }

  .order-info-dialog p i {
    /*color: #1C74D9;*/
    margin-right: .1rem;
  }
</style>


