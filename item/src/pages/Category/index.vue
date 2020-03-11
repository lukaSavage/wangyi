<template>
    <div class="category-body">
        <div class="category">
            <div class="category-header">
                <Search />
            </div>
        </div>
        <section class="category-center">
            <div class="category-left">
                <ul class="category-left-list">
                    <li v-for="(item) in dataBase" :key="item.id">
                        <router-link
                            :to="{path:`/category/cateList`,query:{categoryId:item.id}}"
                            class="cls"
                            :class="{on: on===item.id}"
                        >{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="category-right">
                <Items :on="this.on" />
            </div>
        </section>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

import Search from '../../components/Search'
import Items from './Items'
import datas from '../../../static/cateNavDatas.json'

// import { mapState } from 'vuex'
export default {
    name: 'Category',
    components: {
        Search,
        Items
    },
    data() {
        return {
            dataBase: datas.categoryL1List,
        }
    },
    computed: {
        on(){
            return this.$route.query.categoryId*1 || 11
        },
    },
    
    mounted() {
        // 创建列表滑动
        new BScroll('.category-left', {
            click: true
        })
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.category-body
    width 100%
    height 100vh
    padding-top 43.64px
    padding-bottom 50px
    box-sizing border-box
    .category
        width 100%
        height 43.64px
        position fixed
        z-index 9
        top 0
        background-color #fff
        .category-header
            padding 7px 14.88px
            height 100%
            box-sizing border-box
    .category-center
        width 100%
        height 100%
        border-top 2px solid #eee
        .category-left
            width 80px
            height 100%
            overflow hidden
            box-sizing border-box
            float left
            border-right 1px solid #ccc
            .category-left-list
                overflow hidden
                padding-bottom 20px
                li
                    margin-top 28px
                    box-sizing border-box
                    .cls
                        font-size 15px
                        display block
                        height 25px
                        text-align center
                        line-height 25px
                        color #333
                        &.on
                            border-left 3px solid red
                            color red
        .category-right
            width calc(100% - 80px)
            height 100%
            background-color #fff
            float left
            padding 15px
            box-sizing border-box
</style>
