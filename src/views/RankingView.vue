<template>
    <section class="ranking_content public_content">
        <!-- 
            phase2 header로 교체
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
                        @click="menuProduct = true"
                        >상품
                    </router-link>
                </li>
                <li class="page_menu__list">
                    <router-link
                        to="ranking_brand"
                        class="header_link"
                        :class="{ active: !menuProduct }"
                        @click="menuProduct = false"
                        >브랜드</router-link
                    >
                    <!-- <button type="button"></button> -->
                </li>
            </ul>
            <!-- 라운드 메뉴 -->
            <RoundMenu :dataArray="categoryBestArray" @send-index="menuActive" />
            <!-- product -->
            <article
                class="product_item"
                :class="[index % 2 ? 'odd' : 'even']"
                v-for="index in 19"
                :key="index"
            >
                <a href="#" class="product_item__link">
                    <div class="img_wrap" :data-rank="index">
                        <img
                            src="https://cdn.mustit.co.kr/lib/upload/admin/specialSale/f31a24f68908e861d9de301509943e33.jpeg"
                            alt="product"
                            class="cover_img"
                        />
                    </div>
                    <div class="info_container">
                        <p class="brand">BURBERRY</p>
                        <p class="name">FARLEY 로고 남성 후드티</p>
                        <div class="price">
                            <p class="discount_price">298,000</p>
                            <p class="discount">29%</p>
                        </div>
                        <del class="del_price">420,000</del>
                    </div>
                </a>
            </article>
        </section>
    </section>
</template>

<script>
    import Swiper from 'swiper'
    import scrollMixin from '@/mixin/scrollEvent'
    import SubTopNavi from '@/components/SubTopHeader.vue'
    import RankingList from '@/components/RankingLists.vue'
    import RoundMenu from '@/components/swiper/RoundMenu.vue'
    export default {
        components: {
            SubTopNavi,
            RankingList,
            RoundMenu
        },
        mixins: [scrollMixin],
        data() {
            return {
                menuObj: [{ name: '랭킹' }],
                menuProduct: true,
                swiper: null,
                applySwiper: false,
                menuArray: [{ name: '랭킹' }],
                categoryBestArray: [
                    { name: '전체', isActive: true },
                    { name: '여성의류', isActive: false },
                    { name: '여성슈즈', isActive: false },
                    { name: '여성가방', isActive: false },
                    { name: '악세서리', isActive: false },
                    { name: '모자', isActive: false },
                    { name: '키즈', isActive: false }
                ]
            }
        },
        methods: {
            swiperInit() {
                this.applySwiper = true
                this.swiper = new Swiper(this.$refs.productDirect, {
                    speed: 500,
                    resizeObserver: true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    slideToClickedSlide: true,
                    observer: true,
                    observeParents: true
                })
            },
            menuActive(index) {
                for (let data of this.categoryBestArray) {
                    data.isActive = false
                }
                // console.log('parent', index)
                this.categoryBestArray[index].isActive = true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .ranking_content {
        background: $white;
    }
</style>
