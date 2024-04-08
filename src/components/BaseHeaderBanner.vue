<template>
    <section class="header_event" :style="backgroundColor">
        <a href="#">
            <img
                src="https://s3.ap-northeast-2.amazonaws.com/mustit-upload/header_event_image/mobile/mo-top-banner-event-220801.png"
                alt="상단띠배너"
                class="banner"
            />
        </a>
        <button type="button" class="close_btn" @click="bannerClose()"></button>
    </section>
</template>
<script>
    import { setCookie } from '@/assets/js/Common'
    export default {
        name: 'TopEventBanner',
        data() {
            return {
                headerBannerShow: true
            }
        },
        computed: {
            backgroundColor() {
                return 'background-color: rgb(69, 38, 138)'
            }
        },
        methods: {
            bannerClose() {
                setCookie('headerBannerShow', 'N')
                this.$emit('bannerClose', false)
            }
        }
    }
</script>
