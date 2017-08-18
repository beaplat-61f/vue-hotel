<template>
  <div class="order-info">

  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
        return {
           headerTitle: '订单详情'
        }
    },
    computed: {
      ...mapState({
          room: state=>state.room,
          system: state=>state.system
      })
    },
    mounted() {
        this.initHeader()
    },
    methods: {
        ...mapMutations({
            updateHeader: 'UPDATE_HEADER',
            updateRoom: 'UPDATE_ROOM'
        }),
        initHeader() {
            this.updateHeader({
                title: this.headerTitle,
                topTitle: '维也纳酒店',
                showRight: false
            })
        },
        submit() {
            this.updateRoom({room: this.room})
            this.$router.push('/OrderInfo')
        }
    }
}
</script>

<style scoped>

</style>


