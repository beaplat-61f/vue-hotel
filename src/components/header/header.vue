<template>
  <div>
    <div class="header">
      <x-header :left-options="{backText: ''}" :title="title"></x-header>
    </div>
  </div>

</template>

<script>
  import {XHeader, TransferDom} from 'vux'

  export default {
    name: 'topbar',
    data () {
      return {

      }
    },
    directives: {
      TransferDom
    },
    components: {
      XHeader
    },
    props: ['title'],
    methods: {
      goBack () {
        this.$router.go (-1)
      }
    }
  }
</script>

<style scoped>

</style>
