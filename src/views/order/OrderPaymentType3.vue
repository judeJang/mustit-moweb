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
                <div class="btns">
                    <span class="btn_box"><button type="button">신용카드</button></span>
                    <span class="btn_box"
                        ><button type="button" class="active">무통장입금</button></span
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
                    <div class="title_box">
                        <p>환불계좌 정보</p>
                    </div>
                    <BaseSelect :selectOpt="refundAccount" />

                    <div class="input_btn_box">
                        <BaseInputClear
                            placeholder="계좌번호를 입력해 주세요.(-제외)"
                            type="number"
                        />
                        <button type="button" class="btn bg_white w88">계좌 확인</button>
                    </div>

                    <div class="account_box"></div>

                    <div class="list_box">
                        <div class="warning_txt">환불 시 '출금계좌'와 '환불계좌'가 다를 경우 당사 고객센터에서 추가 확인 요청할 수 있으며 환불기준일(취소접수일+2)보다 지연될 수 있습니다.</div>
                        <ul class="payment_guide_list">
                            <li>
                                본인 명의 계좌만 등록하실 수 있으며, 예금주와 회원정보
                                이름이 동일해야 합니다.
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
    import BaseSelect from '@/components/BaseSelect.vue'
    import BaseInputClear from '@/components/BaseInputClear.vue'
    import BaseCheckboxRed from '@/components/BaseCheckboxRed'
    export default {
        components: { BaseSelect, BaseInputClear, BaseCheckboxRed },
        data: function () {
            return {
                path: this.$S3,
                isOpen: false,
                refundAccount: [
                    { text: '은행선택' },
                    { text: 'HSBC.' },
                    { text: 'JP모간' },
                    { text: 'KEB 하나' },
                    { text: '경남' },
                    { text: '광주' },
                    { text: '국민' },
                    { text: '기업' },
                    { text: '농협' },
                    { text: '농협중앙' },
                    { text: '대구' },
                    { text: '도이치' },
                    { text: '부산' },
                    { text: '산림조합' },
                    { text: '산업' },
                    { text: '상호저축' },
                    { text: '새마을' },
                    { text: '수협' },
                    { text: '신안상호저축은행' },
                    { text: '신한' },
                    { text: '신협' },
                    { text: '씨티' },
                    { text: '우리' },
                    { text: '우체국' },
                    { text: '전북' },
                    { text: '제주' },
                    { text: '카카오뱅크' },
                    { text: '케이뱅크' },
                    { text: '한국스탠다드차타드' }
                ]
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
