<template>
  <div id="select-calendar">
    <div class="in">
      <div class="tip">
        <span><strong v-text="$route.params.type+tipDate"></strong></span>
      </div>
      <inline-calendar :render-month="renderMonth" :start-date="startDateFilter" disable-past
                       highlight-weekend :show-last-month="false"
                       :show-next-month="false" :weeks-list="weeksList" @on-change="changeInDate"></inline-calendar>
    </div>
  </div>
</template>

<script>
  import {dateFormat, InlineCalendar} from 'vux'
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: 'select-calendar',
    components: {
      InlineCalendar
    },
    computed: {
      startDateFilter() {
        let startDate = this.order.begin.getTime()+(1000*60*60*24)
        return this.$route.params.type == '入住' ? dateFormat(new Date(), 'YYYY-MM-DD') : dateFormat(new Date(startDate), 'YYYY-MM-DD')
      },
      ...mapState({
        order: state => state.order
      }),
      tipDate() {
        return this.$route.params.type == '入住' ? dateFormat(this.order.begin, 'YYYY月MM日') : dateFormat(this.order.end, 'YYYY月MM日')
      },
      renderMonth() {
        let month = this.$route.params.type == '入住' ? dateFormat(this.order.begin, 'YYYY-M').split('-') : dateFormat(this.order.end, 'YYYY-M').split('-')
        return [parseInt(month[0]), parseInt(month[1])]
      }
    },
    data () {
      return {
        weeksList: ['日', '一', '二', '三', '四', '五', '六']
      }
    },
    methods: {
      ...mapMutations ({
        updateHeader: 'UPDATE_HEADER',
        updateOrder: 'UPDATE_ORDER'
      }),
      initHeader () {
        this.updateHeader ({
          title: '请选'+this.$route.params.type+'日期',
          topTitle: '维也纳酒店详情',
          showRight: false
        })
      },
      changeInDate(val) {
//        debugger
        let beginDate = null,
            endDate = null
        if (this.$route.params.type == '入住') {
          let endStr = dateFormat(this.order.end, 'YYYY-MM-DD')
          let next = new Date(val).getTime()+(1000*60*60*24)
          beginDate = new Date(val)
          endDate = (endStr<=val ? new Date(next) : this.order.end)
        } else {
          console.log(val, new Date(val))
          beginDate = this.order.begin
          endDate = new Date(val)
        }

        beginDate = new Date(dateFormat(beginDate, 'YYYY/MM/DD'))
        endDate = new Date(dateFormat(endDate, 'YYYY/MM/DD'))
        this.updateOrder({
          begin: beginDate,
          end: endDate,
          total_day: (endDate.getTime()-beginDate.getTime())/(24*60*60*1000)
        })

        this.$router.replace('/')
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
    padding: 0;
    margin: 0;
  }

  .tip {
    height: 1.8rem;
    line-height: 1.8rem;
    background: #EDEDED;
    text-align: center;
  }
</style>
