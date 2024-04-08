<template>
    <section class="product_detail_area public_content">
        <div
            class="test_banner"
            style="width: 100%; height: 150px; background: yellow"
        ></div>
        <SubHeader :type="6" :associate="true" />
        <!-- 타임세일, 할인상품 작업 예정 -->
        <ItemsBanner :data="itemsBannerData" />
        <!-- product 정보 영역 -->
        <ProductInfo :data="infoData" />
        <!-- 회원가입하고 최대혜택가로 구매하기 -->
        <SignUpBtn />
        <Divider />
        <!-- 혜택안내 -->
        <Benefit />
        <!-- 배송정보 -->
        <Delivery />
        <!-- 가격비교 -->
        <PDPTitle title="가격비교" :count="this.compareDataLen" class="compare_section" />
        <ComparePriceWrap @compareItemLength="compareLen" />
        <!-- 이 달의 혜택 -->
        <Divider />
        <BenefitBanner id="benefitBanner" />
        <!-- BenefitBanner 하단 연관기획전 오는 경우 여백 불필요하여 여백이 필요한 경우 간격모듈 사용 -->
        <!-- <Divider :whiteColor="true" style="height:24px" /> -->
        <!-- 연관 기획전 -->
        <PDPTitle :bg="true" title="연관 기획전" />
        <ExhibitionList :data="exhibitionData" />
        <Divider />
        <!-- 고객님께 추천하는 제품 -->
        <PDPTitle :bg="true" title="고객님께 추천하는 제품" />
        <FreeSwiper />
        <Divider />
        <!-- 기획전 배너 영역 
            ! 태그 및 스타일 변경 divider 사용
        -->
        <article class="PDP_product_event_banner">
            <a href="#">
                <img :src="sellingEventBanner" alt="기획전 배너" class="banner" />
            </a>
        </article>
        <Divider />
        <!-- 탭위에 간격 8px 존재로 인한 엘리먼트 추가 -->
        <hr class="hei8" />
        <PDPTab />
        <PDPTitle :bg="true" title="상세정보" class="detail_section" />
        <!-- 
            @@상세 정보 :: 기존 리소스 
            @@추가 작업 한 사항 :: 
            타이틀 제거 PDPTitle로 대체, pt_0 클래스 추가, pinch_zoom_info 엘리먼트 추가
        -->
        <article class="vip_desc_top" ref="detailView">
            <!-- pt_0 클래스 추가 -->
            <div class="item_info_desc pt_0">
                <div class="inner_box">
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
                        <span class="seller_state__txt02">
                            주문 전 재고 확인을 권장합니다.
                        </span>
                        <span class="seller_state__txt02" v-if="false"
                            >주문 전 꼭 상품문의를 해주세요.</span
                        >
                        <span class="seller_state__txt02" v-if="false">
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
                <!-- 추가 pinch 정보-->
                <div class="pinch_zoom_info">
                    아래 상세정보를 확대해서 볼 수 있습니다.
                </div>
                <!-- //추가  -->
                <div class="seller_write">
                    <div class="code_box" :class="{ 'on_box': true }">
                        <ProductDetailSellerCodeBox />
                    </div>
                    <div class="declare-wrapper ptb-40">
                        <span class="c-g136 fs-12 d-inline-block ptb-5"
                            >해당 상품정보에 문제가 있으면 알려주세요.</span
                        >
                        <button type="button" class="btn declare-button">신고하기</button>
                    </div>
                    <div class="btn_accordion">
                        <button class="btn_more on_btn">상품정보 더보기</button>
                    </div>
                </div>
            </div>
        </article>

        <Divider />
        <!-- 리뷰 개선 -->
        <PDPTitle title="리뷰" count="3,300" :bg="true" class="review_section" />
        <PDPReviewWrap />
        <!-- 더미 문의 섹션 -->
        <div class="question_section" style="height: 200px"></div>
        <!--// 더미 문의 섹션 -->
        <!-- 하단 버튼 -->
        <PDPBottomOrderBtn @componentName="componentName" />
        <!-- slideup wrap 동적 컴포넌트 -->
        <SlideUpWrap :zIndex="zIndex" :layer="layerName" />
        <!-- fadeInWrap 동적컴포넌트 -->
        <FadeInWrap :zIndex="zIndex" :layer="layerName" />
        <!-- 페이지 시작 시 노출 되는 가격비교 토스트 -->
        <ToastWrap
            toastEl="VPDPToastComparePrice.vue"
            :show="toastCompareShow"
            :click="compareMove"
        />
        <!-- 가격알람 버튼 토스트 -->
        <CompareToast :text="toastComparAlarmText" :show="toastCompareAlarmShow" />
    </section>
</template>
<style lang="scss" scoped>
    .hei8 {
        height: 8px;
        border: 0;
        margin: 0;
    }
    .product_detail_area {
        padding-bottom: 100px;
    }
</style>

<script>
    import { vipData } from '@/assets/js/dummy/pdpContents'
    import { setItemsBannerData } from '@/assets/js/PDP'
    import { mapState, mapActions } from 'vuex'
    import { gotoStop, TabInteractive } from '@/assets/js/Common'

    /* components */
    import SubHeader from '@/components/SubHeader.vue'
    import ItemsBanner from '@/modules/VPDPItemsBanner.vue'
    import ProductInfo from '@/modules/VPDPInfo.vue'
    import SignUpBtn from '@/modules/VPDPSignUpButton.vue'
    import Benefit from '@/modules/VPDPBenefit.vue'
    import Delivery from '@/modules/VPDPDelivery.vue'
    import ComparePriceWrap from '@/modules/VPDPComparePriceWrap.vue'
    import PDPTitle from '@/modules/VPDPTitle.vue'
    import BenefitBanner from '@/modules/VBannerSwiperPadding16.vue'
    import Divider from '@/modules/VHomeDivider.vue'
    import ExhibitionList from '@/modules/VExhibitionList.vue'
    import FreeSwiper from '@/modules/VFreeSwiper.vue'
    import PDPTab from '@/modules/VPDPTab.vue'
    import PDPReviewWrap from '@/modules/VPDPReviewWrap.vue'
    import PDPBottomOrderBtn from '@/modules/VPDPBottomOrderBtn.vue'
    import SlideUpWrap from '@/modules/VModalSlideUpWrap.vue'
    import ToastWrap from '@/modules/VToastWrap.vue'
    import FadeInWrap from '@/modules/VModalFadeInWrap.vue'
    import CompareToast from '@/modules/VToastAlarmPrice.vue'

    import ProductDetailSellerCodeBox from '@/views/product/VSellerCodeBox.vue'

    //optional
    export default {
        components: {
            SubHeader,
            ItemsBanner,
            ProductInfo,
            SignUpBtn,
            Benefit,
            Delivery,
            ComparePriceWrap,
            PDPTitle,
            BenefitBanner,
            Divider,
            ExhibitionList,
            FreeSwiper,
            PDPTab,
            ProductDetailSellerCodeBox,
            PDPReviewWrap,
            PDPBottomOrderBtn,
            SlideUpWrap,
            ToastWrap,
            FadeInWrap,
            CompareToast
        },
        data() {
            return {
                /*상수*/
                constBrandName: vipData[0].detailInfo[0].brandName,
                constBrandCode: vipData[0].detailInfo[0].brandNo,
                /*데이터*/
                pdpContents: [...vipData],
                /*props data*/
                infoData: { ...vipData[0] },
                priceData: { ...vipData[0].priceInfo },
                exhibitionData: [
                    {
                        link: '#',
                        name: 'Contemporary Brand',
                        desc: '꼭 소장해야 하는 컨템포러리 브랜드'
                    },
                    {
                        link: '#',
                        name: '아울렛 창고 대방출',
                        desc: '망설이면 sold out'
                    }
                ],
                sellingEventBanner:
                    'https://dummyimage.com/328x384/49a2b6/fff&text=328xauto',
                compareDataLen: 0,
                layerName: '',
                toastCompareShow: true,
                zIndex: 0,
                toastCompareAlarmShow: false,
                toastComparAlarmText: '가격하락 알림이 신청되었습니다.',
                alarmState: '',
                tabs: null
            }
        },
        created() {
            /*
                vipContents.productImages에도 존재
                vipContents.detailInfo.imageN <- 여기 사용
            */
            this.itemsBannerData = setItemsBannerData(this.pdpContents[0].detailInfo)
        },
        watch: {
            alarmState(newVal) {
                if (newVal === 'apply') {
                    this.toastComparAlarmText = '가격하락 알림이 신청되었습니다.'
                    this.toastCompareAlarmShow = true
                } else if (newVal === 'cancelled') {
                    this.toastComparAlarmText = '가격하락 알림이 해제되었습니다.'
                    this.toastCompareAlarmShow = true
                }
            }
        },
        computed: {
            ...mapState(('modalModule', ['slideUpOpen']))
        },
        methods: {
            ...mapActions('modalModule', ['openSlideUpModal', 'closeSlideUpModal']),
            ...mapActions('modalModule', ['fadeModalAction', 'setFadeComponentName']),
            compareLen(value) {
                this.compareDataLen = value
            },
            compareMove() {
                gotoStop('.compare_section')
            },
            componentName(value) {
                this.layerName = value
            },
            toastHide() {
                this.tabs.scrollListener()
                if (!this.toastCompareShow) return false
                this.toastCompareShow = false
            }
        },
        mounted() {
            document.addEventListener('scroll', this.toastHide)

            this.tabs = new TabInteractive({
                tabs: '.PDP_tab > button',
                tabActiveClass: 'active',
                tabHei: 50,
                sections: [
                    {
                        start: '.detail_section',
                        end: '.vip_desc_top'
                    },
                    {
                        start: '.review_section',
                        end: '.PDP_review'
                    },
                    '.question_section'
                ]
            })
        },
        beforeDestroy() {
            document.removeEventListener('scroll', this.toastHide)
            if (this.tabs) {
                this.tabs = null
            }
        }
    }
</script>
