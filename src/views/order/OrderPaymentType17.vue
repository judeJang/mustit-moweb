<!-- 결제불가 -  총 주문 금액 50만원 초과 & 2개 이상 주문 배너 O -->
<template>
    <article class="order_info" :class="[isOpen ? 'toggle_open' : 'toggle_hide']">
        <div class="title">
            <h2>결제수단</h2>
            <div class="summary">신용카드 (롯데카드/6개월 무이자)</div>
            <div class="arr_container" @click="toggle"></div>
            <!-- 클릭영역 -->
        </div>
        <!-- // title -->
        <div class="toggle_box" v-show="isOpen">
            <div class="payment_type_box">
                <div class="warning_txt" v-html="UnablePay[2].text"></div>
                <div class="banner" v-show="UnablePay[2].bannerActive">
                    <img :src="`${path}m_order/payment-benefit-toss.png`" alt="banner" />
                </div>
                <div class="btns">
                    <span class="btn_box">
                        <button type="button" class="active">신용카드</button>
                    </span>
                    <span class="btn_box">
                        <button
                            type="button"
                            :disabled="UnablePay[2].depositWithoutBankbookActive"
                        >
                            무통장입금
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button" :disabled="UnablePay[2].npayActive">
                            <img
                                :src="`${path}m_order/payment-npay.png`"
                                alt="npay"
                            /></button
                    ></span>
                    <span class="btn_box">
                        <button type="button">
                            <img
                                :src="`${path}m_order/payment-kakaopay.png`"
                                alt="kakaopay"
                            />
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button" :disabled="UnablePay[2].tossActive">
                            <img :src="`${path}m_order/payment-toss.png`" alt="toss" />
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button">
                            <img :src="`${path}m_order/payment-payco.png`" alt="payco" />
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button">
                            <img
                                :src="`${path}m_order/payment-samsungpay.png`"
                                alt="samsungpay"
                            />
                        </button>
                    </span>
                </div>
                <!-- type -->
                <div class="checkbox_container">
                    <BaseCheckboxRed text="이 결제 수단을 다음에도 사용" />
                </div>
                <div class="payment_type_detail">
                    <div class="b_select_box">
                        <BaseSelect :selectOpt="cardOpt" />
                    </div>
                    <div
                        class="b_select_box"
                        :class="{ 'disabled': installmentOptDisabled }"
                    >
                        <BaseSelect :selectOpt="installmentOpt" />
                    </div>
                    <div class="list_box">
                        <ul class="payment_guide_list">
                            <li>5만원 이상 결제 시 무이자 할부 혜택이 가능합니다.</li>
                            <li>
                                개인사업자/법인/체크/선불/기프트/하이브리드/은행계열카드
                                등의 경우 무이자할부 혜택이 적용되지 않습니다.
                            </li>
                        </ul>
                        <button type="button" class="btn_modal">
                            카드사 무이자 할부 혜택 보기
                        </button>
                    </div>
                </div>
                <!-- payment_type_detail -->
            </div>
            <!-- payment_type_box -->
        </div>
        <!-- toggle_box -->
    </article>
</template>

<script>
    import BaseSelect from '@/components/BaseSelect.vue'
    import BaseCheckboxRed from '@/components/BaseCheckboxRed'
    export default {
        components: { BaseSelect, BaseCheckboxRed },
        data: function () {
            return {
                path: this.$S3,
                isOpen: true,
                installmentOptDisabled: true,
                cardOpt: [
                    { text: '카드 선택' },
                    { text: 'KB국민카드' },
                    { text: '신한카드' },
                    { text: '삼성카드' },
                    { text: '현대카드' },
                    { text: '우리카드' },
                    { text: 'NH농협카드' },
                    { text: '비씨카드(페이북)' },
                    { text: '롯데카드' },
                    { text: 'KEB하나카드' },
                    { text: '카카오뱅크카드' },
                    { text: '씨티카드' },
                    { text: '수협카드' },
                    { text: '제주카드' },
                    { text: '전북카드' },
                    { text: '광주카드' }
                ],
                installmentOpt: [
                    { text: '할부 선택', selected: false },
                    { text: '일시불', selected: false },
                    { text: '2개월 [무]', selected: false },
                    { text: '3개월 [무]', selected: false },
                    { text: '4개월 [무]', selected: false },
                    { text: '5개월 [무]', selected: false },
                    { text: '6개월 [무]', selected: false },
                    { text: '7개월 [무]', selected: false },
                    { text: '8개월', selected: false },
                    { text: '9개월', selected: false },
                    { text: '10개월', selected: false },
                    { text: '11개월', selected: false },
                    { text: '12개월', selected: false }
                ],
                UnablePay: [
                    {
                        text: '총 주문금액 50만원 초과 시 무통장 입금이 불가합니다.',
                        depositWithoutBankbookActive: true,
                        npayActive: false,
                        tossActive: false,
                        bannerActive: false,
                    }, // 총 주문 금액 50만원 초과 -> 무통장 입금 불가
                    {
                        text: '총 주문금액 50만원 초과 시 무통장 입금이 불가합니다.<br> 깜짝배송 주문 시 토스, 네이버페이 결제가 불가합니다.',
                        depositWithoutBankbookActive: true,
                        npayActive: false,
                        tossActive: false,
                        bannerActive: true
                    }, // 총 주문 금액 50만원 초과 & 깜짝 배송 선택 -> 무통장 입금 불가 / 토스&N페이 불가
                    {
                        text: '총 주문금액 50만원 초과 시 무통장 입금이 불가합니다.<br> 2개 이상 상품 주문 시 토스 결제가 불가합니다.',
                        depositWithoutBankbookActive: true,
                        npayActive: false,
                        tossActive: true,
                        bannerActive: true
                    }, // 총 주문 금액 50만원 초과 & 2개 이상 주문 -> 무통장 입금 불가 / 토스페이 불가
                    {
                        text: '깜짝배송 주문 시 토스, 네이버페이 결제가 불가합니다.',
                        depositWithoutBankbookActive: true,
                        npayActive: false,
                        tossActive: false,
                        bannerActive: true
                    }, // 깜짝 배송 선택 -> 토스&N페이 불가
                    {
                        text: '2개 이상 상품 주문 시 토스 결제가 불가합니다.',
                        depositWithoutBankbookActive: true,
                        npayActive: false,
                        tossActive: false,
                        bannerActive: true
                    }, // 2개 이상 주문 -> 토스페이 불가
                ]
            }
        },

        methods: {
            toggle() {
                this.isOpen = !this.isOpen
            },
            randomNumber() {
                this.randomValue = Math.floor(Math.random() * this.UnablePay.length)
            }
        },
        mounted() {
            this.randomNumber()
        }
    }
</script>

<style scoped></style>
