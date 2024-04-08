<template>
    <section class="public_content order_content">
        <SubHeader title="주문하기" :type="3" />
        <!-- <SubTopHeader :data="headerName" :isDropState="false" :rightShow="false" /> -->
        <div class="login_desc" v-if="!isLogin">
            <p>
                <a href="#">로그인</a>하시면, 할인 및 상품 리뷰 적립금 등 더 많은 혜택을
                받으실 수 있습니다.
            </p>
        </div>
        <div class="divider"></div>
        <OrderUser2 />
        <!-- // 주문자 정보 - 비회원 -->
        <div class="divider"></div>
        <OrderDelivery11 />
        <!-- // 배송지 정보 - 비회원 -->
        <div class="divider"></div>
        <OrderUser1 />
        <!--  // 주문자 정보 - 회원  -->
        <div class="divider"></div>
        <OrderDelivery5 :manyItems="true" />
        <div class="divider"></div>
        <OrderDelivery5 :deliveryOpt="true" />
        <div class="divider"></div>
        <OrderDelivery5 :deliveryOpt="true" :radioData="radioData" />
        <div class="divider"></div>
        <OrderDelivery5 :isEmptyAddr="true" />
        <div class="divider"></div>
        <OrderDelivery5 :deliveryOpt="false" :isOverseasDelivery="true" />
        <div class="divider"></div>
        <OrderPcc />
        <!-- 개인통관 고유부호 -->
        <div class="divider"></div>
        <OrderProduct1 />
        <!-- // 주문상품 기본 -->
        <div class="divider"></div>
        <OrderProduct2 />
        <!-- // 할인혜택 적용했을 경우 -->
        <div class="divider"></div>
        <OrderProduct3 />
        <!-- // 주문상품이 2개 이상일 경우 -->
        <div class="divider"></div>
        <OrderProduct4 />
        <!-- // 주문상품 배송 아이콘 노출 -->
        <div class="divider"></div>
        <OrderProduct5 />
        <!-- 중고상품일 경우 -->
        <div class="divider"></div>
        <OrderProduct6 />
        <!-- 묶음배송일 경우 -->
        <div class="divider"></div>
        <!-- 예약배송 상품일 경우 230417 추가-->
        <OrderProduct7 />
        <div class="divider"></div>
        <OrderDiscount />
        <!-- // 쿠폰/적립금/상품권 -->
        <div class="divider"></div>
        <OrderPaymentInfo />
        <!-- // 최종 결제정보 & 전액 상품권,적립금 결제 시  -->
        <div class="divider"></div>
        <OrderSoldout />
        <div class="divider"></div>
        <!-- 결제수단 -->
        <OrderPaymentType1 />
        <!-- // 결제수단 - 신용카드 --->
        <div class="divider"></div>
        <OrderPaymentType2 />
        <!-- // 결제수단 - 결제수단 혜택이 있을 경우 -->
        <div class="divider"></div>
        <OrderPaymentType3 />
        <!-- // 결제수단 - 무통장입금 -->
        <div class="divider"></div>
        <OrderPaymentType4 />
        <!-- // 결제수단 - 무통장입금 환불계좌 등록했을 시 -->
        <div class="divider"></div>
        <OrderPaymentType5 />
        <!-- // 결제수단 - 카카오페이 -->
        <div class="divider"></div>
        <OrderPaymentType6 />
        <!-- // 결제수단 - 페이코 -->
        <div class="divider"></div>
        <OrderPaymentType7 />
        <!-- // 결제수단 - 삼성페이 -->
        <div class="divider"></div>
        <OrderPaymentType8 />
        <!-- // 결제수단 - 네이버페이 & 시스템 점검 중 -->
        <div class="divider"></div>
        <OrderPaymentType9 />
        <!-- // 결제수단 - 토스 -->
        <div class="divider"></div>
        <OrderPaymentType10 />
        <!-- // 결제수단 - 결제불가 -->
        <div class="divider"></div>
        <OrderPaymentType11 />
        <!-- // 결제수단 - 결제수단_신용카드_카드선택 전 (할부선택 비활성) --->
        <div class="divider"></div>
        <!-- 230712 주문서 내 결제 수단 안내 문구 노출 추가 작업 -->
        <OrderPaymentType12 />
        <!-- // 결제수단 - 결제불가 - 총 주문금액 50만원 초과 시 / 배너 X --->
        <div class="divider"></div>
        <OrderPaymentType13 />
        <!-- // 결제수단 - 결제불가 - 총 주문금액 50만원 초과 시 / 배너 O --->
        <div class="divider"></div>
        <OrderPaymentType14 />
        <!-- // 결제수단 - 결제불가 - 총 주문 금액 50만원 초과 & 깜짝 배송 선택 배너 X --->
        <div class="divider"></div>
        <OrderPaymentType15 />
        <!-- // 결제수단 - 결제불가 - 총 주문 금액 50만원 초과 & 깜짝 배송 선택 배너 O --->
        <div class="divider"></div>
        <OrderPaymentType16 />
        <!-- // 결제수단 - 결제불가 -  총 주문 금액 50만원 초과 & 2개 이상 주문 배너 X --->
        <div class="divider"></div>
        <OrderPaymentType17 />
        <!-- // 결제수단 - 결제불가 -  총 주문 금액 50만원 초과 & 2개 이상 주문 배너 O --->
        <div class="divider"></div>
        <OrderPaymentType18 />
        <!-- // 결제수단 - 결제불가 -  깜짝 배송 선택 배너 X --->
        <div class="divider"></div>
        <OrderPaymentType19 />
        <!-- // 결제수단 - 결제불가 -  깜짝 배송 선택 배너 O --->
        <div class="divider"></div>
        <OrderPaymentType20 />
        <!-- // 결제수단 - 결제불가 - 2개 이상 주문 배너 X --->
        <div class="divider"></div>
        <OrderPaymentType21 />
        <!-- // 결제수단 - 결제불가 - 2개 이상 주문 배너 O --->
        <div class="divider"></div>
        <OrderPaymentType22 />
        <!-- // 결제수단 - 결제불가 - 2개 이상 주문 배너 O --->
        <div class="divider"></div>
        <OrderPaymentAgree />
        <!-- // 결제동의 -->
        <div class="divider"></div>
        <!-- 바텀모달 - 카드 선택 시-->
        <div class="bottom_modal_btns">
            <button type="button" class="bottom_modal_btn" @click="layerShow(1)">
                바텀 모달 카드선택
            </button>

            <button type="button" class="bottom_modal_btn" @click="layerShow(2)">
                바텀 모달 할부선택
            </button>
        </div>

        <transition name="slide-up">
            <template v-if="checkModalNumber">
                <OrderBottomModal1 v-show="isModalOpen" />
            </template>

            <template v-else>
                <OrderBottomModal2 v-show="isModalOpen" />
            </template>
        </transition>
        <transition name="fade-ani">
            <template v-if="isLayerOpen">
                <div class="mask"  @click="layerClose"></div>
            </template>
            <template v-if="isAlertOpen">
                <div class="layer_node">
                    <div class="mask" @click="closeAlert()"></div>
                    <div class="layer_insert">
                        <DutyTaxAlert />
                    </div>
                </div>
                <!--  -->
            </template>
        </transition>
    </section>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    // import SubTopHeader from '@/components/SubTopHeader.vue'
    import SubHeader from '@/components/SubHeader.vue'
    import OrderUser1 from '@/views/order/OrderUser1.vue'
    import OrderUser2 from '@/views/order/OrderUser2.vue'
    import OrderDelivery5 from '@/views/order/OrderDelivery5.vue'
    import OrderDelivery11 from '@/views/order/OrderDelivery11.vue'
    import OrderPcc from '@/views/order/OrderPcc.vue'
    import OrderProduct1 from '@/views/order/OrderProduct1.vue'
    import OrderProduct2 from '@/views/order/OrderProduct2.vue'
    import OrderProduct3 from '@/views/order/OrderProduct3.vue'
    import OrderProduct4 from '@/views/order/OrderProduct4.vue'
    import OrderProduct5 from '@/views/order/OrderProduct5.vue'
    import OrderProduct6 from '@/views/order/OrderProduct6.vue'
    import OrderProduct7 from '@/views/order/OrderProduct7.vue'
    import OrderDiscount from '@/views/order/OrderDiscount.vue'
    import OrderPaymentInfo from '@/views/order/OrderPaymentInfo.vue'
    import OrderPaymentType1 from '@/views/order/OrderPaymentType1.vue'
    import OrderPaymentType2 from '@/views/order/OrderPaymentType2.vue'
    import OrderPaymentType3 from '@/views/order/OrderPaymentType3.vue'
    import OrderPaymentType4 from '@/views/order/OrderPaymentType4.vue'
    import OrderPaymentType5 from '@/views/order/OrderPaymentType5.vue'
    import OrderPaymentType6 from '@/views/order/OrderPaymentType6.vue'
    import OrderPaymentType7 from '@/views/order/OrderPaymentType7.vue'
    import OrderPaymentType8 from '@/views/order/OrderPaymentType8.vue'
    import OrderPaymentType9 from '@/views/order/OrderPaymentType9.vue'
    import OrderPaymentType10 from '@/views/order/OrderPaymentType10.vue'
    import OrderPaymentType11 from '@/views/order/OrderPaymentType11.vue'
    import OrderPaymentType12 from '@/views/order/OrderPaymentType12.vue'
    import OrderPaymentType13 from '@/views/order/OrderPaymentType13.vue'
    import OrderPaymentType14 from '@/views/order/OrderPaymentType14.vue'
    import OrderPaymentType15 from '@/views/order/OrderPaymentType15.vue'
    import OrderPaymentType16 from '@/views/order/OrderPaymentType16.vue'
    import OrderPaymentType17 from '@/views/order/OrderPaymentType17.vue'
    import OrderPaymentType18 from '@/views/order/OrderPaymentType18.vue'
    import OrderPaymentType19 from '@/views/order/OrderPaymentType19.vue'
    import OrderPaymentType20 from '@/views/order/OrderPaymentType20.vue'
    import OrderPaymentType21 from '@/views/order/OrderPaymentType21.vue'
    import OrderPaymentType22 from '@/views/order/OrderPaymentType22.vue'
    import OrderPaymentAgree from '@/views/order/OrderPaymentAgree.vue'
    import OrderBottomModal1 from '@/views/order/OrderBottomModal1.vue'
    import OrderBottomModal2 from '@/views/order/OrderBottomModal2.vue'
    import OrderSoldout from '@/views/order/OrderSoldout.vue'

    import DutyTaxAlert from '@/views/layer/order/DutyTaxAlert.vue'
    
    const HTML = document.getElementsByTagName('html')[0]
    const BODY = document.body

    export default {
        components: {
            // SubTopHeader,
            SubHeader,
            OrderUser1,
            OrderUser2,
            OrderDelivery5,
            OrderDelivery11,
            OrderPcc,
            OrderProduct1,
            OrderProduct2,
            OrderProduct3,
            OrderProduct4,
            OrderProduct5,
            OrderProduct6,
            OrderProduct7,
            OrderDiscount,
            OrderPaymentInfo,
            OrderPaymentType1,
            OrderPaymentType2,
            OrderPaymentType3,
            OrderPaymentType4,
            OrderPaymentType5,
            OrderPaymentType6,
            OrderPaymentType7,
            OrderPaymentType8,
            OrderPaymentType9,
            OrderPaymentType10,
            OrderPaymentType11,
            OrderPaymentType12,
            OrderPaymentType13,
            OrderPaymentType14,
            OrderPaymentType15,
            OrderPaymentType16,
            OrderPaymentType17,
            OrderPaymentType18,
            OrderPaymentType19,
            OrderPaymentType20,
            OrderPaymentType21,
            OrderPaymentType22,
            OrderPaymentAgree,
            OrderBottomModal1,
            OrderBottomModal2,
            OrderSoldout,
            DutyTaxAlert
        },
        data: function () {
            return {
                headerName: [{ name: '주문하기' }],
                isLogin: false, // 회원, 비회원 구분
                isModalOpen: false,
                isLayerOpen: false,
                isAlertOpen: false,
                checkModalNumber: false,
                radioData: [
                    {
                        text: '일반택배',
                        named: 'radio_3',
                        checked: true,
                        disabled: false
                    },
                    {
                        text: '깜짝배송(마감)',
                        named: 'radio_3',
                        checked: false,
                        disabled: true
                    }
                ]
            }
        },
    
        methods: {
            layerClose() {
                EventBus.$emit('bottomHideModal')
            },
            layerShow(id) {
                EventBus.$emit('bottomShowModal')
                if (id === 1) {
                    this.checkModalNumber = true
                } else {
                    this.checkModalNumber = false
                }
            },
            openAlert(){
                this.isAlertOpen = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            },
            closeAlert(){
                this.isAlertOpen = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            }
        },
        created() {
            const HTML = document.getElementsByTagName('html')[0]
            const BODY = document.body
            EventBus.$on('bottomShowModal', () => {
                this.isModalOpen = true
                this.isLayerOpen = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('bottomHideModal', () => {
                this.isModalOpen = false
                this.isLayerOpen = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
        },
        beforeDestroy() {
            EventBus.$off('bottomShowModal')
            EventBus.$off('bottomHideModal')
        }
    }
</script>

<style scoped>
    .bottom_modal_btns {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .bottom_modal_btn {
        margin: 10px;
        padding: 10px;
        border: 1px solid #ddd;
    }
</style>
