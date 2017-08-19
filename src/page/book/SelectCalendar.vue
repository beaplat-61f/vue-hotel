<template>
  <div id="select-calendar">
    <transition name="fade">
      <div class="calendar-dialog" v-if="calendarFilter.show">
        <div class="calendar-dialog-mask" @click="closeByDialog"></div>

        <div class="calendar-dialog-body">
          <calendar ref="calendar" :range="calendarFilter.range" :zero="calendarFilter.zero" :lunar="calendarFilter.lunar" :value="calendarFilter.value"
                    @select="calendarFilter.select"></calendar>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
  import {dateFormat} from 'vux'
  import {mapMutations} from 'vuex'
  import calendar from '../../components/calendar/calendar.vue'

  export default {
    name: 'select-calendar',
    components: {
      calendar
    },
    data () {
      return {
        headerTitle: '请选入住日期',
        calendar: {
          show: true,
          range: true,
          zero: true,
          value: [[2018, 8, 19], [2018, 8, 20]], //默认日期
          lunar: true, //显示农历
          select: (begin, end) => {
//            console.log (begin, end, new Date(begin), new Date(end), new Date(end).getDate()-new Date(begin).getDate())
            let beginDate = new Date(begin),
                endDate = new Date(end),
                now = new Date(dateFormat(new Date(), 'YYYY/MM/DD').split('/')),
                nextDay = new Date(dateFormat((new Date()).setDate(now.getDate()+1), 'YYYY/MM/DD').split('/'))
//            debugger

            if (beginDate.getTime()<now.getTime()) {
              beginDate = now
            }

            if (endDate.getTime()<nextDay.getTime()) {
              endDate = nextDay
            }

            this.updateOrder({
              begin: beginDate,
              end: endDate,
              total_day: (endDate.getTime()-beginDate.getTime())/(24*60*60*1000)
            })

            let beginStr = dateFormat(beginDate, 'YYYY/MM/DD'),
                endStr = dateFormat(endDate, 'YYYY/MM/DD'),
                beginArr = beginStr.split('/'),
                endArr = endStr.split('/')

            this.calendar.value = [beginArr, endArr]
            console.log(this.$refs.calendar.days)
            this.$router.back()
          }
        }
      }
    },
    computed: {
      calendarFilter() {
        let now = new Date(),
            nextDay = new Date((new Date()).setDate(now.getDate()+1))
        this.calendar.value = [dateFormat(now, 'YYYY/MM/DD').split('/'), dateFormat(nextDay, 'YYYY/MM/DD').split('/')]
        return this.calendar
      }
    },
    methods: {
      ...mapMutations ({
        updateHeader: 'UPDATE_HEADER',
        updateRoom: 'UPDATE_ROOM',
        updateOrder: 'UPDATE_ORDER'
      }),
      initHeader () {
        this.updateHeader ({
          title: this.headerTitle,
          topTitle: '维也纳酒店详情',
          showRight: false
        })
      },
      closeByDialog(){
        this.calendar.show=false;
      }
    },
    mounted () {
      this.initHeader ()
    }
  }
</script>

<style scoped>

</style>
