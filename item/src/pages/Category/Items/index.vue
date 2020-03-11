<template>
    <div class="swiper">
        <div class="item">
            <div class="category-right-img">
                <img :src="tempData.bannerUrl" alt />
            </div>
            <div class="category-right-item" v-show="tempData2.categoryList">
                <ul>
                    <li v-for="(item) in tempData2.categoryList" :key="item.id">
                        <div class="content">
                            <img :src="item.wapBannerUrl" alt />
                            <p>{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="category-right-item" v-show="tempData2.subCateList">
                <ul>
                    <li v-for="(item) in tempData2.subCateList" :key="item.id">
                        <div class="content">
                            <img :src="item.wapBannerUrl" alt />
                            <p>{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import datas from '../../../../static/cateNavDatas.json'
import cateLists from '../../../../static/cateLists.json'
import BScroll from 'better-scroll'
export default {
    name: 'Items',
    props: ['on'],
    data() {
        return {
            
        }
    },
    computed: {
        tempData:{
            get(){
                return datas.categoryL1List.find(item => item.id === this.on)
            },
            set(){}
        },
        tempData2:{
            get(){
                return cateLists.find(item => item.id === this.on)
            },
            set(){}
        }
    },
    async mounted() {
        // const res = datas.categoryL1List.find(item => item.id === 11)
        // const res2 = cateLists.find(item => item.id === 11)
        // this.tempData = res
        // this.tempData2 = res2
        // 创建列表滑动
        await new BScroll('.swiper', {
            click: true
        })
        // this.$store.dispatch('getId',this.on)
        console.log(this.on)
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.swiper
    width 100%
    height 100%
    .item
        width 100%
        overflow hidden
        .category-right-img
            margin-bottom 15px
            img
                width 100%
        .category-right-item
            width 100%
            margin-top 15px
            ul
                display flex
                flex-wrap wrap
                li
                    width 73px
                    height 110px
                    margin-right 15px
                    .content
                        width 100%
                        height 100%
                        img
                            width 73px
                            height 73px
</style>
