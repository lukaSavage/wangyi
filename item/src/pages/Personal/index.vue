<template>
    <div class="personal">
        <LoginHeader />
        <div class="personal-content" v-show="isLogin">
            <div class="content-top">
                <img src="./img/center.png" alt />
            </div>
            <div class="content-bottom">
                <div class="bottom-login">
                    <div class="use-phone" @click="goto('phone')">
                        <i></i>
                        手机号快捷登录
                    </div>
                    <div class="use-email" @click="goto('email')">
                        <i></i>
                        邮箱账号登录
                    </div>
                </div>
                <div class="third-login">
                    <ul>
                        <li class="weixin">
                            <i></i>
                            <span>微信</span>
                        </li>
                        <li class="qq">
                            <i></i>
                            <span>QQ</span>
                        </li>
                        <li class="weibo">
                            <i></i>
                            <span>微博</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <UseEmail v-show="isEmail" />
        <UsePhone v-show="isPhone" />
    </div>
</template>

<script>
import { mapState } from 'vuex'

import LoginHeader from '../../components/LoginHeader'
import UseEmail from './UseEmail'
import UsePhone from './UsePhone'
export default {
    name: 'Personal',
    components: {
        LoginHeader,
        UsePhone,
        UseEmail
    },
    data() {
        return {
            // 多个组件要用，存放到vuex中
            // isLogin: true,
            // isEmail: false,
            // isPhone: false
        }
    },
    computed: {
        ...mapState({
            isLogin: state => state.personal.isLogin,
            isEmail: state => state.personal.isEmail,
            isPhone: state => state.personal.isPhone
        })
    },
    methods: {
        goto(target) {
            this.$store.dispatch('toLogin', false)
            if (target === 'phone') {
                this.$store.dispatch('toPhone', true)
            } else {
                this.$store.dispatch('toEmail', true)
            }
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.personal
    height 100vh
    .personal-content
        width 100%
        height 100%
        box-sizing border-box
        padding-top 43.64px
        background-color #f2f5f4
        .content-top
            width 100%
            height 50%
            box-sizing border-box
            display flex
            justify-content center
            align-items center
            img
                width 140px
        .content-bottom
            height 50%
            .bottom-login
                width 100%
                padding 0 20px
                box-sizing border-box
                margin-bottom 60px
                .use-phone
                    width 100%
                    height 50px
                    background-color #DD1a21
                    margin-bottom 20px
                    text-align center
                    line-height 50px
                    color #fff
                    i
                        display inline-block
                        width 20px
                        height 20px
                        background url('./img/thirdwebp.webp') no-repeat 0 -25px / 20px
                        vertical-align middle
                .use-email
                    width 100%
                    height 50px
                    text-align center
                    color #DD1a21
                    text-align center
                    line-height 50px
                    border 1px solid #DD1a21
                    box-sizing border-box
                    i
                        display inline-block
                        width 20px
                        height 20px
                        background url('./img/thirdwebp.webp') no-repeat 0 0 / 20px
                        vertical-align middle
            .third-login
                font-size 14px
                color #7f7f7f
                ul
                    display flex
                    justify-content center
                    li
                        padding 0 20px
                    .weixin
                        border-right 1px solid #7f7f7f
                        i
                            width 20px
                            height 20px
                            display inline-block
                            vertical-align middle
                            background url('./img/weixin.png') no-repeat 0 0 / 20px
                    .qq
                        border-right 1px solid #7f7f7f
                        i
                            width 20px
                            height 20px
                            display inline-block
                            vertical-align middle
                            background url('./img/qq.png') no-repeat 0 0 / 20px
                    .weibo
                        i
                            width 20px
                            height 20px
                            display inline-block
                            vertical-align middle
                            background url('./img/weibo.png') no-repeat 0 0 / 20px
</style>
