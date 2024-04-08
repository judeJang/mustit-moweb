<template>
    <!-- 
        classes
            name : navigation
            reset : self_module
            there is a banner : has_banner
            type of phase2 : phase2
            when scroll down : scroll_down
     -->
    <article class="navigation self_module" :class="attachClasses()">
        <!-- 헤더 기획전 배너 -->
        <HeaderBanner @bannerClose="closeBanner" v-if="bringBanner" />
        <!-- gnb -->
        <header class="header">
            <h1 class="blind">머스트잇 스토어</h1>
            <article class="logo">
                <router-link to="/home">
                    <span class="blind">MUST' IT</span>
                </router-link>
            </article>
            <article class="search">
                <router-link to="/product/search">
                    <input type="text" readonly />
                </router-link>
            </article>
            <article class="utils">
                <IconBasket />
            </article>
        </header>
        <!-- navi -->
        <HeaderCategory v-if="isPhase2" />
    </article>
</template>

<script>
    import { getCookie } from '@/assets/js/Common'
    import scrollEvent from '@/mixin/scrollEvent'

    import HeaderBanner from '@/components/BaseHeaderBanner.vue'
    import HeaderCategory from '@//components/BaseHeaderCorner.vue'
    import IconBasket from '@/components/BaseHeaderIconBasket.vue'

    export default {
        components: { HeaderBanner, HeaderCategory, IconBasket },
        mixins: [scrollEvent],
        data() {
            return {
                bringBanner: false,
                typeClass: '',
                isPhase2: false
            }
        },
        created() {
            this.attachClasses()
        },
        methods: {
            closeBanner(boolean) {
                this.bringBanner = boolean
            },
            attachClasses() {
                const classes = {
                    'scroll_down': this.mixinScrollUpDownState === 'down'
                }

                // 배너가 있을 경우 && 홈에서만 노출
                if (
                    getCookie('headerBannerShow') !== 'N' &&
                    this.$route.name === 'home'
                ) {
                    classes['has_banner'] = true
                    this.bringBanner = true
                }

                // phase2 URL 일 경우 :: 히스토리 남기기 위해 예외처리
                if (
                    this.$route.path === '/home' ||
                    this.$route.path === '/product/hot_deal' ||
                    this.$route.path === '/ranking' ||
                    this.$route.path === '/ranking_brand' ||
                    this.$route.path === '/etc/boutique'
                ) {
                    classes['phase2'] = true
                    this.isPhase2 = true
                }

                return classes
            }
        }
    }
</script>

<style lang="scss" scoped></style>
