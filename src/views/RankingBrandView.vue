<template>
    <section class="ranking_content public_content">
        <!-- 
            phase2 header 교체
            <SubTopNavi :isDropState="false" :data="menuObj" :count="5" /> 
        -->

        <!-- flex_content -->
        <section class="flex_content">
            <!-- page navi -->
            <ul class="page_menu">
                <li class="page_menu__list">
                    <router-link
                        to="ranking"
                        class="header_link"
                        :class="{ active: menuProduct }"
                        >상품
                    </router-link>
                </li>
                <li class="page_menu__list">
                    <router-link
                        to="ranking_brand"
                        class="header_link"
                        :class="{ active: !menuProduct }"
                        >브랜드
                    </router-link>
                </li>
            </ul>
            <!-- 브랜드 리스트 -->
            <article class="ranking_list" v-for="idx in 30" :key="idx">
                <div class="brand_list">
                    <a href="#">
                        <div class="num">{{ idx }}</div>
                        <div class="thum">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/home/special_display_plan/2022/01/77f9f13145db57a278c382b5efa691d4.jpeg"
                                alt="product"
                            />
                        </div>
                        <div class="info">
                            <p class="en">GUCCI</p>
                            <p class="ko">구찌</p>
                        </div>
                    </a>
                </div>
                <div class="popular_list">
                    <a href="#">
                        <div class="img_wrap">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/admin/specialSale/f31a24f68908e861d9de301509943e33.jpeg"
                                alt="product"
                            />
                        </div>
                        <div class="info_container">
                            <p class="name">수프림 GG 하프문수프림 GG 하프문</p>
                            <div class="price">
                                <p class="discount_price">298,000</p>
                                <p class="discount">29%</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="img_wrap">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/admin/specialSale/f31a24f68908e861d9de301509943e33.jpeg"
                                alt="product"
                            />
                        </div>
                        <div class="info_container">
                            <p class="name">수프림 GG 하프문수프림 GG 하프문</p>
                            <div class="price">
                                <p class="discount_price">298,000</p>
                                <p class="discount">29%</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="img_wrap">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/admin/specialSale/f31a24f68908e861d9de301509943e33.jpeg"
                                alt="product"
                            />
                        </div>
                        <div class="info_container">
                            <p class="name">수프림 GG 하프문수프림 GG 하프문</p>
                            <div class="price">
                                <p class="discount_price">298,000</p>
                                <p class="discount">29%</p>
                            </div>
                        </div>
                    </a>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
    import scrollMixin from '@/mixin/scrollEvent'
    import SubTopNavi from '@/components/SubTopHeader.vue'
    export default {
        components: {
            SubTopNavi
        },
        mixins: [scrollMixin],
        data() {
            return {
                menuObj: [{ name: '랭킹' }],
                menuProduct: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    .ranking_content {
        background: $white;
    }
</style>
