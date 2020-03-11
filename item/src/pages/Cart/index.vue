<template>
    <div class="cart">
        <div class="cart-header">
            <span>购物车</span>
            <div class="right">领劵</div>
        </div>
        <div class="cart-item">
            <ul>
                <li>
                    <i></i>30天无忧退货
                </li>
                <li>
                    <i></i>48小时快速退货
                </li>
                <li>
                    <i></i>满88元免邮费
                </li>
            </ul>
        </div>
        <div class="container">
            <div class="img">
                <img src="./img/cart.webp" alt />
                <div class="txt">
                    <p>去添加点什么吧</p>
                    <div class="login">登录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cart
    width 100%
    height 100%
    background-color #f4f4f4
    overflow hidden
    .cart-header
        height 43.64px
        background-color #fff
        padding 0 15px
        position relative
        span
            display inline-block
            color #333
            font-size 20px
            height 100%
            line-height 43.64px
        .right
            font-size 14px
            position absolute
            width 60px
            height 43.64px
            line-height 43.64px
            right 0
            top 0
            color #DD1A21
    .cart-item
        width 100%
        background-color #eee
        box-sizing border-box
        padding 0 15px
        ul
            width 100%
            height 35px
            display flex
            justify-content space-between
            li
                line-height 35px
                font-size 14px
                color #666
                i
                    width 5px
                    height 5px
                    display inline-block
                    vertical-align middle
                    margin-right 3px
                    background url('./img/dot.webp') no-repeat 100% / 100%
    .container
        position absolute
        top 43.64px
        width 100%
        height calc(100% - 43.64px)
        background-color #f4f4f4
        z-index -1
        .img
            width 100%
            height 150px
            position absolute
            top 50%
            margin-top -75px
            text-align center
            img
                width 130px
                height 130px
            .txt
                width 100%
                p
                    text-align center
                    color #999
                    font-size 14px
                    margin-bottom 25px
                .login
                    width 230px
                    height 50px
                    text-align center
                    line-height 50px
                    margin 0 auto
                    background-color #DD1a21
                    color #fff
</style>
