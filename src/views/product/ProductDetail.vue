<template>
    <section class="product_detail_area">
        <!--  header -->
        <!-- <SubTopVipHeader
            title="상품상세"
            ref="vipHeader"
            :fixed="headerFix"
            :shadow="headerShadow"
            :subMenuShow="headerSubMenuShow"
            :subMenuData="headerSubMenu"
        /> -->

        <ProductHeader
            :alpha="dataRatio"
            :type="headerType"
            :anchorShow="headerSubMenuShow"
            :anchorMenus="headerSubMenu"
        />
        <!--  floating go top btn -->
        <transition name="fade-ani">
            <button type="button" class="floating_top_btn" v-if="mixinSt > 200">
                <img :src="`${$S3}m_icon/floating-top.svg`" alt="상단가기" />
            </button>
        </transition>

        <!-- 상단 이미지 영역 -->
        <ProductDetailMainGoods ref="productImgBox" :type="headerType" />

        <!-- 상품 세일 정보 -->
        <article class="product_time_sale">
            <div class="product_time_sale__time">
                <span class="inner_box">
                    타임 세일<span class="count_hour">23</span>:<span class="count_min"
                        >21</span
                    >:<span class="count_sec">53</span> 남음
                </span>
            </div>
            <div class="product_time_sale_day">
                <span class="inner_box">
                    할인 기간이
                    <strong class="color_red">
                        <span class="count_day">12</span>일
                        <span class="count_hour">12</span>시간
                        <span class="count_min">40</span>분
                        <span class="count_sec">53</span>초
                    </strong>
                    남았어요!
                </span>
            </div>
        </article>

        <!-- 상품 로케이션 -->
        <article class="product_location_area">
            <div class="location_box">
                <span class="location">여성의류</span>
                <span class="location">탑</span>
                <span class="location">스웨트셔츠</span>
            </div>
            <div class="btn_box">
                <button type="button" class="btn_share"></button>
            </div>
        </article>

        <!-- 제품 정보  -->
        <ProductDetailInfo />

        <!-- 판매자 정보  -->
        <article class="seller_info_area section_gap">
            <div class="seller_info_area__shop_box">
                <div class="inner_box">
                    <i class="icon_seller"></i>
                    <span class="seller_info_area__shop_name"> naviglio39 </span>
                </div>
                <div class="inner_box">
                    <a href="#" class="seller_info_area__shop_link">판매자 자세히보기</a>
                </div>
            </div>
            <div class="seller_info_area__review">
                <dl class="seller_info_area__inner_box">
                    <dt class="seller_info_area__tit">판매된 상품</dt>
                    <dd class="seller_info_area__num">315,368개</dd>
                </dl>
                <dl class="seller_info_area__inner_box">
                    <dt class="seller_info_area__tit">구매자 만족도</dt>
                    <dd class="seller_info_area__num">95점</dd>
                </dl>
                <dl class="seller_info_area__inner_box">
                    <dt class="seller_info_area__tit">전체 구매후기</dt>
                    <dd class="seller_info_area__num">15,368개</dd>
                </dl>
            </div>
        </article>

        <!-- 연관 기획전 -->
        <article class="selling_event">
            <h3 class="selling_event__title">연관 기획전</h3>
            <div class="selling_event__list">
                <div class="selling_event__inner_box" v-for="i in 2" :key="i">
                    <a href="#" class="selling_event__link">
                        <span class="selling_event__event_title">
                            ESSENTIAL PREMIUM OUTER ESSENTIAL PREMIUM OUTER
                        </span>
                        <span class="selling_event__event_desc">
                            올 겨울 꼭 필요한 프리미엄 아우터를 만날 기회 올 겨울 꼭
                            필요한 프리미엄 아우터를 만날 기회
                        </span>
                    </a>
                </div>
            </div>
        </article>

        <!-- 이미지 배너 -->
        <MarketingBanner :img="marketingBannerImg" />

        <!-- recopick 배너 -->
        <div class="recopick_wrap">
            <div class="observe-visibility abs-full w-full">
                <div class="main_title white_bg">
                    <p class="main_title__name fs-18">고객님께 추천하는 상품</p>
                </div>
                <SmallProduct :img="smallBannerImg" />
            </div>
        </div>

        <!-- 기획전 배너 영역 -->
        <div class="product_event_banner section_gap">
            <a href="#">
                <img :src="sellingEventBanner" alt="기획전 배너" class="banner" />
            </a>
        </div>

        <!-- 상세보기 -->
        <article class="vip_desc_top" ref="detailView">
            <div class="item_info_desc box_border_top">
                <div class="inner_box">
                    <h3 class="title">상세정보</h3>
                    <div class="desc_box">
                        <dl>
                            <dt>상품번호</dt>
                            <dd>25831874</dd>
                        </dl>
                        <dl>
                            <dt>상품상태</dt>
                            <dd>새상품</dd>
                        </dl>
                        <dl>
                            <dt>원산지</dt>
                            <dd>ITALIA. ROMANIA</dd>
                        </dl>
                        <dl>
                            <dt>출고지</dt>
                            <dd>서울 광진구</dd>
                        </dl>
                        <dl>
                            <dt>판매형태</dt>
                            <dd>뱡행수입</dd>
                        </dl>
                    </div>
                </div>
                <!-- 중고 상품 , 리퍼브 상품 안내  -->
                <div class="used_product_info">
                    <p>이 상품은 <strong>중고 상품</strong>입니다.</p>
                </div>

                <div class="seller_state">
                    <button type="button" class="seller_state__btn">
                        <strong class="seller_state__txt01">구매 전 확인!</strong>
                        <span class="seller_state__txt02" v-if="showCaseNum === 1">
                            주문 전 재고 확인을 권장합니다.
                        </span>
                        <span class="seller_state__txt02" v-if="showCaseNum === 2"
                            >주문 전 꼭 상품문의를 해주세요.</span
                        >
                        <span class="seller_state__txt02" v-if="showCaseNum === 3">
                            예상보다 배송이 늦어질 수 있습니다.
                        </span>
                    </button>
                </div>

                <div class="inner_box">
                    <div class="alarm_box">
                        <h4 class="alarm_box__title">
                            택배사 파업으로 인한 배송 및 회수 지연 안내
                        </h4>
                        <div class="alarm_box__txt_box">
                            <span class="alarm_box__txt">
                                파업지역 발송하는 상품의 경우 한진/경동/우체국으로
                                변경되실 수 있고, 평균배송일보다 3~4일 지체될 수 있는 점
                                양해바랍니다.
                            </span>
                        </div>
                    </div>
                </div>

                <div class="seller_write">
                    <div class="code_box" :class="{ 'on_box': viewMore }">
                        <ProductDetailSellerCodeBox />
                    </div>
                    <div class="declare-wrapper ptb-40" v-if="viewMore">
                        <span class="c-g136 fs-12 d-inline-block ptb-5"
                            >해당 상품정보에 문제가 있으면 알려주세요.</span
                        >
                        <button type="button" class="btn declare-button">신고하기</button>
                    </div>
                    <div class="btn_accordion">
                        <button
                            class="btn_more"
                            :class="{ 'on_btn': viewMore }"
                            @click="viewMoreBtn()"
                        >
                            상품정보 {{ btnMoreText }}
                        </button>
                    </div>
                </div>
            </div>
        </article>

        <!-- 상품 리뷰 review -->
        <review ref="review">
            <template v-slot:title>상품리뷰</template>
            <template v-slot:count>1,532</template>
        </review>

        <!-- style review -->
        <StyleReview />

        <!-- size check -->
        <article class="my_size_check box_border_top">
            <div class="my_size_check__inner">
                <button type="button" class="btn_size_check">
                    <span class="txt"
                        >나에게 맞는 <strong>Maison Kitsune</strong>의
                        <strong>자켓</strong> 사이즈가 궁금하시다면?</span
                    >
                </button>
            </div>
        </article>

        <!-- 상품문의 -->
        <ProductQnA ref="productQnA" />

        <!-- vip menu -->
        <article class="vip_sub_menu_area box_border_top">
            <div class="menu_list">
                <ul>
                    <li>
                        <a href="#">배송/반품/교환 안내</a>
                    </li>
                    <li>
                        <a href="#">상품 고시 정보</a>
                    </li>
                </ul>
            </div>
        </article>

        <!-- seller shop info -->
        <SellerShopInfo />

        <!-- 판매자 리뷰 review -->
        <review isType="seller">
            <template v-slot:title>
                판매자의 <strong>#전체상품</strong><br />
                리뷰가 궁금하시다면?
            </template>
            <template v-slot:count>1,532</template>
        </review>

        <!-- 연관상품 -->
        <relate-swiper v-for="data in relateSwiperData" :key="data.text">
            <strong>{{ data.bold }}</strong
            >{{ data.text }}
        </relate-swiper>

        <!-- why mustit -->
        <article class="vip_content_area section_gap">
            <h3 class="vip_content_area__title">WHY MUST’IT</h3>
            <div class="vip_content_area__inner">
                <div class="vip_content_area__left_banner">
                    <a href="#">
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_banner/m-vip-bottom-banner.jpg"
                            alt="국내 온라인 명품 플랫폼 거래액 1위"
                        />
                    </a>
                </div>
                <div class="vip_content_area__right_banner">
                    <div
                        class="inner_box"
                        :class="`sub_img0${index + 1}`"
                        v-for="(list, index) in whyMustit"
                        :key="index"
                    >
                        <a href="#">
                            <span class="sub_title">{{ list.title }}</span>
                            <span class="sub_txt">{{ list.text }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>

        <!-- modal -->
        <transition name="slide-up">
            <div class="layer_node" v-if="isAllModalOpen">
                <div class="all_layer_insert" v-if="isAllModalOpen">
                    <component :is="layer"></component>
                </div>
            </div>
        </transition>
        <!-- VIP 內 멤버십 혜택 노출 확대 - 멤버십 혜택 안내 -->
        <transition name="slide-up">
            <div class="layer_node" v-if="isAllModalMembershipOpen">
                <div class="all_layer_insert" v-if="isAllModalMembershipOpen">
                    <component :is="layer2"></component>
                </div>
            </div>
        </transition>
        <!-- VIP 內 멤버십 혜택 노출 확대 - 적립금 지급 안내 -->
        <transition name="fade-ani">
            <div class="layer_node" v-if="showLayer">
                <div class="mask" @click="layerClose"></div>
                <div class="layer_insert">
                    <MembershipPointInfo />
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
    //import Swiper from 'swiper'
    import EventBus from '@/assets/js/EventBus'
    import scrollEvent from '@/mixin/scrollEvent'
    import SubTopVipHeader from '@/components/temp/SubTopVipHeader.vue'
    import ProductDetailMainGoods from '@/views/product/ProductDetailMainGoods.vue'
    import ProductDetailInfo from '@/views/product/ProductDetailInfo.vue'
    import MarketingBanner from '@/modules/VMarketingSwiper.vue'
    import SmallProduct from '@/modules/VFreeSwiper.vue'
    import ProductDetailSellerCodeBox from '@/views/product/VSellerCodeBox.vue'
    import Review from '@/views/product/ProductDetailReview.vue'
    import StyleReview from '@/views/product/ProductDetailStyleReview.vue'
    import SellerShopInfo from '@/views/product/ProductDetailSellerShopInfo.vue'
    import RelateSwiper from '@/views/product/ProductDetailRelatedGoods.vue'
    import ProductQnA from '@/views/product/ProductDetailProductQnA.vue'
    import MembershipPointInfo from '@/views/layer/product/MembershipPointInfo.vue'

    import ProductHeader from '@/components/ProductHeader.vue'

    export default {
        components: {
            SubTopVipHeader,
            ProductDetailMainGoods,
            ProductDetailInfo,
            MarketingBanner,
            SmallProduct,
            ProductDetailSellerCodeBox,
            Review,
            StyleReview,
            SellerShopInfo,
            RelateSwiper,
            ProductQnA,
            MembershipPointInfo,
            ProductHeader
        },
        mixins: [scrollEvent],
        data() {
            return {
                objState: {
                    header: null,
                    productImg: null,
                    productDetail: null,
                    review: null,
                    productQnA: null
                },
                headerFix: false,
                headerShadow: false,
                showCaseNum: 1,
                marketingBannerImg:
                    'https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_banner/marketing_banner_img04.png',
                smallBannerImg:
                    'https://cdn.mustit.co.kr/lib/upload/product/DenimShop/2020/06/1593250651-58.jpg/_dims_/resize/250x250/extent/250x250',
                sellingEventBanner:
                    'https://dummyimage.com/328x384/49a2b6/fff&text=328xauto',
                viewMore: false,
                btnMoreText: '더보기',
                relateSwiperData: [
                    {
                        bold: `스웨이드셔츠`,
                        text: `를 찾고 계신가요?`
                    },
                    {
                        bold: `Maison Kitsune`,
                        text: ` 주문 많은 상품`
                    }
                ],
                headerSubMenuShow: false,
                headerSubMenu: [
                    { el: null, state: '', name: '상세정보' },
                    { el: null, state: '', name: '리뷰', count: 1532 },
                    { el: null, state: '', name: '상품문의', count: 45 }
                ],
                layerName: 'ProductDetailSellerInfoModal',
                isAllModalOpen: false,
                layerName2: 'MembershipBenefitInfo',
                isAllModalMembershipOpen: false,
                showLayer: false,
                whyMustit: [
                    {
                        title: '200% 책임 보상제',
                        text: '정품이 아니라면 무조건 책임 보상!'
                    },
                    {
                        title: '무상 A/S 서비스',
                        text: '사후관리도 저희가 해드릴게요~'
                    },
                    {
                        title: '최대 10만원',
                        text: '품절로 인한 취소, 배송 지연도 보상!'
                    },
                    {
                        title: '무료 교환 반품',
                        text: '월 최대 5회까지 무료 교환 반품!'
                    }
                ],
                dataRatio: 0,
                query: this.$route.query.contents,
                headerType: 1,
                getBanner: false
            }
        },
        computed: {
            layer() {
                const layers = this.layerName
                return () => import(`@/views/product/${layers}.vue`)
            },
            layer2() {
                const layers = this.layerName2
                return () => import(`@/views/layer/product/${layers}.vue`)
            }
        },
        watch: {
            viewMore: function (n) {
                n ? (this.btnMoreText = '접기') : (this.btnMoreText = '더보기')
            }
        },
        beforeMount() {},
        mounted() {
            //element
            this.objState.header = this.$refs.vipHeader
            this.objState.productImg = this.$refs.productImgBox.$el
            //서브 메뉴 위치 저장
            this.objState.productDetail = this.$refs.detailView
            this.objState.review = this.$refs.review.$el
            this.objState.productQnA = this.$refs.productQnA.$el
            //서브 메뉴 컴포넌트에서 사용
            this.headerSubMenu[0].el = this.objState.productDetail
            this.headerSubMenu[1].el = this.objState.review
            this.headerSubMenu[2].el = this.objState.productQnA

            document.addEventListener('scroll', this.scrollEvents)
        },
        created() {
            const HTML = document.getElementsByTagName('html')[0]
            const BODY = document.body
            EventBus.$on('ModalMembershipOpen', () => {
                this.isAllModalMembershipOpen = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('ModalMembershipClose', () => {
                this.isAllModalMembershipOpen = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
            EventBus.$on('showModal', () => {
                console.log('show')
                this.showLayer = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('hideModal', () => {
                console.log('hide')
                this.showLayer = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })

            // 제휴사 통해 로그인 시 type2 설정
            console.log(this.query)
            if (this.query == 'partners') {
                this.headerType = 2
            }
        },
        beforeDestroy() {
            EventBus.$off('ModalMembershipOpen')
            EventBus.$off('ModalMembershipClose')
            EventBus.$off('showModal')
            EventBus.$off('hideModal')
        },
        methods: {
            scrollEvents() {
                // const headerOpacity = this.objState.header.$el.querySelectorAll(
                //     '.product_header__title , .img_opacity'
                // )
                const prodImg =
                    this.objState.productImg.querySelector('.goods_img_slider')
                const detailBox = this.objState.productDetail
                const review = this.objState.review
                const qna = this.objState.productQnA
                const headerHeight = 52

                let st = window.pageYOffset || document.documentElement.scrollTop,
                    imgOffsetTop = this.objState.productImg.offsetTop,
                    imgHeight = this.objState.productImg.offsetHeight,
                    imgScrollTop = st - imgOffsetTop,
                    ratio = imgScrollTop / (imgHeight - 100),
                    detailTop = detailBox.offsetTop - headerHeight,
                    detailEnd =
                        detailBox.offsetTop + detailBox.offsetHeight - headerHeight,
                    reviewTop = review.offsetTop - headerHeight,
                    reviewEnd = review.offsetTop + review.offsetHeight - headerHeight,
                    qnaTop = qna.offsetTop - headerHeight,
                    qnaEnd = qna.offsetTop + qna.offsetHeight - headerHeight

                //need 0 ~ 1
                if (ratio > 1) {
                    ratio = 1
                } else if (ratio < 0) {
                    ratio = 0
                }
                this.dataRatio = ratio

                //header 고정
                if (st >= imgOffsetTop) {
                    this.headerFix = true
                } else if (st < imgOffsetTop) {
                    this.headerFix = false
                }

                //header opacity
                // headerOpacity.forEach((el) => {
                //     el.style.opacity = ratio
                // })

                //header shadow
                // if (st > imgOffsetTop + imgHeight) {
                //     this.headerShadow = true
                // } else {
                //     this.headerShadow = false
                // }

                //product image
                prodImg.style.transform = `translate(0,${ratio * 100}px)`

                //header sub menu show
                if (st > detailTop) {
                    this.headerSubMenuShow = true
                    if (st <= detailEnd) {
                        this.headerSubMenu[0].state = 'active'
                    } else if (st > detailEnd) {
                        this.headerSubMenu[0].state = ''
                    }

                    //review 영역
                    if (st > reviewTop) {
                        this.headerSubMenu[1].state = 'active'
                        if (st > reviewEnd) {
                            this.headerSubMenu[1].state = ''
                        }
                    } else if (st < reviewTop) {
                        this.headerSubMenu[1].state = ''
                    }

                    //상품문의 영역
                    if (st > qnaTop) {
                        this.headerSubMenu[2].state = 'active'
                        if (st > qnaEnd) {
                            this.headerSubMenu[2].state = ''
                        }
                    } else if (st < qnaTop) {
                        this.headerSubMenu[2].state = ''
                    }
                } else {
                    this.headerSubMenuShow = false
                }
            },
            viewMoreBtn() {
                this.viewMore = !this.viewMore
            },
            layerClose() {
                EventBus.$emit('hideModal')
            }
        },
        unmounted() {
            document.removeEventListener('scroll', this.scrollEvents)
        }
    }
</script>

<style lang="scss">
    .max_sale_price__cupon_check {
        display: block !important;
    }
    .product_detail_area {
        padding-bottom: 84px;
    }
    .product_detail_area {
        .goods_select__size_tip {
            + .goods_select__option_box {
                .detail_price_info {
                    margin-top: 16px;
                    height: 167px;
                }
            }
        }
        .detail_price_info {
            height: 199px;
        }
    }
    .layer_cart_box {
        transform: opacity 1;
        &.cart_pop_on {
            opacity: 1;
            display: block !important;
        }
        &.cart_pop_off {
            opacity: 0;
        }
    }
    select {
        -webkit-appearance: none;
        -webkit-border-radius: 0;
        margin: 0;
    }
</style>
