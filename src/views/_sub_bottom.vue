<template>
    <article
        class="sub_bottom"
        :class="{ 'scroll_down': mixinScrollUpDownState == 'down' }"
        @click="goToTop()"
    >
        <div class="floating_banner" v-if="floatingBannerShow">
            <a href="#">
                <img :src="floatingImg" alt="이벤트 배너" class="banner" />
            </a>
            <a href="#">
                <img
                    :src="`${$S3}m_icon/icon_foot_floating_close_24.png`"
                    alt="banner close"
                    class="banner_close"
                    @click="bannerClose()"
                />
            </a>
        </div>
        <transition name="fade-ani">
            <button type="button" class="go_top" v-if="mixinSt > 200">
                <img :src="`${$S3}m_icon/floating-top.svg`" alt="상단가기" />
            </button>
        </transition>
        <footer class="sub_footer"></footer>
    </article>
</template>

<script>
    import scrollEvent from '@/mixin/scrollEvent'
    import { getCookie, setCookie } from '@/assets/js/Common'
    export default {
        mixins: [scrollEvent],
        data() {
            return {
                floatingImg:
                    'https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/temp/footer_floating_banner.png',
                floatingBannerShow: true
            }
        },
        created() {
            this.visibilityBanner()
        },
        methods: {
            goToTop() {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            },
            bannerClose() {
                setCookie('floatingBannerEvent', 'Y')
                this.visibilityBanner()
            },
            visibilityBanner() {
                if (getCookie('floatingBannerEvent') === 'Y') {
                    this.floatingBannerShow = false
                }
            }
        }
    }
</script>
