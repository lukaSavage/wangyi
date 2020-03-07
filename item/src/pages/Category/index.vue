<template>
    <div class="category-body">
        <div class="category">
            <div class="category-header">
                <Search />
            </div>
        </div>
        <div class="category-left">
            <ul class="category-left-list">
                <li v-for="(item) in dataBase" :key="item.id">
                    <a href="#">{{item.name}}</a>
                </li>
            </ul>
        </div>
        <div class="category-right"></div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

import Search from '../../components/Search'
import datas from '../../../static/cateNavDatas.json'
export default {
    name: 'Category',
    components: {
        Search
    },
    data() {
        return {
            dataBase: datas.categoryL1List
        }
    },
    mounted() {
        // 创建列表滑动
        new BScroll('.category-left')
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
    background-color #08e
    .category
        width 100%
        height 43.64px
        background-color #ccc
        position fixed
        z-index 9
        top 0
        .category-header
            padding 7px 14.88px
            height 100%
            box-sizing border-box
    .category-left
        width 80px
        height 100%
        background-color yellow
        overflow hidden
        box-sizing border-box
        .category-left-list
            overflow hidden
            padding-bottom 20px
            li
                margin-top 30px
                a
                    font-size 15px
                    display block
                    height 25px
                    text-align center
                    line-height 25px
</style>
