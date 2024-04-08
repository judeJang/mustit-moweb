<template>
    <header
        class="product_header2 self_module"
        :class="{ 'drop_shadow': getShadowVisibility, 'has_banner': bringBanner }"
        :data-type="type"
    >
        <!-- 헤더 기획전 배너 -->
        <HeaderBanner @bannerClose="closeBanner" v-if="bringBanner" />
        <!-- overflow hidden 영역 -->
        <section class="crop_container">
            <!-- 왼쪽 아이콘 영역 -->
            <div class="left_icons">
                <router-link to="/" class="back">
                    <span class="black_icon" :style="getOpacity"></span>
                </router-link>
                <router-link to="/" class="home" v-if="type == 1">
                    <span class="black_icon" :style="getOpacity"></span>
                </router-link>
            </div>
            <!-- 오른쪽 아이콘 영역 -->
            <div class="right_icons">
                <router-link to="/" class="search">
                    <span class="black_icon" :style="getOpacity"></span>
                </router-link>
                <router-link to="/" class="cart">
                    <span class="black_icon" :style="getOpacity"></span>
                    <span class="cart_num">0</span>
                </router-link>
            </div>
            <!-- 배경 흰색 -->
            <article class="white_area" :style="getOpacity">
                <!-- logo -->
                <router-link to="/" class="logo" v-if="type == 2"
                    ><span class="blind">Must'it</span></router-link
                >
                <!-- 앵커 이동 메뉴 -->
                <div class="anchor" :class="{ visible: anchorShow }">
                    <button
                        type="button"
                        v-for="(menu, index) in anchorMenus"
                        :key="menu.name"
                        :class="menu.state == 'active' ? 'active' : ''"
                        @click.prevent="scrollMove(index)"
                    >
                        {{ menu.name }}
                        <span v-if="menu.count" class="num"
                            >({{ menu.count | comma }})</span
                        >
                    </button>
                </div>
            </article>
        </section>
    </header>
</template>
<script>
    import { getCookie } from '@/assets/js/Common'

    import HeaderBanner from '@/components/BaseHeaderBanner.vue'

    export default {
        /*
            마이그레이션 시
            anchor 메뉴 관련 데이터 하나로 보내기
        */
        components: {
            HeaderBanner
        },
        data() {
            return {
                bringBanner: false // 배너를 가져오면
            }
        },
        props: {
            // opacity
            alpha: { type: Number, default: 0 },
            /*
                type :
                        1 투명 모드
                        2 제휴사 통해서 랜딩 시
             */
            type: { type: Number, required: true, default: 1 },
            // 페이지 이동 버튼
            anchorShow: { type: Boolean, default: false, require: true },
            //페이지 이동 메뉴
            anchorMenus: { type: Array, require: true }
        },
        filters: {
            comma(val) {
                return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
        },
        created() {
            this.visibilityBanner()
        },
        computed: {
            getOpacity() {
                let value = 1
                if (this.type == 1) {
                    value = this.alpha
                    if (this.bringBanner) {
                        value *= value
                    }
                }
                return `opacity:${value}`
            },
            anchorVisible() {
                return this.anchorShow
            },
            getShadowVisibility() {
                let value
                if (this.type == 1) {
                    value = this.alpha === 1 ? true : false
                } else if (this.type == 2) {
                    value = this.alpha > 0 ? true : false
                }

                return value
            }
        },
        methods: {
            scrollMove(id) {
                let top = this.anchorMenus[id].el.offsetTop
                window.scrollTo({ top: top - 40, left: 0, behavior: 'smooth' })
            },
            closeBanner(state) {
                this.bringBanner = state
            },
            visibilityBanner() {
                if (getCookie('headerBannerShow') == 'N') {
                    this.bringBanner = false
                } else {
                    this.bringBanner = true
                }
            }
        }
    }
</script>
