<template>
    <div id="app">
        <router-view />
        <Footer v-show="$route.meta.isShow" />
    </div>
</template>

<script>
import Footer from './components/Footer'
export default {
    name: 'App',
    components: {
        Footer
    },
    
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
pages
    width 100%
    height 100%
</style>

