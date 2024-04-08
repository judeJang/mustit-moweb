<template>
    <div id="app">
        <app-layout>
            <router-view />
        </app-layout>
    </div>
</template>

<script>
    import 'swiper/css/swiper.min.css'
    import AppLayout from '@/layouts/AppLayout.vue'
    export default {
        components: { AppLayout }
    }
</script>

<style lang="scss">
    html,
    body {
        width: 100%;
        height: 100%;
        background-color: #fff;
        margin: 0;
    }
</style>
