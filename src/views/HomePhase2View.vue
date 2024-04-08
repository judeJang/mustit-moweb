<template>
    <section class="main_content public_content">
        <!-- Big -->
        <!-- <BigBanner id="BigBanner1" /> -->
        <Banner007 id="BigBanner2" />
        <!-- homePhase2 -->
        <Shortcuts />
        <Divider />
        <!-- menu001 -->
        <CategoryDirect />
        <Divider />
        <!-- title001 -->
        <MainTitle title="타임세일" link="#" :allView="true" :bg="false" />
        <!-- ProductDeal001 -->
        <HotDeal id="hotDeal" />
        <!-- title001 -->
        <MainTitle title="이 달의 혜택" link="#" :allView="false" :bg="true" />
        <!-- Banner009 -->
        <Banner009 id="benefits" />
        <Divider />
        <!-- title001 -->
        <MainTitle title="Free 스와이프" link="#" :allView="false" :bg="true" />
        <!-- ProductDeal002 -->
        <SmallProduct id="smallProduct1" :discountShow="true" />
        <Divider />
        <!-- title001 -->
        <MainTitle title="디스카운트 없는 버전" link="#" :allView="false" :bg="true" />
        <!-- ProductDeal002 -->
        <SmallProduct id="smallProduct2" />
        <Divider />
        <!-- title001 -->
        <MainTitle title="이미지 스와이프 배너" link="#" :allView="false" :bg="true" />
        <!-- Banner002 -->
        <MarketingBanner id="marketingBanner1" />
        <Divider />
        <!-- title001 -->
        <MainTitle title="통 이미지 배너" link="#" :allView="false" :bg="true" />
        <!-- Banner003 -->
        <article class="home_img_wrap">
            <a class="home_img_wrap__link" href="#">
                <img
                    src="https://cdn.mustit.co.kr/lib/upload/home/banner001/2022/08/d68d790193b38ca7e6561e4791129609.jpeg/_dims_/quality/80/format/webp/autorotate/on"
                    alt="product"
                    class="cover_img"
                />
            </a>
        </article>
        <Divider />
        <!-- title001 -->
        <MainTitle title="상품 + 탭 + 갤러리뷰" link="#" :allView="false" :bg="true" />
        <!-- product cate 001  -->
        <article class="category_best">
            <RoundMenu
                id="menuSwiper"
                :dataArray="categoryBestArray"
                target="mainCategory"
            />
            <MultiSwiper
                :dataArray="categoryBestArray"
                :childrenArray="categoryChildArray"
                target="mainCategory"
            />
        </article>
        <Divider />

        <!-- title004 -->
        <MainTitleMulty sub="서브타이틀 신규 모듈" title="상품 + 갤러리뷰" />
        <!-- product002 -->
        <Gallery id="gallery1" />
        <Divider :whiteColor="true" />

        <!-- title001 -->
        <MainTitle title="인기 랭킹" link="#" :allView="true" :bg="true" />
        <!-- ranking001 -->
        <article class="popular_ranking">
            <ul class="popular_ranking__menu">
                <li class="menu_list">
                    <button
                        type="button"
                        class="menu_btn"
                        :class="{ active: rankingProduct }"
                        @click="rankingProduct = true"
                    >
                        상품
                    </button>
                </li>
                <li class="menu_list">
                    <button
                        type="button"
                        class="menu_btn"
                        :class="{ active: !rankingProduct }"
                        @click="rankingProduct = false"
                    >
                        브랜드
                    </button>
                </li>
            </ul>
            <article class="product_ranking" v-show="rankingProduct">
                <RoundMenu
                    id="menuSwiper"
                    :dataArray="rankingProductArray"
                    target="mainRanking"
                />
                <MultiSwiper
                    :dataArray="categoryBestArray"
                    :childrenArray="categoryChildArray"
                    target="mainRanking"
                />
            </article>
            <article class="brand_mainRanking" v-show="!rankingProduct">
                <div class="brand_ranking__swiper swiper-container" ref="brandRanking">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide" v-for="index in 2" :key="index">
                            <RankingLists :listIndex="index" />
                        </li>
                    </ul>
                    <div class="swiper-pagination" ref="brandRankingPaging"></div>
                </div>
            </article>
        </article>
        <Divider />

        <!-- title001 -->
        <MainTitle title="인기 기획전 (NEW)" link="#" :allView="true" :bg="true" />
        <!-- Ex003 -->
        <PopularEventV2 />
        <Divider :whiteColor="true" />
        <!-- title001 -->
        <MainTitle title="베스트 리뷰 (NEW)" link="#" :allView="true" :bg="true" />
        <!-- review001 -->
        <BestReviewV2 />
        <Divider />
        <!-- 매거진 -->
        <MainTitle title="매거진 (NEW)" link="#" :allView="true" :bg="true" />
        <!-- content002 -->
        <MagaineV2 />
        <Divider :whiteColor="true" />
        <!-- 브랜드픽 -->
        <MainTitle title="브랜드픽 (NEW)" link="#" :allView="true" :bg="true" />
        <!-- brandpick002 -->
        <BrandPickV2 />
        <Divider />

        <!-- 
            retire 
        -->
        <MainTitle title="인기 기획전 (retire)" link="#" :allView="true" :bg="true" />
        <!-- EX001 -->
        <PopularEvent id="popularEvent1">
            <template v-slot:small_text> 실루엣이 전체적인 아웃핏을 결정한다 </template>

            <template v-slot:big_text> Silhouette Guide </template>
        </PopularEvent>
        <Divider :whiteColor="true" />
        <!-- EX002 -->
        <PopularEvent
            id="popularEvent2"
            :type2="true"
            :bgImg="popularBg"
            :productImg="popularProduct"
        >
            <template v-slot:small_text> 머스트잇 아우터 완전 정복 </template>

            <template v-slot:big_text> IT’ OUTER<br />PARTY 21FW </template>
        </PopularEvent>
        <Divider :whiteColor="true" />
        <!-- title001 -->
        <MainTitle title="베스트 리뷰 (retire)" link="#" :allView="true" :bg="false" />
        <!-- review001 -->
        <BestReview id="bestReview1" />
        <Divider :whiteColor="true" />
        <!-- title001 -->
        <MainTitle title="매거진 (retire)" link="#" :allView="true" :bg="true" />
        <!-- content001 -->
        <Magazine id="magazine" />
        <Divider :whiteColor="true" />
        <!-- title001 -->
        <MainTitle title="브랜드 픽 (retire)" link="#" :allView="true" :bg="true" />
        <!-- brandPick001 -->
        <article class="brand_pick">
            <div class="brand_pick__swiper swiper-container" ref="brandPick">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" v-for="list in 5" :key="list">
                        <div class="brand_pick__container">
                            <a
                                href="#"
                                class="brand_pick__link"
                                v-for="index in 6"
                                :key="index"
                            >
                                <img
                                    src="https://cdn.mustit.co.kr/lib/upload/home/brand_pick/2021/09/3a414aaf3f1ef565fca310fbc8fe1ee8.jpeg"
                                    alt="product"
                                    class="cover_img"
                                />
                            </a>
                        </div>
                    </li>
                </ul>
                <div class="swiper-pagination" ref="brandPickPaging"></div>
            </div>
        </article>
        <Divider :whiteColor="true" />
        <!-- title001 -->
        <MainTitle title="싱글 card UI (retire)" link="#" :allView="false" :bg="true" />
        <!-- product001 -->
        <article class="big_product">
            <a href="#" class="big_product__link">
                <div class="img_wrap">
                    <img
                        src="https://cdn.mustit.co.kr/lib/upload//product/a-por/2020/05/1589708008-97.jpg"
                        alt=""
                        class="cover_img"
                    />
                </div>
                <div class="info_container">
                    <p class="brand">CELINE</p>
                    <p class="product_info">아바 데님 호보백</p>
                    <p class="price">1,950,000</p>
                </div>
            </a>
        </article>
        <!--
             // retire 
        -->
        <!-- 광고 모달 -->
        <ADModal :showADModal="showADModal" v-if="!closeADModal" />
        <!--// 광고 모달 -->
        <!-- 전체 기획전 보기 -->
        <transition name="slide-up">
            <div class="layer_node" v-if="isAllModalOpen">
                <div class="all_layer_insert" v-if="isAllModalOpen">
                    <EventList />
                </div>
            </div>
        </transition>

        <NoticeModal />
        <!-- //전체 기획전 보기 -->
    </section>
</template>

<script>
    //js
    import Swiper from 'swiper'
    import EventBus from '@/assets/js/EventBus'
    //change of location component -> module
    import BigBanner from '@/modules/VHomeBigSwiper.vue'
    import Banner007 from '@/modules/VHomeBanner007.vue'
    import CategoryDirect from '@/modules/VHomeCategoryDirect.vue'
    import MainTitle from '@/modules/VHomeTitle.vue'
    import MainTitleMulty from '@/modules/VHomeTitleMulty.vue'
    import Divider from '@/modules/VHomeDivider.vue'
    import SmallProduct from '@/modules/VFreeSwiper.vue'
    import MarketingBanner from '@/modules/VMarketingSwiper.vue'
    import Gallery from '@/modules/VGallerySwiper.vue'
    import HotDeal from '@/modules/VHomeHotDealSwiper.vue'
    //retire 모듈
    import PopularEvent from '@/modules/VHomePopularEventSwiper.vue'
    import BestReview from '@/components/swiper/BestReview.vue'
    import Magazine from '@/components/swiper/Magazine.vue'
    import RoundMenu from '@/components/swiper/RoundMenu.vue'
    import MultiSwiper from '@/components/swiper/MultiSwiper.vue'
    import RankingLists from '@/components/RankingLists.vue'
    import EventList from '@/views/layer/EventList.vue'
    //신규 모듈
    import PopularEventV2 from '@/modules/VHomePopularEventSwiperV2.vue'
    import BestReviewV2 from '@/modules/VHomeBestReviewSwiperV2.vue'
    import MagaineV2 from '@/modules/VHomeMagazineSwiperV2.vue'
    import BrandPickV2 from '@/modules/VHomeBrandPickV2.vue'
    import Banner009 from '@/modules/VBanner009.vue'
    import Shortcuts from '@/modules/VHomeShortcutsMenu.vue'
    //공지 팝업
    import NoticeModal from '@/modules/VHomeNoticeModal.vue'

    import ADModal from '@/modules/VHomeAdModal.vue'

    export default {
        components: {
            BigBanner,
            Banner007,
            CategoryDirect,
            Divider,
            MainTitle,
            MainTitleMulty,
            Gallery,
            SmallProduct,
            HotDeal,
            MarketingBanner,
            PopularEvent,
            BestReview,
            Magazine,
            RoundMenu,
            MultiSwiper,
            RankingLists,
            EventList,
            PopularEventV2,
            BestReviewV2,
            MagaineV2,
            BrandPickV2,
            NoticeModal,
            ADModal,
            Banner009,
            Shortcuts
        },
        data() {
            return {
                popularBg:
                    'https://mustit-upload.s3.ap-northeast-2.amazonaws.com/mobile/improve/m-sellingevent-02.jpg',
                popularProduct:
                    'https://cdn.mustit.co.kr/lib/upload/admin/specialSale/img_1640913374-8726888907.jpg',
                categoryBestArray: [
                    { name: 'Hot', isActive: true },
                    { name: 'Clothing', isActive: false },
                    { name: 'Shoes', isActive: false },
                    { name: 'Bag', isActive: false },
                    { name: 'Acc', isActive: false },
                    { name: 'Cap', isActive: false },
                    { name: 'Test', isActive: false }
                ],
                categoryChildArray: [2, 3, 2, 5, 2, 3, 2],
                categoryMenuSwiper: null,
                categoryParentSwiper: null,
                categoryChildSwiper: [],
                rankingProduct: true,
                rankingProductArray: [
                    { name: 'Clothing', isActive: true },
                    { name: 'Shoes', isActive: false },
                    { name: 'Bag', isActive: false },
                    { name: 'Acc', isActive: false },
                    { name: 'Cap', isActive: false },
                    { name: 'Kids', isActive: false },
                    { name: 'Test', isActive: false }
                ],
                rankingMenuSwiper: null,
                rankingParentSwiper: null,
                rankingChildSwiper: [],

                brandSwiper: null,
                brandPickSwiper: null,

                isAllModalOpen: false,

                showADModal: false, //화면 로딩 시 광고 모달
                closeADModal: false //광고 모달 객체 삭제 변수
            }
        },
        async mounted() {
            this.brandSwiper = new Swiper(this.$refs.brandRanking, {
                resizeObserver: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                centeredSlidesBounds: true,
                followFinger: false,
                observer: true,
                observeParents: true,
                pagination: {
                    el: this.$refs.brandRankingPaging,
                    clickable: true
                }
            })
            this.brandPickSwiper = new Swiper(this.$refs.brandPick, {
                resizeObserver: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                centeredSlidesBounds: true,
                followFinger: false,
                observer: true,
                observeParents: true,
                pagination: {
                    el: this.$refs.brandPickPaging,
                    clickable: true
                }
            })

            //화면 붙으면 ad 모달 호출
            this.showADModal = true

            /**
             * Call facade-api Endpoint Example
             * Request URL Pattern >> /facade-api/*
             */
            const response = await fetch('/facade-api/v3/home/main').then((res) =>
                res.json()
            )
            console.log(response)
        },
        created() {
            const HTML = document.getElementsByTagName('html')[0]
            const BODY = document.body
            /*
                behavior
                    swipe -> children swipe don't move
                    click -> children swipe move
            */
            EventBus.$on('cMenuActive', (id, behavior) => {
                //button setting
                for (let value of this.categoryBestArray) {
                    value.isActive = false
                }
                if (id > 2) this.categoryMenuSwiper.slideTo(id)
                if (id < 3) this.categoryMenuSwiper.slideTo(0)
                this.categoryBestArray[id].isActive = true
                //swipe setting
                this.categoryParentSwiper.slideTo(id, 500)
                if (behavior == 'click') this.categoryChildSwiper[id].slideTo(0, 0)
            })
            EventBus.$on('cMenuSwiper', (swiper) => {
                this.categoryMenuSwiper = swiper
            })
            EventBus.$on('cParentSwiper', (swiper) => {
                this.categoryParentSwiper = swiper
            })
            EventBus.$on('cChildSwiper', (swiper) => {
                this.categoryChildSwiper = swiper
            })
            EventBus.$on('categorySwiperChange', (id, status) => {
                if (status == 'next') {
                    if (id > 2) this.categoryMenuSwiper.slideTo(id)
                } else if (status == 'prev') {
                    if (id < 3) this.categoryMenuSwiper.slideTo(0)
                }
            })
            EventBus.$on('cMultiChange', (id) => {
                console.log('change', id)
                EventBus.$emit('cMenuActive', id, 'swipe')
            })

            //ranking
            EventBus.$on('rMenuActive', (id, behavior = 'swipe') => {
                for (let value of this.rankingProductArray) {
                    value.isActive = false
                }
                if (id > 2) this.rankingMenuSwiper.slideTo(id)
                if (id < 3) this.rankingMenuSwiper.slideTo(0)
                this.rankingProductArray[id].isActive = true
                this.rankingParentSwiper.slideTo(id, 500)
                if (behavior == 'click') this.rankingChildSwiper[id].slideTo(0, 0)
            })
            EventBus.$on('rMenuSwiper', (swiper) => {
                this.rankingMenuSwiper = swiper
            })
            EventBus.$on('rParentSwiper', (swiper) => {
                this.rankingParentSwiper = swiper
            })
            EventBus.$on('rChildSwiper', (swiper) => {
                this.rankingChildSwiper = swiper
            })
            EventBus.$on('rParentSwiperChange', (id, status) => {
                if (status == 'next') {
                    if (id > 2) this.rankingMenuSwiper.slideTo(id)
                } else if (status == 'prev') {
                    if (id < 3) this.rankingMenuSwiper.slideTo(0)
                }
            })
            EventBus.$on('rMultiChange', (id) => {
                EventBus.$emit('rMenuActive', id)
            })

            EventBus.$on('allModalOpen', () => {
                this.isAllModalOpen = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('allModalClose', () => {
                this.isAllModalOpen = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
        },
        beforeDestroy() {
            EventBus.$off('cMenuActive')
            EventBus.$off('cMenuSwiper')
            EventBus.$off('cParentSwiper')
            EventBus.$off('cChildSwiper')
            EventBus.$off('categorySwiperChange')
            EventBus.$off('cMultiChange')
            EventBus.$off('rMenuActive')
            EventBus.$off('rMenuSwiper')
            EventBus.$off('rParentSwiper')
            EventBus.$off('rChildSwiper')
            EventBus.$off('rParentSwiperChange')
            EventBus.$off('rMultiChange')
            EventBus.$off('allModalOpen')
            EventBus.$off('allModalClose')
        },
        methods: {
            test() {
                alert('88')
            }
        },
        watch: {
            adModalState(o, n) {
                console.log(o, n)
            }
        }
    }
</script>
