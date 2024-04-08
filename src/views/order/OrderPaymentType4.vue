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
                    <span class="btn_box">
                        <button type="button" class="active">무통장입금</button></span
                    >
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
                    <!-- 무통장입금 환불계좌 등록했을 시 -->
                    <div class="title_box">
                        <p>환불계좌 정보</p>
                        <div class="checkbox_container">
                            <BaseCheckboxRed text="환불계좌로 등록" />
                            <!-- <label>
                                <input type="checkbox" @change="setCheckbox($event)" />
                                <span class="checkbox_name">환불계좌로 등록</span>
                            </label> -->
                        </div>
                    </div>
                    <div class="refund_account">
                        <dl>
                            <dt>카카오뱅크 / 홍길동</dt>
                            <dd>12345678909876</dd>
                        </dl>
                        <button type="button" class="btn w64">계좌 변경</button>
                    </div>
                    <div class="list_box">
                        <div class="warning_txt">환불 시 '출금계좌'와 '환불계좌'가 다를 경우 당사 고객센터에서 추가 확인 요청할 수 있으며 환불기준일(취소접수일+2)보다 지연될 수 있습니다.</div>
                        <ul class="payment_guide_list">
                            <li>
                                환불계좌는 본인 명의 계좌만 등록하실 수 있으며, 예금주와
                                회원정보 이름이 동일해야 합니다.
                            </li>
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
    import BaseCheckboxRed from '@/components/BaseCheckboxRed'
    // 혜택이 있때 배너 노출

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
