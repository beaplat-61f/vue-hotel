<template>
  <div>
    <!-- <divider>iOS Gradients(v2.7.4)</divider> -->
    <swiper
      :list="demo01_list"
      v-model="demo01_index"
      @on-index-change="demo01_onIndexChange"
    />
    <div class="select-container">
      <div class="item" @click="selectCity">
        {{ selectCityName }}
        <!-- <span @click="choiceCity()">click me fuck</span> -->
      </div>
      <div class="item">
        <HotelDatePicker
          :hoveringTooltip="true"
          :startDate="startDate"
          :endDate="endDate"
          :i18n="ptBr">
        </HotelDatePicker>
      </div>
      <!-- <div class="item">
        <p>
          <span>入住</span><span @click="$router.push('/SelectCalendar/入住')" v-text="dateFilter.begin"></span>
          <span>离店</span><span @click="$router.push('/SelectCalendar/离店')" v-text="dateFilter.end"></span>
          <span class="total">（共<span v-text="dateFilter.total_day"></span>天）</span>
        </p>
      </div> -->
    </div>
    <box gap="10px 10px">
      <x-button :gradients="['#FF5E3A', '#FF9500']" @click.native="bookHotel">酒店预订</x-button>
      <!-- <cube-button>Button</cube-button> -->
    </box>


    <!-- <city
      :is-show.sync='city.isShow'
      :on-choose='city.onChoose'
      :city-data='city.cityData'
      :local-city='city.localCity'
      :star-city='city.starCity'
			:close="close">
    </city> -->
  </div>
</template>
<script>
  import {Group, Cell, Tab, TabItem, InlineCalendar, XButton, dateFormat, Box, Swiper, SwiperItem} from 'vux'
  import {mapMutations, mapState} from 'vuex'
  import {rooms, hotel} from '@/mock/mock'
  import HotelDatePicker from 'vue-hotel-datepicker'
  import util from '@/common/js/util'
  // import city from '@/components/city/index.vue';

  const baseList = [{
    url: 'javascript:',
    img: 'https://m.wyn88.com/Images/oneIntegral/images/oneIntegralBanner640x258.png',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://m.wyn88.com/Statics/2018/wap_cuoFengActive2018/images/cuoFengBanner258x640.png',
    title: '送你一辆车'
  }]

  export default {
    name: 'home',
    components: {
      Group,
      Cell,
      Tab,
      TabItem,
      InlineCalendar,
      XButton,
      Box,
      Swiper,
      SwiperItem,
      HotelDatePicker
      // city
      // Divider
    },
    data () {
      return {
        selectCityName: '请选择城市...',
        demo01_list: baseList,
        demo01_index: 0,
        headerTitle: '酒店详情',
        showList: true,
        rooms: [],
        info: null,
        showDetailed: true,
        showMap: true,
        hotel: {},
        ptBr: {
          night: '晚',  // 一晚
          nights: '晚', // 多晚
          'day-names': ['日', '一', '二', '三', '四', '五', '六'],
          'check-in': '入住',
          'check-out': '离店',
          'month-names': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        startDate: new Date(),
        endDate: new Date(new Date().getFullYear(), 11, 31),
        city: {
          isShow: false,
          cityData: [],
          onChoose: null,
          localCity: {},
          starCity: []
        },
      }
    },
    computed: {
      ...mapState ({
        system: state => state.system,
        order: state => state.order
      }),
      dateFilter() {
        return {
          begin: dateFormat(this.order.begin, 'MM月DD日'),
          end: dateFormat(this.order.end, 'MM月DD日'),
          total_day: this.order.total_day
        }
      }
    },
    mounted () {
      this.initHeader ()
      this.initRooms ()
      this.initHotel ()
      this.showCityInfo()
      // this.getCityInfo()
    },
    methods: {
      // close () {
      //   this.city.isShow = false
      // },
      // choiceCity: function(){
      //   this.city.isShow = true;
      // },
      selectCity () {
        this.$router.push({
          name: 'City',
          params: {
            city: this.selectCityName
          }
        })
      },
      bookHotel () {
        this.$router.push('/HotelList')
      },
      demo01_onIndexChange (index) {
        this.demo01_index = index
      },
      ...mapMutations ({
        updateHeader: 'UPDATE_HEADER',
        updateHotel: 'UPDATE_HOTEL',
        updateRoom: 'UPDATE_ROOM',
        updateSystem: 'UPDATE_SYSTEM'
      }),
      initHeader () {
        this.updateHeader ({
          title: this.headerTitle,
          topTitle: '维也纳' + this.headerTitle,
          showRight: true
        })
      },
      initHotel () {
        this.$axios.get ('http://hotel.cn').then (response => {
//          console.log(response.data)
          this.hotel = response.data
          this.updateHotel ({hotel: this.hotel})
        }).catch (error => {
          console.log (error)
        })
      },
      initRooms () {
        this.$axios.get ('http://rooms.cn').then (response => {
          this.info = response.data.info
          this.rooms = response.data.datas
          this.rooms.map (function (currentValue, index, array) {
            currentValue.member = Math.round (currentValue.retail * currentValue.rebate)
            currentValue.btnTitle = currentValue.isFull ? '已满' : '预订'
          })
        }).catch (error => {
          console.log (error)
        })
      },
      book (item) {
        console.log (item, this.hotel)
        this.updateRoom ({room: item})
        this.$router.push ('/FillOrder')
      },
      showCityInfo() {
        const city = this.$route.params.city
        if (city) {
          this.selectCityName = city
          return false
        }
        //实例化城市查询类
        let that = this
        var citysearch = new AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
            if (result && result.city && result.bounds) {
              console.log(result);

              that.selectCityName = result.city;
            }
          } else {
              // document.getElementById('info').innerHTML = result.info;
          }
        });
    },
    }
  }
</script>

<style scoped>
  .select-container {
    margin: 20px;
  }
  .item {
    border-bottom: 1px solid #eee;
    padding: 10px 0;
  }
</style>
