<template>
    <div>
        <section class="cpp_content public_content">
            <!-- 
                <SubTopNavi :dropDown="dropMenuOpen" :data="menuArray" :count="basketCount" />
             -->
            <SubHeader :title="menuArray" :type="4" />
            <div class="cpp_container" ref="cpp_container">
                <nav
                    ref="categoryShort"
                    class="category_short swiper-container"
                    :class="{ is_show: categoryShortVisible }"
                >
                    <ul class="swiper-wrapper">
                        <li
                            class="swiper-slide"
                            v-for="list in categoryData"
                            :key="list.name"
                        >
                            <button class="category_link">
                                {{ list.name }}
                            </button>
                        </li>
                    </ul>
                </nav>
                <!-- cppBanner004 -->
                <article class="big_banner">
                    <div class="comp_img_swiper swiper-container" ref="bigBanner">
                        <ul class="swiper-wrapper">
                            <li
                                class="swiper-slide"
                                v-for="list in bigBannerLength"
                                :key="list"
                            >
                                <a class="swiper_link" href="#">
                                    <img
                                        src="https://cdn.mustit.co.kr/lib/upload/home/main_banner/2022/03/3b43145fdf1e22be83ea5f4af34f6f46.jpeg"
                                        alt="product"
                                        class="cover_img"
                                    />
                                </a>
                            </li>
                        </ul>
                        <div class="swiper-pagination" ref="big_banner_pagination"></div>
                    </div>
                </article>
                <!-- cppCategory001 -->
                <article class="category_list swiper-container" ref="directSwiper">
                    <ul class="category_list__nav swiper-wrapper">
                        <li
                            class="category_list__list swiper-slide"
                            v-for="list in categoryData"
                            :key="list.name"
                        >
                            <DirectIcon :src="list.file" :name="list.name" />
                        </li>
                    </ul>
                </article>
                <div class="divider"></div>
                <!-- cppTitle002 -->
                <PageTitle><h2>따뜻하지만 가벼운 경량 패딩</h2></PageTitle>
                <!-- homeProduct002 -->
                <Gallery id="gallery1" />
                <div class="divider"></div>
                <!-- cppTitle002 -->
                <PageTitle><h2>여성의류 인기 브랜드</h2></PageTitle>
                <!-- cppBrand001 -->
                <article class="popular_brand">
                    <RoundMenu id="menuSwiper" :dataArray="popularData" />
                    <Popular
                        id="popularProduct"
                        :brandName="popularBrand"
                        :dataArray="popularData"
                    />
                </article>
                <div class="divider"></div>
                <!-- cppTitle002 -->
                <PageTitle>
                    <h2>지금 사야 하는 <span class="hash">#다운패딩</span></h2>
                </PageTitle>
                <!--homeProductDetail002 -->
                <SmallProduct id="smallProduct1" :discountShow="true" />
                <div class="divider"></div>
                <!-- cppTitle002 -->
                <PageTitle title="입고 여행가자">
                    <h2><span class="hash">#블라우스</span> 입고 여행가자</h2>
                </PageTitle>
                <!--homeProductDetail002 -->
                <SmallProduct id="smallProduct2" :discountShow="false" />
                <div class="divider"></div>
                <!-- cppTitle002 -->
                <PageTitle><h2>여성의류 베스트</h2></PageTitle>
                <article class="product_wrap">
                    <LpList
                        v-for="index in 12"
                        :key="index"
                        :className="index % 2 == 0 ? 'even' : 'odd'"
                    />
                </article>
            </div>

            <transition name="fade-ani">
                <div class="black_deem" v-if="dropMenuOpen" @click="menuDrop"></div>
            </transition>
        </section>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import Gallery from '@/modules/VGallerySwiper.vue'
    import PageTitle from '@/components/PageTitle.vue'
    import SmallProduct from '@/modules/VFreeSwiper.vue'
    import SubTopNavi from '@/components/SubTopHeader.vue'
    import SubHeader from '@/components/SubHeader.vue'
    import LpList from '@/components/LpList.vue'
    import DirectIcon from '@/components/DirectIcon.vue'
    import RoundMenu from '@/components/swiper/RoundMenu.vue'
    import Popular from '@/components/swiper/PopularProduct.vue'
    import EventBus from '@/assets/js/EventBus'

    const tempPath = 'https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/temp/cpp/'

    export default {
        components: {
            Gallery,
            PageTitle,
            SmallProduct,
            SubTopNavi,
            LpList,
            DirectIcon,
            RoundMenu,
            Popular,
            SubHeader
        },
        data: function () {
            return {
                //swiper
                bigBannerSwiper: null,
                directShortSwiper: null,
                directSwiper: null,
                menuSwiper: null,
                popularSwiper: null,

                //IntersectionObserver
                observer: null,
                observerOption: {
                    // root: this.$refs.cpp_container,
                    // rootMargin: '-52px 0px 0px 0px',
                    threshold: 1
                },
                //EventBus
                menuSwiperObj: null,
                brandSwiperObj: null,

                bigBannerLength: 7,
                dropMenuOpen: false,
                categoryShortVisible: false,
                pageName: '여성의류',
                basketCount: 5,
                popularBrand: 'MONCLER',

                menuArray: [
                    { name: '카테고리명', isActive: true },
                    { name: '여성슈즈', isActive: false },
                    { name: '여성가방', isActive: false },
                    { name: '여성액세서리', isActive: false },
                    { name: '남성의류', isActive: false },
                    { name: '남성슈즈', isActive: false },
                    { name: '남성가방', isActive: false },
                    { name: '남성액세서리', isActive: false },
                    { name: '골프', isActive: false },
                    { name: '뷰티', isActive: false }
                ],

                categoryData: [
                    { name: '탑', file: `${tempPath}category1.png` },
                    { name: '스웨터', file: `${tempPath}category2.png` },
                    { name: '블라우스/셔츠', file: `${tempPath}category3.png` },
                    { name: '원피스', file: `${tempPath}category4.png` },
                    { name: '팬츠', file: `${tempPath}category1.png` },
                    {
                        name: '언더웨어/라운지웨어',
                        file: `${tempPath}category4.png`
                    },
                    {
                        name: '스포츠웨어/아웃도어',
                        file: `${tempPath}category4.png`
                    }
                ],

                productData: [
                    { name: '탑', file: `${tempPath}category1.png` },
                    { name: '스웨터', file: `${tempPath}category2.png` },
                    { name: '블라우스/셔츠', file: `${tempPath}category3.png` },
                    { name: '원피스', file: `${tempPath}category4.png` },
                    { name: '팬츠', file: `${tempPath}category4.png` },
                    { name: '스커트', file: `${tempPath}category4.png` },
                    { name: '코트/자켓', file: `${tempPath}category4.png` }
                ],

                popularData: [
                    { name: 'MONCLER', isActive: true },
                    { name: 'GUCCI', isActive: false },
                    { name: 'PRADA', isActive: false },
                    { name: 'Maison Margiela', isActive: false }
                ]
            }
        },
        methods: {
            handleIntersect(target) {
                if (target.isIntersecting) {
                    this.categoryShortVisible = false
                } else {
                    this.categoryShortVisible = true
                }
            },
            menuSwiperActive(id) {
                for (let [index, value] of this.popularData.entries()) {
                    if (id == index) {
                        value.isActive = true
                    } else {
                        value.isActive = false
                    }
                }
            },
            menuClick(num) {
                if (num === undefined) return false
                if (num == 3) {
                    this.menuSwiper.slideTo(num)
                } else if (num < 3) {
                    this.menuSwiper.slideTo(0)
                } else {
                    this.menuSwiper.slideTo(num)
                }
                this.popularSwiper.slideTo(num)

                this.popularBrand = this.popularData[num].name
                this.menuSwiperActive(num)
            },

            menuDrop() {
                this.dropMenuOpen = !this.dropMenuOpen
                console.log(this.dropMenuOpen)
                const HTML = document.getElementsByTagName('html')[0]
                const BODY = document.body
                if (this.dropMenuOpen) {
                    HTML.classList.add('html_scroll')
                    BODY.classList.add('body_scroll')
                } else {
                    HTML.classList.remove('html_scroll')
                    BODY.classList.remove('body_scroll')
                }
            }
        },
        created() {
            EventBus.$on('menuSwiper', (swiper) => {
                this.menuSwiperObj = swiper
            })
            EventBus.$on('brandSwiper', (swiper) => {
                this.brandSwiperObj = swiper
            })
            EventBus.$on('menuSwiperClick', (num) => {
                if (num === undefined) return false
                if (num == 3) {
                    this.menuSwiperObj.slideTo(num)
                } else if (num < 3) {
                    this.menuSwiperObj.slideTo(0)
                } else {
                    this.menuSwiperObj.slideTo(num)
                }
                this.brandSwiperObj.slideTo(num)
                this.popularBrand = this.popularData[num].name
                this.menuSwiperActive(num)
            })
        },
        beforeDestroy() {
            EventBus.$off('menuSwiper')
            EventBus.$off('brandSwiper')
            EventBus.$off('menuSwiperClick')
        },
        mounted() {
            //swiper
            this.directShortSwiper = new Swiper(this.$refs.categoryShort, {
                resizeObserver: true,
                slidesPerView: 'auto',
                freeMode: true
            })

            this.bigBannerSwiper = new Swiper(this.$refs.bigBanner, {
                initialSlide: Math.floor(Math.random() * this.bigBannerLength) - 1,
                resizeObserver: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false
                },
                loop: this.bigBannerLength > 1 ? true : false, //갯수가 1개보다 많으면
                followFinger: this.bigBannerLength > 1 ? true : false,
                pagination: {
                    el: this.$refs.big_banner_pagination,
                    clickable: true
                }
            })
            this.directSwiper = new Swiper(this.$refs.directSwiper, {
                resizeObserver: true,
                slidesPerView: 'auto',
                freeMode: true
            })

            //IntersectionObserver
            this.observer = new IntersectionObserver((entries) => {
                this.handleIntersect(entries[0])
            }, this.observerOption)

            this.observer.observe(this.$refs.directSwiper)
        }
    }
</script>
<style scoped></style>
