<template>
    <div class="home-search">
        <div class="search-top">
            <div class="search-header">
                <form action="#">
                    <input type="text" placeholder="好货内部价"/>
                </form>
            </div>
            <span @click="$router.back()">取消</span>
        </div>
        <div class="search-bottom">
            <header class="suggest-header">
                <h1>热门搜索</h1>
            </header>
            <nav class="suggest-nav">
                <a href="#" class="on">停课不停学</a>
                <a href="#">口罩</a>
                <a href="#">口罩</a>
                <a href="#">口罩</a>
                <a href="#">口罩</a>
                <a href="#">口罩</a>
                <a href="#">锅</a>
                <a href="#">锅</a>
                <a href="#">锅</a>
                <a href="#">锅</a>
                <a href="#">锅</a>
                <a href="#">锅</a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchInfo'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.home-search
    width 100%
    height 100vh
    background-color #eee
    .search-top
        width 100%
        height 43.64px
        box-sizing border-box
        padding 0 15px
        display flex
        justify-content space-between
        align-items center
        background-color #fff
        .search-header
            width 305px
            height 30px
            background-color #f4f4f4
            box-sizing border-box
            padding 0 12px
            form
                width 100%
                height 100%
                line-height 30px
                text-align right
                position relative
                &::before
                    content ' '
                    width 14px
                    height 14px
                    background url(./img/search.webp) no-repeat 0 0/100%
                    position absolute
                    top 50%
                    margin-top -7px
                    left -2px
                input
                    height 20px
                    width 260px
                    outline none
                    background-color #f4f4f4
    .search-bottom
        width 100%
        min-height 150px
        background-color #fff      
        box-sizing border-box
        padding 0 15px 15px 
        .suggest-header
            height 50px
            h1
                height 100%
                line-height 50px 
                color #999
        .suggest-nav
            a
                height 22px
                line-height 25px
                display inline-block
                margin 0 16px 15px 0
                padding 0 10px
                font-size 14px
                border 1px solid #999
                color #333
                &.on
                    color #dd1a21
                    border 1px solid #dd1a21  
</style>
