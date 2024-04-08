<template>
    <div class="PDP_info_price">
        <div class="price_box">
            <div class="real_price">
                <p class="discount_ratio" v-if="discountRatio">
                    {{ discountRatio }}
                </p>
                <!-- 실제 결제 금액 -->
                <p class="final_price">
                    <span>
                        {{ finalPrice | comma }}
                    </span>
                    <button
                        type="button"
                        class="show_discount_info"
                        @click="modalShow"
                        aria-label="할인정보 보기"
                    ></button>
                </p>
            </div>
            <div class="etc_price">
                <!-- 시중가 -->
                <p class="market_price">{{ marketPrice | comma }}</p>
                <!-- 정상가 -->
                <p class="origin_price">
                    {{ jungsangPrice | comma }}
                </p>
            </div>
        </div>
        <button type="button" class="apply_discount_btn" @click="getDiscount">
            {{ applyBtnText }}
        </button>
    </div>
</template>

<script>
    import {} from '@/assets/js/PDP'
    import { mapActions } from 'vuex'

    export default {
        name: 'PDP_INFO_PRICE',
        props: {
            data: { type: Object }
        },
        filters: {
            comma(val) {
                return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
        },
        data() {
            return {
                discountData: [],
                displayData: [],
                marketPrice: null,
                jungsangPrice: null,
                discountRatio: null,
                finalPrice: null,
                disabledBtn: false,
                applyBtnText: '할인받기'
            }
        },
        created() {
            const displayArray = this.data.priceGroup.filter((obj) => obj.isDisplay)

            this.marketPrice = displayArray.filter((data) => data.type === 'NORMAL')[0][
                'price'
            ]
            this.finalPrice = displayArray.filter(
                (data) => data.type === 'MAX_BENEFIT'
            )[0].price

            this.jungsangPrice = this.data.jungsangPriceGroup.price
            this.discountRatio = this.data.jungsangPriceGroup.discountRatio
        },
        methods: {
            ...mapActions('modalModule', ['fadeModalAction', 'setFadeComponentName']),
            getDiscount(e) {
                if (
                    window.confirm(
                        '단골할인 적용을 위해 판매자를 관심판매자로 등록합니다'
                    )
                ) {
                    e.target.disabled = true
                    this.applyBtnText = '할인적용'
                }
            },
            modalShow() {
                this.setFadeComponentName('VAlertDiscountInfo.vue')
                this.fadeModalAction(true)
            }
        }
    }
</script>
