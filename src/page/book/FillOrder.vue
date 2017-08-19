<template>
    <div class="fill-order">
        <group>
            <cell>
                <div slot="title" class="title">
                    <div class="address">
                        <h5>维也纳国际酒店（广州萝岗科学城店）</h5>
                    </div>
                    <div class="calendar">
                        <p>
                            <!--<i class="fa fa-calendar" aria-hidden="true"></i>-->
                            <span style="display: block; float: left; padding-top: .2rem; margin-right: .1rem;"><img style="width: .9rem;" src="../../assets/images/icon_HS_date.png" alt=""></span>
                            <span>入住08月03日</span>
                            <span>离店08月04日</span>
                            <span class="total">（共1天）</span>
                        </p>
                    </div>
                </div>
            </cell>
            <x-number :title="room.type" :min="1" v-model="roomNum"></x-number>
        </group>
        <div class="personal">
            <group>
                <ul class="no-list-style">
                    <li>
                        <span class="label">联系人</span>
                        <span class="content">维也纳酒店会员</span>
                    </li>
                    <li>
                        <span class="label">手机</span>
                        <span class="content">13100000000</span>
                    </li>
                    <li>
                        <span class="label">到店时间</span>
                        <span class="content">
                            <datetime v-model="arrivalTime" format="HH:mm" :hour-list="['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']" :minute-list="['00', '15', '30', '45']" ></datetime>
                        </span>
                    </li>
                </ul>
            </group>
        </div>
        <div class="coupon">
            <span>
                <p>现金券</p>
            </span>
            <span></span>
        </div>
        <div class="remark">
            <group>
                <x-input title="备注" v-model.trim="remark" placeholder="请在此处填写特殊要求"></x-input>
            </group>
        </div>
        <div class="tip">
            <group>
                <cell>
                    <div class="icon" slot="icon">
                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                    </div>
                    <div slot="title" class="title">
                        <p v-text="system.remark"></p>
                    </div>
                </cell>
            </group>
        </div>
        <div class="submit">
            <group>
                <cell>
                    <div slot="default" class="default">
                        <x-button @click.native="submit">提交订单</x-button>
                    </div>
                    <div slot="title" class="title">
                        <span>总价：<strong>￥338</strong><span>(已优惠60元)</span></span>
                    </div>
                </cell>
            </group>
        </div>
    </div>
</template>

<script>
import { Group, Cell, XNumber, Datetime, XInput, XButton } from 'vux'
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'fill-order',
    components: {
        Group, Cell, XNumber, Datetime, XInput, XButton
    },
    data () {
        return {
           headerTitle: '填写订单',
           roomNum: 1,
           arrivalTime: '19:00',
           remark: '',
           total: 0,
           offer: 0
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
            this.$router.push('/OrderPay')
        }
    }
}
</script>

<style scoped>
* {
    font-size: .7rem;
    color: #B9B9B9;
}

.fill-order {
    background: #E5E5E5;
}

.calendar {
    padding: .2rem 0 0;
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

.personal {
    background: #fff;
    margin-top: .3rem;
}

.personal ul li {
    height: 2rem;
    line-height: 2rem;
    padding-left: .75rem;
}

.personal ul li span {
    width: 48%;
    display: inline-block;
}

.personal ul li span.content {
    color: #DB905C;
}

.personal ul li:first-child {
    border-bottom: .05rem solid #AFAFAF;
}

.personal ul li:last-child {
    border-top: .05rem solid #AFAFAF;
}

.coupon {
    height: 2rem;
    line-height: 2rem;
    margin: .3rem auto;
}

.coupon span {
    display: inline-block;
    width: 49%;
    height: 100%;
    background: #fff;
}

.coupon span p {
    margin-left: .75rem;
}

.coupon span:last-child {
    margin-left: .2rem;
    float: right;
}

.tip {
    background: #E5E5E5;
}

.tip .icon {
    position: absolute;
    top: .5rem;
}

.tip .title {
    margin-left: 1rem;
}

.submit {
    background-color: #fff;
}

.submit span strong {
    color: #EA7B36;
    font-size: .8rem;
}

.submit button {
    background: #EA7B36;
    color: #fff;
    font-size: .7rem;
}
</style>

