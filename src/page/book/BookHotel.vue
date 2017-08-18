<template>
    <div>
        <group>
            <div slot="title" class="group-title">
                <h5>维也纳酒店（深圳横岗新城店）</h5>
            </div>
            <cell>
                <div slot="default" class="default">
                    <p class="icon">
                        <img src="../../assets/images/food.png" alt="">
                        <img src="../../assets/images/meeting.png" alt="">
                        <img src="../../assets/images/p.png" alt="">
                        <img src="../../assets/images/wash.png" alt="">
                        <img src="../../assets/images/wifi.png" alt="">
                    </p>
                    <p class="address">
                        <img src="../../assets/images/address.png" alt="">
                        <span>深圳市龙岗区横岗镇六约社区埔厦路86号</span>
                    </p>
                </div>
                <div slot="icon" class="icon-content">
                    <img src="../../assets/images/hotel1.jpg" alt="">
                </div>
            </cell>
            <div class="tab">
                <tab active-color="#090909" defaultColor="#606060" :line-width="0">
                    <tab-item active-class="tab-active" selected @on-item-click="showList=true">
                        <h4>酒店预订</h4>
                    </tab-item>
                    <tab-item active-class="tab-active" @on-item-click="showList=false">
                        <h4>酒店介绍</h4>
                    </tab-item>
                </tab>
                <div class="list" v-if="showList" :key="showList">
                    <div class="calendar">
                        <p>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <span>入住08月03日</span>
                            <span>离店08月04日</span>
                            <span class="total">（共1天）</span>
                        </p>
                    </div>
                    <div class="title">
                        <ul class="list-inline">
                            <li class="room-type">房型</li>
                            <li>门市价</li>
                            <li>会员价</li>
                            <li>预订</li>
                        </ul>
                    </div>
                    <div class="datas" v-for="(item, index) in rooms" :key="index">
                        <ul class="list-inline">
                            <li class="room-type">
                                <p v-text="item.type"></p>
                                <p class="tip"><span v-text="item.tip"></span></p>
                            </li>
                            <li>
                                <p v-text="item.retail"></p>
                            </li>
                            <li>
                                <p v-text="item.member"></p>
                            </li>
                            <li class="btn">
                                <x-button :class="{disabled:item.isFull}" :text="item.btnTitle" :disabled="item.isFull" @click.native="book(item)"></x-button> 
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="summary" v-else :key="showList">
                    <div class="info">
                        <div class="title">
                            <i class="fa" :class="{'fa-minus-circle':showDetailed, 'fa-plus-circle': !showDetailed}" @click="showDetailed=!showDetailed"></i><h4>详细信息</h4>
                        </div>
                        <div class="content" v-if="showDetailed">
                            <p v-text="info.detailed"></p>
                        </div>
                        <div class="title">
                            <i class="fa" :class="{'fa-minus-circle':showMap, 'fa-plus-circle': !showMap}" @click="showMap=!showMap"></i><h4>酒店位置</h4>
                        </div>
                        <div class="content" v-if="showMap">
                            <img :src="info.locationImg" style="width:100%;" >
                        </div>
                    </div>
                </div>
            </div>
        </group>
    </div>
</template>
<script>
import { Group, Cell, Tab, TabItem, InlineCalendar, XButton } from 'vux'
import { mapMutations } from 'vuex'
import { rooms } from '@/mock/mock'
export default {
    name: 'book-hotel',
    components: {
        Group, Cell, Tab, TabItem, InlineCalendar, XButton
    },
    data() {
        return {
            headerTitle: '酒店详情',
            showList: true,
            rooms: [],
            info: null,
            showDetailed: true,
            showMap: true
        }
    },
    mounted() {
        this.initHeader()
        this.initRooms()
    },
    methods: {
        ...mapMutations({
            updateHeader: 'UPDATE_HEADER',
            updateRoom: 'UPDATE_ROOM'
        }),
        initHeader() {
            this.updateHeader({
                title: this.headerTitle,
                topTitle: '维也纳' + this.headerTitle,
                showRight: true
            })
        },
        initRooms() {
            this.$axios.get('http://rooms.cn').then(response => {
                this.info = response.data.info
                this.rooms = response.data.datas
                this.rooms.map(function(currentValue, index, array){
                    currentValue.member = Math.round(currentValue.retail * currentValue.rebate)
                    currentValue.btnTitle = currentValue.isFull ? '已满' : '预订'
                })
            }).catch(error => {
                console.log(error)
            })
        },
        book(item) {
            console.log(item)
            this.updateRoom({room: item})
            this.$router.push('/FillOrder')
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.group-title {
    height: 1.8rem;
    line-height: 3rem;
    margin-left: .4rem;
}

.default {
    text-align: left;
}

.default .icon img {
    width: 1.2rem;
}

.default .address {
    font-size: .7rem;
    line-height: .8rem;
}

.default .address img {
    width: .8rem;
}

.icon-content {
    margin-right: .3rem;
}

.icon-content img {
    width: 3.5rem;
    height: 3.5rem;
}

.tab {
    border-bottom: 1px solid #E0E0E0;
    border-top: 1px solid #E0E0E0;
}

.tab-active {
    background-color: #E0E0E0 !important;
}

.calendar {
    padding: .2rem .2rem 0;
    font-size: .7rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border-bottom: 1px solid #E0E0E0;
    margin-bottom: .2rem;
}

.calendar p i,
.calendar p span.total {
    color: #DB905C;
}

.list .title {
    background: #EDEEE8;
    text-align: center;
    font-size: .7rem;
    font-weight: bold;
    height: 1.5rem;
    line-height: 1.5rem;
    width: 100%;
    border-top: 1px dashed #E0E0E0;
    border-bottom: 1px dashed #E0E0E0;
}

.list-inline {
    list-style: none;
}

.list-inline li {
    float: left;
    width: 20%;
}

li.room-type {
    width: 35%;
}

.datas {
    height: 3rem;
    width: 100%;
    line-height: 3rem;
    border-bottom: 1px dashed #E0E0E0;
    text-align: center;
    font-size: .7rem;
    font-weight: 500;
}

.datas li.room-type {
    text-align: left;
    padding-left: .3rem;
    padding-top: .5rem;
    line-height: 1rem;
}

.datas .tip span {
    background: #8BC7F9;
    color: #fff;
}

.btn {
    padding-top: .5rem;
}

.btn button {
    background: #EA7A38;
    color: #fff;
    width: 90%;
    height: 2rem;
    font-size: .7rem
}

.btn .disabled {
    background: gray;
}

.info .title {
    background: #F8F8F8;
    margin-top: .3rem;
    height: 2rem;
    line-height: 2rem;
    font-size: .7rem;
    font-weight: bold;
    padding-left: .5rem;
}

.info .title h4 {
    display: inline-block;
    margin-left: .2rem;
}

.info .content {
    font-size: .7rem;
    line-height: 2;
    padding: .5rem .3rem .5rem .5rem;
}

.info .content p {
    text-align: justify;
}

</style>

