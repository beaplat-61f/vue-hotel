<template>
  <div id="select-calendar">
    <!-- <panel
      header="你不是真正的快乐"
      :footer="footer"
      :list="list"
      type="5"
      @on-img-error="onImgError"
    /> -->
    <div class="hotel-list">
      <div class="hotel-list-item" v-for="item in list" :key="item.id" @click.prevent="onItemClick(item)">
        <img :src="item.src" alt="" class="cover">
        <div class="right">
          <div class="name">{{ item.title }}</div>
          <div class="location">4.8分/340条评论</div>
          <div class="location">{{ item.desc }}</div>
          <div class="price"><span>￥</span><span>{{ item.price }}</span><span>起</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import { Panel } from 'vux'
  // import {mapMutations, mapState} from 'vuex'

  export default {
    name: 'list',
    components: {
      // InlineCalendar
      // Panel
    },
    computed: {
    },
    data () {
      return {
        weeksList: ['日', '一', '二', '三', '四', '五', '六'],
        list: [{
          id: 1,
          src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2756117420,2853976024&fm=26&gp=0.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '维也纳酒店',
          desc: '宝安区西乡街道兴业路8号',
          url: '/BookHotel',
          price: 347
        }, {
          id: 2,
          src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1200085042,4250469493&fm=26&gp=0.jpg',
          title: '维也纳酒店（深圳宝安流塘店）',
          desc: '宝安区西乡建安二路56号',
          price: 456,
          url: {
            path: '/BookHotel',
            replace: false
          }
        }],
        footer: {
          title: '更多',
          url: 'http://vux.li'
        }
      }
    },
    methods: {
      onItemClick (item) {
        // console.log(item)
        this.$router.push(item.url)
      },
      onImgError (item, $event) {
        console.log(item, $event)
      }
    },
    mounted () {
      // this.initHeader ()
    }
  }
</script>

<style scoped>
  .hotel-list {

  }
  .hotel-list-item {
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    align-items: flex-start;
    padding: 15px;
  }
  .cover {
    margin-right: 1em;
    width: 24%;
    border-radius: 50%;
  }
  .right {
    /* width: 80%; */
    flex: 1;
  }
  .name {
    font-size: .66rem;
  }
  .location {
    font-size: .6rem;
  }
  .price {
    float: right;
    color: #f08519;
  }
  .price span:nth-child(1) {
    font-size: .53rem;
    margin-top: -0.1rem;
  }
  .price span:nth-child(2) {
    font-size: .8rem;
  }
  .price span:nth-child(3) {
    color: #888;
    font-size: .525rem;
    margin-top: -0.1rem;
  }
</style>
