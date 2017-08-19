<template>
  <div class="order">
    <div class="tab">
      <tab active-color="#F07626" defaultColor="#606060" :line-width="3">
        <tab-item selected @on-item-click="changeTab">
          <h4>全部</h4>
        </tab-item>
        <tab-item @on-item-click="changeTab">
          <h4>未入住</h4>
        </tab-item>
        <tab-item @on-item-click="changeTab">
          <h4>已入住</h4>
        </tab-item>
        <tab-item @on-item-click="changeTab">
          <h4>取消</h4>
        </tab-item>
      </tab>
    </div>
    <div class="time-line">
      <!--<timeline>
        <timeline-item>
          <h4 class="recent">【广东】 广州市 已发出</h4>
          <p class="recent">2016-04-17 12:00:00</p>
        </timeline-item>
        <timeline-item>
          <h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
          <p>2016-04-16 10:23:00</p>
        </timeline-item>
        <timeline-item>
          <h4> 商家正在通知快递公司揽件</h4>
          <p>2016-04-15 9:00:00</p>
        </timeline-item>
      </timeline>-->
    </div>
    <div style="position: absolute; z-index: 200;">
      <div class="info">
        <div class="time">
          <span>04/10</span>
        </div>
        <div class="dots"></div>
        <div class="content">
          <div class="bg">
            <p class="nickname title_ellipsis">广州科学城店</p>
            <p class="title_ellipsis">入住2017年10月04日</p>
            <p class="title_ellipsis">离店2017年10月05日</p>
            <p class="title_ellipsis">雅致双人房 房间数：1</p>
            <p class="title_ellipsis"><span><img src="../../assets/images/icon_o_phone.png" alt=""></span>020-82512666
            </p>
            <p class="title_ellipsis"><span><img src="../../assets/images/icon_o_location.png" alt=""></span>广州市黄埔区开创大道3327号
            </p>
            <img class="label-tip" src="../../assets/images/icon_orderState_cancel.png" alt="">
          </div>
        </div>
      </div>
      <div class="info" style="">
        <div class="time">
          <span>04/10</span>
        </div>
        <div class="dots"></div>
        <div class="content">
          <div class="bg">
            <p class="nickname title_ellipsis">广州科学城店</p>
            <p class="title_ellipsis">入住2017年10月04日</p>
            <p class="title_ellipsis">离店2017年10月05日</p>
            <p class="title_ellipsis">雅致双人房 房间数：1</p>
            <p class="title_ellipsis"><span><img src="../../assets/images/icon_o_phone.png" alt=""></span>020-82512666
            </p>
            <p class="title_ellipsis location"><span><img src="../../assets/images/icon_o_location.png" alt=""></span>广州市黄埔区开创大道3327号
            </p>
            <p class="offer color-green">立即支付</p>
            <img class="label-tip" src="../../assets/images/icon_orderState_checking.png" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {Timeline, TimelineItem, Tab, TabItem} from 'vux'
  import {mapMutations} from 'vuex'

  export default {
    name: 'order',
    data () {
      return {
        headerTitle: '我的订单',
        tabIndex: 0
      }
    },
    components: {
      Timeline, TimelineItem, Tab, TabItem
    },
    methods: {
      ...mapMutations ({
        updateHeader: 'UPDATE_HEADER'
      }),
      initHeader () {
        this.updateHeader ({
          title: this.headerTitle,
          topTitle: this.headerTitle,
          showRight: false
        })
      },
      changeTab (index) {
        this.tabIndex = index
      }
    },
    mounted () {
      this.initHeader ()
    }
  }
</script>

<style scoped>
  * {
    font-size: .7rem;
  }

  .order {
    height: 100%;
    background: #E5E5E5;
    position: relative;
    overflow-y: auto;
  }

  .time-line {
    height: 100%;
    width: 15%;
    border-right: 1px solid #E1E2DC;
    float: left;
  }

  .info {
    height: 8rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    padding-top: 2rem;
  }

  .info .time {
    float: left;
    width: 15%;
    padding-left: .1rem;
    padding-right: .3rem;
    text-align: right;
  }

  .info .time span {
    font-size: .6rem;
    padding-right: .5rem;
  }

  .info .dots {
    width: .4rem;
    height: .4rem;
    background: #EB7836;
    border-radius: .4rem;
    float: left;
    position: absolute;
    left: 15%;
    margin-left: -0.2rem;
    margin-top: .4rem;
  }

  .info .content {
    width: 75%;
    float: left;
    height: 100%;
    margin-left: .5rem;
    margin-top: -0.7rem;
  }

  .info .content .bg {
    width: 95%;
    height: 95%;
    margin: 0 auto;
    background: #ffffff;
    border-radius: .3rem;
    position: relative;
    padding: .5rem .4rem;
  }

  .info .content .bg p {
    width: 100%;
  }

  .info .content .bg .nickname {
    font-size: 1rem;
    font-weight: bold;
  }

  .info .content .bg span {
    display: block;
    float: left;
  }

  .info .content .bg span img {
    width: .9rem;
  }

  .info .content .bg .label-tip {
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
  }

  .info .content .bg .location {
    width: 70%;
    float: left;
  }

  .info .content .bg .offer {
    text-align: right;
    width: 30%;
    float: left;
  }
</style>


