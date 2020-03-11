<template>
    <div class="personal-header">
        <a href="/" class="logo"></a>
        <slot><i></i></slot>
        <div class="right">
            <a href="#" class="search"></a>
            <a href="#" class="cart"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginHeader'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.personal-header
    width 100%
    height 43.64px
    padding 0 10px 0 15px
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    background #f4f4f4
    border 1px solid #eee
    position fixed
    top 0
    .logo
        width 30px
        height 30px
        display block
        background url('./img/home.webp') no-repeat 0 -35px / 90px
    i
        width 90px
        height 30px
        display block
        background url('./img/logo.webp') no-repeat 0 5px / 90%
        margin-left 35px
    .right
        width 80px
        height 30px
        display flex
        justify-content space-between
        align-items center
        .search, .cart
            width 30px
            height 30px
            display block
            background url('./img/home.webp') no-repeat
            background-size 90px
        .search
            background url('./img/home.webp') no-repeat 0 -185px
            background-size 90px
</style>
