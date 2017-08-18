<template>
  <div>
    <div class="header">
      <div class="msg-tip" v-if="showMsgtip">
        <a class="hide-tip" @click="closeMsg">&times;</a>
        <span v-text="topTitle"></span>
        <a class="vertical-text">&hellip;</a>
      </div>
      <x-header :left-options="{backText: ''}" :title="title">
        <a slot="right">
          <slot name="rightContent"></slot>
        </a>
      </x-header>
    </div>
  </div>
</template>

<script>
import { XHeader, TransferDom } from 'vux'

export default {
  name: 'topbar',
  data() {
    return {
      showMsgtip: true
    }
  },
  directives: {
    TransferDom
  },
  components: {
    XHeader
  },
  props: ['title', 'topTitle'],
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    closeMsg() {
      this.showMsgtip = !this.showMsgtip
    }
  }
}
</script>

<style scoped>
.msg-tip {
  background-color: #373B3E;
  color: #fff;
  font-size: .9rem;
  height: 2.5rem;
  line-height: 2.5rem;
  position: relative;
}

.hide-tip {
  position: relative;
  top: .25rem;
  font-size: 1.8rem;
  line-height: 2rem;
  height: 2rem;
  display: inline-block;
  padding: 0 .7rem;
  border-right: #2F3336 solid .1rem;
  margin-right: .4rem;
}

.vertical-text {
  position: absolute;
  right: .5rem;
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  /* IE 9 */
  -moz-transform: rotate(90deg);
  /* Firefox */
  -webkit-transform: rotate(90deg);
  /* Safari 和 Chrome */
  -o-transform: rotate(90deg);
  /* Opera */
}
</style>
