<template>
  <div id="main">
    <div class="not-found">
      <img src="http://echarts.baidu.com/images/404.png" alt="404">
      <div class="text">非常抱歉，您所访问的网页找不到了！您可以选择
        <router-link :to="{path: '/'}">返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '404'
  }
</script>

<style scoped>
  .not-found .link {
    margin-left: 10px;
    color: #3183c6;
  }

  .not-found .text {
    margin-top: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }

  .not-found img {
    display: block;
    width: 60%;
    margin: 0 auto;
  }

  .not-found {
    padding: 150px 0 160px;
    height: 100%;
    background-color: #2a3c54;
    overflow: hidden;
  }

  #main {
    height: 100%;
  }
</style>
