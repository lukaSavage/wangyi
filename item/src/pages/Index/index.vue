<template>
    <div class="home">
        <!-- 头部 -->
        <header class="home-header">
            <div class="header-top">
                <h1 id="logo"></h1>
                <!-- <input type="text" class="search" placeholder="搜索商品,共24027款好物"> -->
                <Search />
                <button class="login">登录</button>
            </div>
            <div class="header-bottom">
                <div class="tab-scroll">
                    <div class="tab-swiper">
                        <ul>
                            <li
                                v-for="(item) in dataBase"
                                :key="item.id"
                                :class="{on:tempId===item.id}"
                                @click="click2(item.id)"
                            >{{item.name}}</li>
                        </ul>
                    </div>
                </div>
                <div class="tab-wrap" v-show="toggle">
                    <div class="wrap-header">全部频道</div>
                    <ul>
                        <li
                            v-for="(item) in dataBase"
                            :key="item.id"
                            :class="{on:tempId===item.id}"
                            @click="click2(item.id)"
                        >{{item.name}}</li>
                    </ul>
                </div>
                <div class="tab-mask" v-show="toggle" @click.stop="click"></div>
                <div class="toggle" @click.stop="click">
                    <i ref="r" :class="toggle?'up':'down'"></i>
                </div>
            </div>
        </header>
        <!-- 轮播图部分 -->
        <section class="swiper-container">
            <ul class="swiper-wrapper">
                <li v-for="(item) in carouselImg" :key="item.id" class="swiper-slide">
                    <a href="#">
                        <img :src="item.picUrl" alt />
                    </a>
                </li>
            </ul>
            <ol class="swiper-pagination ol">
            </ol>
        </section>
        <section class="home-grow">
            <ul>
                <li>
                    <i class="one"></i>
                    <span>网易自营品牌</span>
                </li>
                <li>
                    <i class="two"></i>
                    <span>30天无忧退货</span>
                </li>
                <li>
                    <i class="three"></i>
                    <span>48小时快速退货</span>
                </li>
            </ul>
        </section>
        <section class="home-list">
            <ul>
                <li v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
                    <img :src="item.picUrl" alt />
                    <p>{{item.text}}</p>
                </li>
            </ul>
        </section>
        <section class="home-newpeople">
            <div class="newpeople-header">
                <span>—&nbsp;新人专享&nbsp;—</span>
            </div>
            <div class="newpeople-main">
                <a href="#" class="left">
                    <div class="new">新人专享礼包</div>
                    <div class="img">
                        <img src="./img/newpeople.png" alt />
                    </div>
                </a>
                <div class="right">
                    <a href="#">
                        <div class="module1">
                            <div class="title1">福利社</div>
                            <div class="title2">今日特价</div>
                            <div class="img">
                                <img src="./img/tea.webp" alt />
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="module2">
                            <div class="title">新人拼团</div>
                            <div class="target">1元起包邮</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <section class="home-sell"></section>
        <section class="home-shopping"></section>
        <section class="home-publish"></section>
        <section class="home-choice"></section>
        <section class="home-bottom">
            <div class="bd">
                <a href="#">下载APP</a>
                <a href="#">电脑版</a>
            </div>
            <div class="copy">
                <p>网易公司版权所有&copy;1997-2020</p>
                <p>食品经营许可证: JY13301080111719</p>
            </div>
        </section>
    </div>
</template>

<script>
import Search from '../../components/Search'
import BScroll from 'better-scroll'
import indexCate from '../../../static/indexCateModule.json'
import indexData from '../../../static/index.json'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'Index',
    components: {
        Search
    },
    data() {
        return {
            dataBase: indexCate,
            toggle: false,
            carouselImg: indexData.focusList,
            indexData,
            tempId: 1005000
        }
    },
    methods: {
        click() {
            this.toggle = !this.toggle
        },
        click2(id) {
            this.tempId = id
        }
    },
    mounted() {
        new BScroll('.tab-swiper', {
            scrollX: true,
            click: true
        })
        new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                bulletElement: 'li',
                bulletClass: 'my-bullet',
                bulletActiveClass: 'on'
            }
        })
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.ol
    width 100%
    position absolute
    text-align center
    bottom 15px
    z-index 3
.my-bullet
    width 22px
    height 3px
    background-color #ffffff50
    display inline-block
    margin-left 5px
    &.on
        background-color #fff
.home
    width 100%
    padding-top 76px
    padding-bottom 50px
    box-sizing border-box
    background-color #eee
    .home-header
        width 100%
        height 76px
        margin-bottom 1px
        position fixed
        z-index 99
        top 0
        background #fff
        .header-top
            height 46px
            padding 7.9px 14.88px
            box-sizing border-box
            display flex
            justify-content space-between
            align-items center
            #logo
                width 108.4px
                height 19.8px
                background url('./img/logo.webp') no-repeat 100% / 100%
                margin-right 10px
            .login
                outline none
                border 1px solid #DD1A21
                padding 0
                border-radius 5px
                color #DD1A21
                background #fff
                width 56.7px
                height 19.8px
                font-size 12px
                margin-left 7px
        .header-bottom
            height 30px
            position relative
            .tab-scroll
                width 100%
                height 100%
                padding-right 50px
                box-sizing border-box
                .tab-swiper
                    width 100%
                    height 100%
                    overflow hidden
                    ul
                        width 660px
                        height 100%
                        padding-left 15px
                        li
                            height 100%
                            display inline-block
                            text-align center
                            line-height 30px
                            font-size 14px
                            padding 0 10px
                            box-sizing border-box
                            &.on
                                border-bottom 1px solid #DD1A21
                                color #DD1A21
            .tab-wrap
                width 100%
                background-color #fff
                position absolute
                z-index 4
                top 0
                .wrap-header
                    height 30px
                    padding-left 15px
                    box-sizing border-box
                    line-height 30px
                    font-size 14px
                ul
                    width 100%
                    padding-top 14px
                    box-sizing border-box
                    li
                        margin 0 0 20px 15px
                        width 76px
                        height 27px
                        text-align center
                        line-height 27px
                        float left
                        border 1px solid #999
                        background-color #eee
                        font-size 14px
                        &.on
                            border 1px solid #DD1A21
                            color #DD1A21
            .tab-mask
                position fixed
                top 46px
                z-index 3
                width 100%
                height 100%
                background-color rgba(0, 0, 0, 0.5)
            .toggle
                width 50px
                height 100%
                position absolute
                right 0
                top 0
                display flex
                justify-content center
                align-items center
                z-index 5
                i
                    width 16px
                    height 16px
                    display block
                    background url('./img/toggle.webp') no-repeat 100% / 100%
                    transition all 0.5s
                    &.up
                        transform rotate(180deg)
                    &.down
                        trnasform rotate(-180deg)
    .swiper-container
        width 100%
        position relative
        overflow hidden
        ul
            width 1000%
            position relative
            overflow hidden
            li
                width 10%
                float left
                img
                    width 100%
                    display block
.home-grow
    width 100%
    height 37px
    padding 0 15px
    box-sizing border-box
    background-color #fff
    ul
        width 100%
        height 100%
        display flex
        li
            text-align center
            line-height 37px
            font-size 14px
            i
                display inline-block
                width 14px
                height 14px
                margin-right 3px
                &.one
                    background url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png') no-repeat 100% / 100% // yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png) no-repeat 100%/100%
                &.two
                    background url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png') no-repeat 100% / 100% // yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png) no-repeat 100%/100%
                &.three
                    background url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png') no-repeat 100% / 100% // yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png) no-repeat 100%/100%
.home-list
    width 100%
    overflow hidden
    background-color #fff
    ul
        width 100%
        li
            width 20%
            height 84px
            float left
            box-sizing border-box
            padding 0 7px
            img
                width 100%
            p
                font-size 14px
.home-newpeople
    width 100%
    margin 15px 0
    background-color #fff
    .newpeople-header
        width 100%
        height 40px
        text-align center
        box-sizing border-box
        padding 0 15px
        line-height 40px
    .newpeople-main
        margin 0 15px
        display flex
        padding-bottom 20px
        .left
            width 50%
            height 220px
            display block
            background-color #F9E9CF
            margin-right 3px
            color #333333
            .new
                box-sizing border-box
                width 100%
                padding 15px 0 0 15px
            .img
                width 100%
                height 205px
                text-align center
                line-height 205px
                img
                    width 130px
                    height 130px
                    margin-top 50%
                    transform translateY(-50%)
        .right
            width 50%
            height 220px
            .module1
                width 100%
                height calc(50% - 1.5px)
                margin-bottom 3px
                background-color #FBE2D3
                border-radius 5px
                padding 10px 0 0 15px
                box-sizing border-box
                position relative
                .title1
                    height 25px
                    color #333333
                .img
                    width 100px
                    height 100px
                    position absolute
                    right 0
                    bottom 0
                    img
                        width 100%
                        height 100%
            .module2
                width 100%
                height calc(50% - 1.5px)
                background-color #FBE2D3
                border-radius 3px
                box-sizing border-box
                padding 10px 0 0 15px
                .title
                    color #333333
                .target
                    display inline-block
                    background-color #CBB693
                    padding 1px 3px
                    margin-top 3px
                    color #fff
                    font-size 14px
.home-bottom
    width 100%
    box-sizing border-box
    padding 30px 15px 15px
    background-color #333
    text-align center
    .bd
        margin-bottom 20px
        a
            display inline-block
            width 80px
            height 30px
            border 1px solid #fff
            text-align center
            line-height 30px
            color #fff
            font-size 14px
            &:first-child
                margin-right 25px
    .copy
        color #999
</style>
