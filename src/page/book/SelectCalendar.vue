<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: 'select-calendar',
    data () {
      return {
        headerTitle: '请选入住日期'
      }
    },
    methods: {
      ...mapMutations ({
        updateHeader: 'UPDATE_HEADER',
        updateRoom: 'UPDATE_ROOM'
      }),
      initHeader () {
        this.updateHeader ({
          title: this.headerTitle,
          topTitle: '维也纳酒店详情',
          showRight: false
        })
      }
    }
  }
</script>

<style scoped>

</style>
