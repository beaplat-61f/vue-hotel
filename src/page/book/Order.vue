<template>
    <div class="order">
        <div class="tab">
            <tab active-color="#F07626" defaultColor="#606060" :line-width="3">
                <tab-item selected @on-item-click="changeTab">
                    <h4>全部</h4>
                </tab-item>
                <tab-item @on-item-click="changeTab">
                    <h4>未入住</h4>
                </tab-item>
                <tab-item @on-item-click="changeTab">
                    <h4>已入住</h4>
                </tab-item>
                <tab-item @on-item-click="changeTab">
                    <h4>取消</h4>
                </tab-item>
            </tab>
        </div>
        <div class="timeline">
            <timeline>
                <timeline-item>
                    <div class="time"><span>04/10</span></div>
                    <div class="info">
                        <h5>广州科学城店</h5>
                        <p>入住2017年10月04日</p>
                        <p>离店2017年10月05日</p>
                        <p>雅致双人房 &nbsp;房间数：1</p>
                        <p><img src="../../assets/images/address.png" alt="">020-82512666</p>
                        <p><img src="../../assets/images/address.png" alt="">广州市黄埔区开创大道</p>
                    </div>
                </timeline-item>
            </timeline>
        </div>
    </div>
</template>

<script>
import { Timeline, TimelineItem, Tab, TabItem } from 'vux'
import { mapMutations } from 'vuex'
export default {
    name: 'order',
    data() {
        return {
            headerTitle: '我的订单',
            tabIndex: 0
        }
    },
    components: {
        Timeline, TimelineItem, Tab, TabItem
    },
    methods: {
        ...mapMutations({
            updateHeader: 'UPDATE_HEADER'
        }),
        initHeader() {
            this.updateHeader({
                title: this.headerTitle,
                topTitle: this.headerTitle,
                showRight: false
            })
        },
        changeTab(index) {
            this.tabIndex = index
        }
    },
    mounted() {
        this.initHeader()
    }
}
</script>

<style scoped>
.vux-timeline-item-content {
    position: relative !important;
}

.time {
    position: relative;
    font-size: .3rem;
    left: -3rem;
    top: .1rem;
    color: #96978F;
}
</style>


