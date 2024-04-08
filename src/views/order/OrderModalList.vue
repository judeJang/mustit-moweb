<template>
    <section>
        <dl class="list">
            <dt>배송지 변경</dt>
            <dd>
                <button type="button" @click="open('deliveryList')">배송지 목록</button>
                <button type="button" @click="open('DeliveryEmptyList')">배송지 없을 경우</button>
                <button type="button" @click="open('deliveryModify')">배송지 수정</button>
                <button type="button" @click="open('deliveryRegister')">배송지 등록</button>
                <button type="button" @click="open('deliveryRegister2')">배송지 등록 UI 변경</button>
                <button type="button" @click="open('deliveryModify2')">배송지 수정 UI 변경</button>
            </dd>
            <dt>약관</dt>
            <dd>
                <button type="button" @click="open('termBasic')">BASIC</button>
                <button type="button" @click="open('termToss')">TOSS</button>
                <button type="button" @click="open('termNaverpay')">Naver PAY</button>
            </dd>
            <dt>이용동의</dt>
            <dd>
                <button type="button" @click="open('consentCreditcard')">신용카드</button>
                <button type="button" @click="open('consentDeposit')">무통장입금</button>
                <button type="button" @click="open('consentNonMemberCreditcard')">
                    비회원 신용카드
                </button>
                <button type="button" @click="open('consentNonMemberDeposit')">
                    비회원 무통장입금
                </button>
                <button type="button" @click="open('consentGiveSeller')">
                    개인정보 판매자 제공에 대한 동의
                </button>
            </dd>
            <dt>통관고유번호 안내</dt>
            <dd>
                <button type="button" @click="open('clearanceInfo')">보기</button>
            </dd>
            <dt>카드사 무이자 할부 혜택</dt>
            <dd>
                <button type="button" @click="open('creditcard_benefit')">보기</button>
            </dd>
            <dt>Alert modal</dt>
            <dd>
                <button type="button" @click="alertOpen()">보기</button>
            </dd>
            <dt>할인</dt>
            <dd>
                <button type="button" @click="open('discount_benefit')">할인혜택</button>
                <button type="button" @click="open('discount_coupon')">할인쿠폰</button>
                <button type="button" @click="open('discount_coupon_empty')">
                    할인쿠폰 없을 경우
                </button>
                <button type="button" @click="open('save_point')">적립금</button>
                <button type="button" @click="open('save_gift')">상품권</button>
            </dd>
            <dt>주문자 정보</dt>
            <dd>
                <button type="button" @click="open('orderer_info')">보기</button>
            </dd>
        </dl>

        <!-- <FullModalFrame
            :modalPath="path"
            :orderModalType="modalType"
            ref="FMF"
        ></FullModalFrame> -->
    </section>
</template>

<script>
    import Vue from 'vue'
    export default {
        data() {
            return {
                path: '',
                modalType: '',
                modalChoicMap: {
                    'termBasic': {
                        path: 'order/TermsModal',
                        modalType: 'basic'
                    },
                    'termToss': {
                        path: 'order/TermsModal',
                        modalType: 'toss'
                    },
                    'termNaverpay': {
                        path: 'order/TermsModal',
                        modalType: 'naverpay'
                    },
                    'consentCreditcard': {
                        path: 'order/ConsentModal',
                        modalType: 'creditcard'
                    },
                    'consentDeposit': {
                        path: 'order/ConsentModal',
                        modalType: 'deposit'
                    },
                    'consentNonMemberCreditcard': {
                        path: 'order/ConsentModal',
                        modalType: 'nonCreditcard'
                    },
                    'consentNonMemberDeposit': {
                        path: 'order/ConsentModal',
                        modalType: 'nonDeposit'
                    },
                    'consentGiveSeller': {
                        path: 'order/ConsentModal',
                        modalType: 'giveSeller'
                    },
                    'clearanceInfo': {
                        path: 'order/ClearanceInfoModal'
                    },
                    'creditcard_benefit': {
                        path: 'order/CreaditcardInterestFreeBenefitModal'
                    },
                    'discount_benefit': {
                        path: 'order/DiscountBenefitModal'
                    },
                    'discount_coupon': {
                        path: 'order/DiscountCouponModal'
                    },
                    'discount_coupon_empty': {
                        path: 'order/DiscountCouponEmptyModal'
                    },
                    'save_point': {
                        path: 'order/SavePointModal',
                        modalType: '적립금'
                    },
                    'save_gift': {
                        path: 'order/SavePointModal',
                        modalType: '상품권'
                    },
                    'orderer_info': {
                        path: 'order/OrdererInfoModal'
                    },
                    'deliveryList': {
                        path: 'order/DeliveryList'
                    },
                    'deliveryModify': {
                        path: 'order/DeliveryModify'
                    },
                    'deliveryModify2': {
                        path: 'order/DeliveryModify2'
                    },
                    'deliveryRegister': {
                        path: 'order/DeliveryRegister'
                    },
                    'deliveryRegister2': {
                        path: 'order/DeliveryRegister2'
                    },
                    'DeliveryEmptyList': {
                        path: 'order/DeliveryEmptyList'
                    }
                }
            }
        },
        methods: {
            open(name) {
                console.log(this.$store.modules)
                this.path = this.executeModalChoice(name).path
                this.modalType = this.executeModalChoice(name).modalType
                Vue.FullModal.open(this.path, this.modalType)
            },
            executeModalChoice(type) {
                return this.modalChoicMap[type]
            },
            alertOpen() {
                Vue.Alert.open('views/layer/order/ClearanceConsentAlert')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list {
        padding: 32px 16px;
        dt {
            font-size: 20px;
            font-weight: $fw-bold;
        }
        dd {
            button {
                display: inline-flex;
                align-items: center;
                padding: 0 16px;
                height: 30px;
                border: 1px solid $gray3;
                background: $white;
                border-radius: 5px;
                margin-right: 15px;
                margin-top: 20px;
            }
            + dt {
                margin-top: 20px;
            }
        }
    }
</style>
