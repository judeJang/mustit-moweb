<template>
    <article class="product_info">
        <!-- infoheader -->
        <div class="info_header">
            <h2 class="info_header__name">
                <span class="inner_box">
                    <span class="brand_name brand_google">Maison Kitsune</span>
                </span>
            </h2>
            <!-- 공유하기,찜 -->
            <div class="info_header__btn_box">
                <!-- <button
                    class="btn_wish e_btn_wish"
                    :class="[isActive ? 'wish_list_on ' : 'wish_list_off ']"
                    @click="classToggle()"
                ></button> -->
                <!-- <button class="btn_share"></button> -->
            </div>
        </div>
        <p class="goods_desc">
            23SS 메종키츠네 폭스헤드 맨투맨 소프트 옐로우 AM00303KM0001-P724
        </p>
        <!-- [D] 리뷰 
            class: score_0~10
        -->
        <div class="goods_score">
            <div class="goods_score__star_num">
                <span class="star score_10">
                    <i class="comp_icon_star_12"></i>
                </span>
                <span class="star score_10">
                    <i class="comp_icon_star_12"></i>
                </span>
                <span class="star score_10">
                    <i class="comp_icon_star_12"></i>
                </span>
                <span class="star score_10">
                    <i class="comp_icon_star_12"></i>
                </span>
                <span class="star score_5">
                    <i class="comp_icon_star_12"></i>
                </span>
            </div>
            <span class="goods_score__review_num">리뷰 523개</span>
        </div>
        <!-- 판매수량 -->
        <div class="goods_sales_quantity">
            <i class="icon_purchase"></i>
            <!-- [case1] 상품 판매 일수 < 365 -->
            <p class="text" v-if="salesQuantityDate === 0" @click="salesQuantityDate = 1">
                22.03.30부터 어제까지 <strong class="num_customer">2,598명</strong>이
                구매했어요!
            </p>
            <!-- [case2] 상품 판매 일수 >= 365 -->
            <p class="text" v-else @click="salesQuantityDate = 0">
                최근 1년 동안 <strong class="num_customer">2,598명</strong>이 구매했어요!
            </p>
        </div>
        <!-- 할인가 || 즉시 할인가 -->
        <div class="goods_price_area">
            <div class="goods_price">
                <div class="goods_price__txt">
                    <span class="txt_box fc_gray2">{{ priceTitle }}</span>
                </div>
                <div class="goods_price__price">
                    <span class="align_item">
                        <span class="font-bold">2,590,000</span>
                        <span class="won">원</span>
                        <span class="discount">24%</span>
                    </span>
                    <del class="goods_cost gap_m2">2,830,000원</del>
                </div>
            </div>
        </div>
        <!-- 할인가,최대혜택가 -->
        <div class="goods_price_area">
            <div class="goods_price">
                <div class="goods_price__txt">
                    <span class="txt_box fc_gray5">{{ priceTitle }}</span>
                </div>
                <div class="goods_price__price">
                    <span class="align_item">
                        <span class="font_normal"> 2,590,000 </span>
                        <span class="won">원</span>
                        <s class="goods_cost">2,830,000원</s>
                    </span>
                </div>
            </div>
            <div class="goods_price">
                <div class="goods_price__txt">
                    <span class="txt_box fc_red">
                        최대혜택가
                        <i class="icon_help e_layer_popup"> </i>
                    </span>
                </div>
                <div class="goods_price__price">
                    <span class="align_item">
                        <span class="font-bold"> 2,590,000 </span>
                        <span class="won">원</span>
                        <span class="discount">24%</span>
                    </span>
                    <div class="max_sale_price goods_price__cupon" @click="couponBtn">
                        <div class="max_sale_price__cupon" v-if="couponDown">
                            <button class="max_sale_price__btn_box">할인받기</button>
                        </div>
                        <div
                            class="max_sale_price__cupon_check"
                            v-else
                            style="display: block"
                        >
                            <span class="max_sale_price__btn_box"> 할인적용 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 판매가 || 즉시 할인가-->
        <div class="goods_price_area">
            <div class="goods_price">
                <div class="goods_price__txt">
                    <span class="txt_box fc_gray2">{{ priceTitle2 }}</span>
                </div>
                <div class="goods_price__price">
                    <span class="align_item">
                        <span class="font-bold"> 2,590,000 </span>
                        <span class="won">원</span>
                    </span>
                </div>
            </div>
        </div>

        <!-- 하단  영역 -->
        <FootArea />

        <!-- app Download -->
        <div class="app_download">
            <button class="app_download__btn">
                <dl>
                    <dt>앱할인가</dt>
                    <dd>
                        <span class="price">2,630,000</span>
                        <span class="won">원</span>
                    </dd>
                </dl>
                <span class="txt">APP 다운받기</span>
            </button>
        </div>

        <!-- VIP 內 멤버십 혜택 노출 확대 230412 -->

         <div class="member_benefit_box">
            <p class="title">고객님을 위한 혜택</p>
                <div class="member_benefit_info">
                    <div class="txt_box"><i class="icon_img icon_benefit_point"></i>최대 5,200원 적립 <button type="button" class="more_info" @click="layerShow">
                        <i class="comp_icon_circle_info"></i></button></div>
                    <div class="txt_box"><i class="icon_img icon_creditcard"></i>최대 8개월 (1,568,500원 X 8개월) 무이자 할부 <button class="btn_card_info"> 카드사별 무이자 할부 혜택 보기 </button></div>
                    <button class="btn_membership_benefit" @click="MembershipOpen()">머스트잇 멤버십 혜택 보기</button>
                </div>
         </div>
<!-- 
        <div class="member_benefit_box">
            <div class="member_benefit_info">
                <div class="inner_box icon_benefit_point">
                    <div class="txt_box">
                        <span class="txt_box">최대 5,200원 적립  
                    <button type="button" @click="layerShow">
                        <i class="comp_icon_circle_info"></i>
                    </button>
                    
                    </span>
                       
                    </div>
                </div>
                <div class="inner_box icon_creditcard">
                    <div class="txt_box">
                      최대 8개월 (1,568,500원 X 8개월) 무이자 할부 <button class="btn_card_info"> 카드사별 무이자 할부 혜택 보기 </button>
                    </div>
                </div>
                <button class="btn" @click="MembershipOpen()">머스트잇 멤버십 혜택 보기</button>
            </div>
        </div> -->


        

        <!-- show size modal btn -->
        <div class="size_search">
            <button class="size_search__btn">고객님 사이즈를 찾아보세요!</button>
        </div>

        <!-- accordionBtn-->
        <div class="folding_area" ref="accordionList">
            <div class="folding_box frist_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_as">
                        <div class="txt_box color_mint">
                            이 상품은 머스트잇이 무상 A/S를 제공합니다.
                        </div>
                    </div>
                    <div
                        class="folding_box__btn e_folding_action"
                        @click="accordionBtn($event)"
                    >
                        <button class="btn_img">
                            <img
                                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_icon/icon_arrow_s16.svg"
                                alt="더보기"
                            />
                        </button>
                    </div>
                </div>
                <div class="folding_box__desc">
                    <div class="list_box">
                        <ul>
                            <li>구매 후 6개월 이내 무상 A/S</li>
                            <li>신뢰할 수 있는 백화점 수준의 A/S 서비스</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_benefit_point">
                        <div class="txt_box">
                            <i class="icon_img"></i>
                            최대 13,000원 정립
                        </div>
                    </div>
                    <div
                        class="folding_box__btn e_folding_action"
                        @click="accordionBtn($event)"
                    >
                        <button class="btn_img">
                            <img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                alt="더보기"
                            />
                        </button>
                    </div>
                </div>
                <div class="folding_box__desc">
                    <span class="txt">
                        상품 수령 후 7일 이내 구매결정 및 포토리뷰 작성 시 지급
                    </span>
                </div>
            </div>
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_creditcard">
                        <div class="txt_box">
                            <i class="icon_img"></i>
                            최대 8개월 (1,568,500원 X 8개월) 무이자 할부
                            <button class="btn_card_info">
                                카드사별 무이자 할부 혜택 보기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 국내배송 -->
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_delivery">
                        <div class="txt_box color_red">
                            <i class="icon_img"></i>
                            01/04(화) ~ 01/05(수) 도착예상
                            <i class="icon_help e_layer_popup"></i>
                        </div>
                        <div class="txt_box">무료배송 / 국내배송</div>
                    </div>
                </div>
            </div>
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_delivery">
                        <div class="txt_box color_red">
                            <i class="icon_img"></i>
                            01/04(화) ~ 01/05(수) 도착예상
                            <i class="icon_help e_layer_popup"></i>
                        </div>
                        <div class="txt_box">4,000원 / 국내배송</div>
                    </div>
                    <div
                        class="folding_box__btn e_folding_action"
                        @click="accordionBtn($event)"
                    >
                        <button class="btn_img">
                            <img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                alt="더보기"
                            />
                        </button>
                    </div>
                </div>
                <div class="folding_box__desc">
                    <p class="txt">추가 배송비 : 제주도 3,000원, 도서산간 5,000원</p>
                </div>
            </div>
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_delivery">
                        <div class="txt_box color_red">
                            <i class="icon_img"></i>
                            01/04(화) ~ 01/05(수) 도착예상<i
                                class="icon_help e_layer_popup"
                            ></i>
                        </div>
                        <div class="txt_box">4,000원 / 국내배송 / 화물직배송</div>
                    </div>
                    <div
                        class="folding_box__btn e_folding_action"
                        @click="accordionBtn($event)"
                    >
                        <button class="btn_img">
                            <img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                alt="더보기"
                            />
                        </button>
                    </div>
                </div>
                <div class="folding_box__desc">
                    <div class="list_box">
                        <h3 class="title">화물직배송이란?</h3>
                        <ul>
                            <li>
                                택배로 배송이 불가한 상품으로 화물직배송만 가능한
                                상품입니다.
                            </li>
                            <li>해당 상품은 묶음배송이 불가합니다.</li>
                            <li class="important">배송불가 지역 : 제주도, 도서간지역</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_delivery">
                        <div class="txt_box color_red">
                            <i class="icon_img"></i>
                            01/04(화) ~ 01/05(수) 도착예상
                            <i class="icon_help e_layer_popup"></i>
                        </div>
                        <div class="txt_box">무료배송 / 국내배송</div>
                    </div>
                    <div
                        class="folding_box__btn e_folding_action"
                        @click="accordionBtn($event)"
                    >
                        <button class="btn_img">
                            <img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                alt="더보기"
                            />
                        </button>
                    </div>
                </div>
                <div class="folding_box__desc">
                    <p class="txt">추가 배송비 : 제주도 3,000원, 도서산간 5,000원</p>
                </div>
                <div class="bundle_delivery">
                    <button class="btn">묶음배송 가능상품 보기</button>
                </div>
            </div>
            <!-- 해외배송 -->
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_delivery_03">
                        <div class="txt_box color_red">
                            <i class="icon_img"></i>
                            평균 배송 6일 소요<i class="icon_help e_layer_popup"></i>
                        </div>
                        <div class="txt_box">무료배송 / 해외배송 / 관부가세 포함</div>
                    </div>
                    <div
                        class="folding_box__btn e_folding_action"
                        @click="accordionBtn($event)"
                    >
                        <button class="btn_img">
                            <img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                alt="더보기"
                            />
                        </button>
                    </div>
                </div>
                <div class="folding_box__desc">
                    <p class="txt">
                        관부가세 미포함인 경우 구매금액이 약 $150이 넘을 시 관부가세가
                        발생할 수 있습니다.<br />구매한 여러 개의 상품이 동일한 날짜에
                        통관될 경우 합산과세가 발생할 수 있습니다.
                    </p>
                </div>
            </div>
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_delivery_03">
                        <div class="txt_box color_red">
                            <i class="icon_img"></i>
                            평균 배송 6일 소요<i class="icon_help e_layer_popup"></i>
                        </div>
                        <div class="txt_box">
                            1개당 27,000원 / 해외배송 / 관부가세 미포함
                        </div>
                    </div>
                    <div
                        class="folding_box__btn e_folding_action"
                        @click="accordionBtn($event)"
                    >
                        <button class="btn_img">
                            <img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                alt="더보기"
                            />
                        </button>
                    </div>
                </div>
                <div class="folding_box__desc">
                    <p class="txt">
                        관부가세 미포함인 경우 구매금액이 약 $150이 넘을 시 관부가세가
                        발생할 수 있습니다.<br />구매한 여러 개의 상품이 동일한 날짜에
                        통관될 경우 합산과세가 발생할 수 있습니다.
                    </p>
                </div>
            </div>
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_delivery_03">
                        <div class="txt_box color_red">
                            <i class="icon_img"></i>
                            평균 배송 6일 소요<i class="icon_help e_layer_popup"></i>
                        </div>
                        <div class="txt_box">
                            1개당 3,000원 / 국내배송 / 해외배송 / 화물직배송 / 관부가세
                            미포함
                        </div>
                    </div>
                    <div
                        class="folding_box__btn e_folding_action"
                        @click="accordionBtn($event)"
                    >
                        <button class="btn_img">
                            <img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                alt="더보기"
                            />
                        </button>
                    </div>
                </div>
                <div class="folding_box__desc">
                    <p class="txt">
                        관부가세 미포함인 경우 구매금액이 약 $150이 넘을 시 관부가세가
                        발생할 수 있습니다.<br />구매한 여러 개의 상품이 동일한 날짜에
                        통관될 경우 합산과세가 발생할 수 있습니다.
                    </p>
                    <div class="list_box">
                        <h3 class="title">화물직배송이란?</h3>
                        <ul>
                            <li>
                                택배로 배송이 불가한 상품으로 화물직배송만 가능한
                                상품입니다.
                            </li>
                            <li>해당 상품은 묶음배송이 불가합니다.</li>
                            <li class="important">배송불가 지역 : 제주도, 도서간지역</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 예약배송 -->
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_delivery_02">
                        <div class="txt_box">
                            <i class="icon_img"></i>
                            <span class="color_red">예약배송 상품입니다.</span>
                            <span>(2022-01-20 발송예정)</span>
                        </div>
                    </div>
                    <div
                        class="folding_box__btn e_folding_action"
                        @click="accordionBtn($event)"
                    >
                        <button class="btn_img">
                            <img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                alt="더보기"
                            />
                        </button>
                    </div>
                </div>
                <div class="folding_box__desc">
                    <p class="reservation">예약주문기간 : 2022-01-04 ~ 2022-01-10</p>
                    <p class="txt">
                        본 상품은 예약배송 상품으로 배송일이 지정되어 있으니 구매 시
                        참고해 주시기 바랍니다.
                    </p>
                </div>
            </div>
            <!-- 깜짝배송 -->
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_delivery_quick">
                        <div class="txt_box">
                            <i class="icon_img"></i>
                            <span class="color_mint">깜짝배송 가능 상품입니다.</span>
                        </div>
                        <div class="txt_box txt">
                            (수도권 지역 13:00 ~ 17:30 출고가능, 주말/공유일 제외)
                        </div>
                    </div>
                    <div
                        class="folding_box__btn e_folding_action"
                        @click="accordionBtn($event)"
                    >
                        <button class="btn_img">
                            <img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                alt="더보기"
                            />
                        </button>
                    </div>
                </div>
                <div class="folding_box__desc">
                    <div class="list_box">
                        <h3 class="title">깜짝배송이란?</h3>
                        <ul>
                            <li>
                                머스트잇 전용 퀵배송으로 수도권(서울,경기,인천)만 이용
                                가능
                            </li>
                            <li>당일 평균 3시간이내 수령 가능한 특급배송 서비스</li>
                            <li>기본 퀵비용 7,000원부터 (거리에 따라 배송비 상이함)</li>
                            <li>
                                최종 퀵비용 주문결제 페이지 > 깜짝배송 클릭 시 확인 가능
                            </li>
                        </ul>
                        <button class="more_btn">자세히 보기</button>
                    </div>
                </div>
            </div>
            <!-- 무료 교환/반품 -->
            <div class="folding_box">
                <div class="folding_box__header">
                    <div class="inner_box icon_free_return">
                        <div class="txt_box">
                            <i class="icon_img"></i>
                            <span class="color_free_return">
                                이 상품은 머스트잇이 무료 교환/반품을 제공합니다.
                            </span>
                        </div>
                    </div>
                    <div
                        class="folding_box__btn e_folding_action"
                        @click="accordionBtn($event)"
                    >
                        <button class="btn_img">
                            <img
                                src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                alt="더보기"
                            />
                        </button>
                    </div>
                </div>
                <div class="folding_box__desc">
                    <div class="list_box">
                        <ul>
                            <li>상품 1회 무료 교환/반품 제공 프로모션</li>
                            <li>이벤트 기간 : ~ 2023.00.00 (기간내 주문한 상품)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </article>



</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    import FootArea from '@/views/product/ProductDetailInfoBottomButton.vue'
    export default {
        components: { FootArea },
        data() {
            return {
                isActive: false,
                couponDown: true,
                priceTitle: '할인가',
                priceTitle2: '판매가',
                salesQuantityDate: 0
            }
        },
        mounted() {
            this.$watch('$parent.showCaseNum', (n) => {
                n % 2 === 0
                    ? (this.priceTitle = '즉시할인가')
                    : (this.priceTitle = '할인가')
                n % 2 === 0
                    ? (this.priceTitle2 = '즉시할인가')
                    : (this.priceTitle2 = '판매가')
            })
        },
        methods: {
            classToggle() {
                this.isActive = !this.isActive
            },
            couponBtn() {
                this.couponDown = !this.couponDown
            },
            accordionBtn(e) {
                const _this = e.target
                const _child = _this
                    .closest('.folding_box')
                    .querySelector('.folding_box__desc')
                _this.classList.toggle('foliding_on')
                _child.style.display = _child.style.display === 'block' ? 'none' : 'block'
            },
            MembershipOpen() {
                EventBus.$emit('ModalMembershipOpen')
            },
            modalClose() {
                EventBus.$emit('ModalMembershipClose')
            },
            layerShow() {
                EventBus.$emit('showModal')
            }
        }
    }
</script>
<style></style>
