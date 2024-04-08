<template>
    <!-- 
        classes 
            name : sub_bottom
            reset : self_module
            when scroll down :scroll_down
     -->
    <article
        class="sub_bottom self_module"
        :class="{ 'scroll_down': mixinScrollUpDownState == 'down' }"
    >
        <div class="floating_banner" v-if="floatingBannerShow">
            <a href="#">
                <img :src="floatingImg" alt="이벤트 배너" class="banner" />
            </a>
            <button type="button" class="close_btn" @click="bannerClose()"></button>
        </div>
        <transition name="fade-ani">
            <button type="button" class="go_top" @click="goToTop()" v-if="mixinSt > 200">
                <img :src="`${$S3}m_icon/floating-top.svg`" alt="상단가기" />
            </button>
        </transition>

        <footer class="sub_footer">
            <div class="inner_wrap">
                <a
                    v-for="(data, index) in bottomData"
                    :key="index"
                    :arial-label="data.label"
                    :class="[data.class, categoryClasses(index)]"
                    @mousedown="cateClick(index)"
                >
                    <span class="viewed_img" v-if="data.label === '최근본상품'">
                        <img
                            src="https://cdn.mustit.co.kr/lib/upload/product/alsgur5758/2022/08/1660038741-18.jpeg/_dims_/resize/60x60"
                            alt=""
                        />
                    </span>
                    <p>{{ data.label }}</p>
                </a>
            </div>
        </footer>
    </article>
</template>

<script>
    import scrollEvent from '@/mixin/scrollEvent'
    import { mapState, mapActions } from 'vuex'
    import { getCookie, setCookie } from '@/assets/js/Common'
    navigator.vibrate =
        navigator.vibrate ||
        navigator.webkitVibrate ||
        navigator.mozVibrate ||
        navigator.msVibrate

    export default {
        mixins: [scrollEvent],
        props: {
            scrollDirection: String
        },
        data() {
            return {
                floatingImg:
                    'https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/temp/footer_floating_banner.png',
                floatingBannerShow: true,
                tmpBrandToggle: false,
                tmpMypageToggle: false,
                tmpRecentlyCount: 1,
                btnDownIndex: null,
                bottomData: [
                    {
                        label: '카테고리',
                        class: 'category'
                    },
                    {
                        label: '브랜드',
                        class: 'brand'
                    },
                    {
                        label: '홈',
                        class: 'home'
                    },
                    {
                        label: '마이페이지',
                        class: 'mypage'
                    },
                    {
                        label: '최근본상품',
                        class: 'recently'
                    }
                ]
            }
        },
        created() {
            this.visibilityBanner()
        },
        computed: {
            ...mapState('drawerModule', ['drawerOpen'])
        },
        methods: {
            ...mapActions('drawerModule', ['toggleDrawer']),
            goToTop() {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            },
            downEffect(index) {
                this.btnDownIndex = index
                setTimeout(() => {
                    switch (index) {
                        case 0:
                            this.$router.push('/category_home').catch(() => {})
                            break
                        case 1:
                            this.tmpBrandToggle = !this.tmpBrandToggle
                            break
                        case 2:
                            this.$router.push('/home').catch(() => {})
                            break
                        case 3:
                            this.tmpMypageToggle = !this.tmpMypageToggle
                            break
                        case 4:
                            this.$router.push('/mypage/wishlist').catch(() => {})
                            break
                    }
                    this.btnDownIndex = null
                }, 350)
            },
            bannerClose() {
                setCookie('floatingBannerEvent', 'N')
                this.visibilityBanner()
            },
            visibilityBanner() {
                if (getCookie('floatingBannerEvent') === 'N') {
                    this.floatingBannerShow = false
                }
            },
            categoryClasses(index) {
                let classes = {
                    'press': index === this.btnDownIndex
                }
                switch (index) {
                    case 0:
                        classes['active'] = this.$route.path == '/category_home'
                        break
                    case 1:
                        classes['active'] = this.tmpBrandToggle
                        break
                    case 2:
                        classes['active'] = this.$route.path == '/home'
                        break
                    case 3:
                        classes['active'] = this.tmpMypageToggle
                        break
                    case 4:
                        classes['active'] = this.$route.path == '/mypage/wishlist'
                        classes['viewed'] = this.tmpMypageToggle
                        break
                }
                return classes
            },
            cateClick(index) {
                console.log('click ====>', index)
                this.downEffect(index)
                this.categoryClasses(index)
            },
            haptics() {
                if (navigator.vibrate) navigator.vibrate(10)
            }
        }
    }
</script>
