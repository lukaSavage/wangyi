<template>
    <div class="home">
        <header class="home-header">
            <div class="header-top">
                <h1 id="logo"></h1>
                <!-- <input type="text" class="search" placeholder="搜索商品,共24027款好物"> -->
                <Search />
                <button class="login">登录</button>
            </div>
            <div class="header-bottom"></div>
        </header>
        <section class="home-carousel"></section>
        <section class="home-grow"></section>
        <section class="home-list"></section>
        <section class="home-newpeople"></section>
        <section class="home-sell"></section>
        <section class="home-shopping"></section>
        <section class="home-publish"></section>
        <section class="home-choice"></section>
        <section class="home-bottom"></section>
    </div>
</template>

<script>
import Search from '../../components/Search'
export default {
    name: 'Index',
    components: {
        Search
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home   
    width 100%
    background-color #ccc  
    .home-header
        height 76px  
        .header-top 
            height 46px
            padding 7.9px 14.88px
            background-color red
            box-sizing border-box
            display flex
            justify-content space-between
            align-items center
            #logo
                width 108.4px
                height 19.8px
                background url(./img/logo.webp) no-repeat 100%/100%
                margin-right 10px
            .login
                outline none 
                border 1px solid red
                padding 0
                border-radius 5px
                color red
                background #fff
                width 56.7px
                height 19.8px
                font-size 12px
                margin-left 7px
        .header-bottom
            height 30px
            background-color #08e


</style>
