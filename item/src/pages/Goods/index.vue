<template>
    <div class="goods">
        <LoginHeader class="LoginHeader">值得买</LoginHeader>
        <div class="goods-swiper">
            <div class="swiper-title">
                <img src="./img/topic_bg.png" alt />
                <div class="title-concrete">
                    <img src="./img/zhideimai.png" alt />
                    <span>严选好物&nbsp;用心生活</span>
                </div>
            </div>
            <div class="swiper-content">
                <div class="swiper-wrapper">
                    <div class="swiper-li">
                        <div class="detail-li">
                            <a href="javascript:" class="li-top">
                                <div class="li-img">
                                    <img src="./img/swiper01.gif" alt="">
                                </div>
                                <div class="li-txt">
                                    <p class="main-txt">9.9超值</p>
                                    <p class="desc-txt">定价直降</p>
                                </div>
                            </a>
                            <a href="javascript:" class="li-bottom">
                                <div class="li-img">
                                    <img src="./img/swiper02.png" alt="">
                                </div>
                                <div class="li-txt">
                                    <p class="main-txt">明星商品</p>
                                    <p class="desc-txt">百万粉丝商品</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-li">
                        <div class="detail-li">
                            <a href="javascript:" class="li-top">
                                <div class="li-img">
                                    <img src="./img/swiper01.gif" alt="">
                                </div>
                                <div class="li-txt">
                                    <p class="main-txt">9.9超值</p>
                                    <p class="desc-txt">定价直降</p>
                                </div>
                            </a>
                            <a href="javascript:" class="li-bottom">
                                <div class="li-img">
                                    <img src="./img/swiper02.png" alt="">
                                </div>
                                <div class="li-txt">
                                    <p class="main-txt">明星商品</p>
                                    <p class="desc-txt">百万粉丝商品</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-li">
                        <div class="detail-li">
                            <a href="javascript:" class="li-top">
                                <div class="li-img">
                                    <img src="./img/swiper01.gif" alt="">
                                </div>
                                <div class="li-txt">
                                    <p class="main-txt">9.9超值</p>
                                    <p class="desc-txt">定价直降</p>
                                </div>
                            </a>
                            <a href="javascript:" class="li-bottom">
                                <div class="li-img">
                                    <img src="./img/swiper02.png" alt="">
                                </div>
                                <div class="li-txt">
                                    <p class="main-txt">明星商品</p>
                                    <p class="desc-txt">百万粉丝商品</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-li">
                        <div class="detail-li">
                            <a href="javascript:" class="li-top">
                                <div class="li-img">
                                    <img src="./img/swiper01.gif" alt="">
                                </div>
                                <div class="li-txt">
                                    <p class="main-txt">9.9超值</p>
                                    <p class="desc-txt">定价直降</p>
                                </div>
                            </a>
                            <a href="javascript:" class="li-bottom">
                                <div class="li-img">
                                    <img src="./img/swiper02.png" alt="">
                                </div>
                                <div class="li-txt">
                                    <p class="main-txt">明星商品</p>
                                    <p class="desc-txt">百万粉丝商品</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginHeader from '../../components/LoginHeader'
export default {
    name: 'Goods',
    components: {
        LoginHeader
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goods
    width 100%
    padding-top 50px
    box-sizing border-box
    background #eee
    height 100vh
    .LoginHeader
        height 50px
    .goods-swiper
        width 100%
        position relative
        .swiper-title
            width 100%
            position relative
            &>img
                width 100%
            .title-concrete
                position absolute
                top 30px
                width 100%
                &>img
                    width 70px
                    margin-right 5px
                &>span
                    position absolute
                    top 15px
                    color #fff
        .swiper-content
            position absolute
            top 80px
            width 100%
            padding 0 10px
            box-sizing border-box
            height 270px
            .swiper-wrapper
                width 100%
                height 100%
                background-color #fff
                border-radius 10px
                overflow hidden
                .swiper-li
                    width 90px
                    height 100%
                    float left
                    .detail-li
                        width 100%
                        box-sizing border-box
                        padding 20px 1px 3px
                        .li-top,.li-bottom
                            width 100%
                            text-align center
                            .li-img
                                margin 0 auto
                                img
                                    width 60px
                            .li-txt
                                margin-top 5px
                                font-size 14px
                                .main-txt
                                    font-weight bolder
                                    color #000
                                    margin 3px 0
                        .li-bottom
                            display block
                            margin-top 20px

                                    



</style>
