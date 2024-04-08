<template>
    <article class="order_info" :class="[isOpen ? 'toggle_open' : 'toggle_hide']">
        <div class="title">
            <h2>결제수단</h2>
            <div class="summary">신용카드 (롯데카드/6개월 무이자)</div>
            <div class="arr_container" @click="toggle"></div>
            <!-- 클릭영역 -->
        </div>
        <!-- title -->
        <div class="toggle_box" v-show="isOpen">
            <div class="payment_type_box">
                <div class="btns">
                    <span class="btn_box"><button type="button">신용카드</button></span>
                    <span class="btn_box"><button type="button">무통장입금</button></span>
                    <span class="btn_box">
                        <button type="button">
                            <img :src="`${path}m_order/payment-npay.png`" alt="npay" />
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button">
                            <img
                                :src="`${path}m_order/payment-kakaopay.png`"
                                alt="kakaopay"
                            />
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button">
                            <img :src="`${path}m_order/payment-toss.png`" alt="toss" />
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button">
                            <img :src="`${path}m_order/payment-payco.png`" alt="payco" />
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button" class="active">
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
                    <p class="desc">
                        SAMSUNG pay는 삼성에서 운영하는 온/오프라인 통합 간편결제
                        서비스입니다.
                    </p>
                    <p class="sub_tit">SAMSUNG pay 지원 카드</p>
                    <div class="payment_guide_box ">
                        <ul class="payment_guide_list">
                            <li>
                                삼성, 신한, KB국민, 현대, 롯데, NH농협, 비씨, 우리, 씨티,
                                하나카드
                            </li>
                        </ul>
                    </div>
                    <p class="sub_tit">SAMSUNG pay 안드로이드 지원 단말기</p>
                    <div class="payment_guide_box ">
                        <ul class="payment_guide_list">
                            <li>안드로이드 5.0 이상</li>
                        </ul>
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
    // 혜택이 있때 배너 노출
    import BaseCheckboxRed from '@/components/BaseCheckboxRed'
    export default {
        components: { BaseCheckboxRed },
        data: function () {
            return {
                path: this.$S3,
                isOpen: false
            }
        },

        methods: {
            toggle() {
                this.isOpen = !this.isOpen
            }
        },
        mounted() {}
    }
</script>

<style scoped></style>
