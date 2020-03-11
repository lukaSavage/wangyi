<template>
    <footer id="footer">
        <a class="footer-item" :class="{on:$route.path==='/'}" @click="goto('/')">
            <span class="item_icon">
                <i class="iconfont icon-shouye"></i>
            </span>
            <span>首页</span>
        </a>
        <a class="footer-item" :class="{on:$route.path==='/category/cateList'}" @click="goto('/category/cateList')">
            <span class="item_icon">
                <i class="iconfont icon-choutigui"></i>
            </span>
            <span>分类</span>
        </a>
        <a class="footer-item" :class="{on:$route.path==='/goods'}" @click="goto('/goods')">
            <span class="item_icon">
                <i class="iconfont icon-tupian"></i>
            </span>
            <span>值得买</span>
        </a>
        <a class="footer-item" :class="{on:$route.path==='/cart'}" @click="goto('/cart')">
            <span class="item_icon">
                <i class="iconfont icon-gouwuche"></i>
            </span>
            <span>购物车</span>
        </a>
        <a class="footer-item" :class="{on:$route.path==='/personal'}" @click="goto('/personal')">
            <span class="item_icon">
                <i class="iconfont icon-geren"></i>
            </span>
            <span>个人</span>
        </a>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {}
    },
    methods: {
        goto(path) {
            // 为了防止用户多点，做限制
            if (this.$route.path !== path) {
                this.$router.replace(path)
            }
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#footer
    width 100%
    height 50px
    position fixed
    bottom 0
    display flex
    background-color #fff
    z-index 999
    border-top 1px solid #eee
    .footer-item
        display flex
        flex 1
        text-align center
        flex-direction column
        align-items center
        margin 5px
        color #999999
        &.on
            color red
        span
            font-size 12px
            margin-top 2px
            margin-bottom 2px
            .iconfont
                font-size 22px
</style>
