<template>
  <!-- <cube-page type="index-list" title="IndexList"> -->
    <!-- <div slot="content"> -->
      <div class="view-wrapper" style="top: 0;">
        <div class="index-list-wrapper">
          <cube-index-list
            :data="cityData"
            :title="title"
            @select="selectItem"
            @title-click="clickTitle">
          </cube-index-list>
        </div>
      </div>
    <!-- </div> -->
  <!-- </cube-page> -->
  <!-- <div>
    <cube-index-list
      :data="cityData"
      :title="title"
      @select="selectItem"
      @title-click="clickTitle">
    </cube-index-list>
  </div> -->
</template>

<script>
  import CubePage from '@/components/cube-page.vue'
  import cityData from '@/data/index-list.json'
  export default {
    components: {
      CubePage
    },
    data() {
      return {
        title: '当前城市:',
        cityData: []
      }
    },
    methods: {
      getCityList() {
        console.log(this.$route.params.city)
        this.title = `当前城市: ${this.$route.params.city}`
        this.$axios.get ('/api/hotel/city')
          .then(res => {
            // console.log(res.data)
            const hot = {
              "name": "★ 热门城市",
              "shortcut": "★",
              "items": [
                {
                  "name": "北京",
                  "value": 1
                },
                {
                  "name": "上海",
                  "value": 2
                },
                {
                  "name": "广州",
                  "value": 3
                },
                {
                  "name": "深圳",
                  "value": 4
                }
              ]
            }
            res.data.unshift(hot)

            // console.log(res.data)

            this.cityData = res.data
          })
          .catch(err => {
            console.log(err)
          })
  //         .then (response => {
  // //          console.log(response.data)
  //           this.hotel = response.data
  //           this.updateHotel ({hotel: this.hotel})
  //         }).catch (error => {
  //           console.log (error)
  //         })
      },
      selectItem(item) {
        console.log(item)
        this.$router.push({
          name: 'Home',
          params: {
            city: item.name
          }
        })
      },
      clickTitle(title) {
        console.log(title)
      }
    },
    mounted() {
      this.getCityList()
    }
  }
</script>

<style scoped>
  .view-wrapper {
    position: fixed;
    top: 54px;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .view-wrapper .index-list-wrapper {
    height: 98%;
    width: 94%;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
