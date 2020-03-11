<template>
    <div class="phone-wrap">
        <div class="content-top">
            <img src="../img/center.png" alt class="img" />
        </div>
        <div class="phone-box">
            <form action="#">
                <div class="phone-number">
                    <input
                        type="number"
                        placeholder="请输入手机号"
                        class="number-txt"
                        v-model="myphone"
                        v-validate="'required|phone'"
                        name="myphone"
                    />
                    
                </div>
                <div class="phone-password">
                    <input type="text" placeholder="请输入手机验证码" class="password-txt" />
                    <a href="#" class="vcode">获取验证码</a>
                </div>
                <div v-show="errors.has('myphone')" style="color: #DD1a21">{{ errors.first('myphone') }}</div>
                <div class="phone-problem">
                    <span>遇到问题？</span>
                    <a href="#">使用密码验证登录</a>
                </div>
                <button class="btn">登录</button>
                <div class="phone-agree">
                    <input type="checkbox" name="agree" id="checkbox" />
                    <label>
                        <span>我同意</span>
                        <a href="#">《服务条款》</a>
                        <span>和</span>
                        <a href="#">《网易隐私政策》</a>
                    </label>
                </div>
            </form>
            <div class="phone-other" @click="toBack">
                <span>其他登录方式</span>
                <i></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'UsePhone',
    data() {
        return {
            myphone: ''
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
        toBack() {
            this.$store.dispatch('toLogin', true)
            this.$store.dispatch('toEmail', false)
            this.$store.dispatch('toPhone', false)
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.phone-wrap
    width 100%
    box-sizing border-box
    height 100%
    padding-top 43.64px
    overflow hidden
    .content-top
        width 100%
        height 50px
        margin 35px 0
        box-sizing border-box
        display flex
        justify-content center
        align-items center
        .img
            width 140px
    .phone-box
        width 100%
        height 300px
        box-sizing border-box
        padding 0 25px
        form
            width 100%
            height 100%
            .phone-number
                width 100%
                height 50px
                margin-bottom 20px
                line-height 50px
                border-bottom 1px solid #f4f4f4
                .number-txt
                    width 90%
                    height 25px
                    outline-color transparent
            .phone-password
                display flex
                justify-content space-between
                align-items center
                width 100%
                height 50px
                margin-bottom 20px
                line-height 50px
                border-bottom 1px solid #f4f4f4
                .password-txt
                    height 25px
                    width 60%
                    outline-color transparent
                .vcode
                    width 85px
                    height 30px
                    display inline-block
                    border 1px solid #eee
                    line-height 30px
                    text-align center
                    color #333
            .phone-problem
                margin-bottom 20px
                margin-top 20px
                display flex
                justify-content space-between
                span
                    color #7e8c8d
                a
                    color #333
            .btn
                width 100%
                height 50px
                background-color #DD1a21
                margin-bottom 10px
                padding 0
                border 0px solid transparent
                outline none
                color #fff
            .phone-agree
                #checkbox
                    width 20px
                    height 20px
                    color #7f7f7f
                    outline none
                    font-size 15px
                    background-color #fff
                    font-weight lighter
                    vertical-align middle
                a
                    color #7e8c8d
        .phone-other
            width 100%
            text-align center
            i
                width 14px
                height 14px
                display inline-block
                background url('./img/right.webp') no-repeat 0 0 / 100%
                vertical-align bottom
</style>
