<template>
    <article class="PDP_compare_price_wrap self_module">
        <div class="utility_box">
            <BaseCheckRed text="무료배송만 보기" @change="showFreeDelivery" />
            <button
                type="button"
                @click="alarmDropPrice"
                class="alarm_drop_price"
                :class="{ 'apply_alarm': applyAlarm }"
            >
                {{ applyAlarmText }}
            </button>
        </div>
        <!-- 비교 리스트 -->
        <template v-if="!freeDeliveryCompareItem">
            <PriceItem
                v-for="(item, index) in productData"
                :data="item"
                :key="index"
                :id="index"
            />
        </template>
        <!-- 비교 아이템 없을 경우 -->
        <template v-else>
            <div class="empty">
                <i class="comp_icon_empty"></i>
                <p>조건과 일치하는 상품이 없습니다.</p>
            </div>
        </template>

        <router-link to="/product/compare" class="compare_all_view_btn"
            >가격비교 전체보기</router-link
        >
    </article>
</template>

<script>
    import BaseCheckRed from '@/components/BaseCheckboxRed.vue'
    import PriceItem from '@/views/product/ComparePriceItem.vue'
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'PDP_COMPARE_PRICE',
        components: {
            BaseCheckRed,
            PriceItem
        },
        data() {
            return {
                applyAlarm: false,
                applyAlarmText: '가격하락 알림받기',
                freeDeliveryCompareItem: false,
                productData: [
                    {
                        seller: 's-project',
                        grade: 'grand',
                        price: '1,200,000',
                        lowest: true,
                        // 제품상태
                        itemsStatus: {
                            used: false,
                            new: true,
                            refurbished: false
                        },
                        // 배송상태
                        shipping: {
                            domestic: true
                        },
                        paid: {
                            free: true
                        },
                        //무료교환반품
                        quick: true,
                        freeExchange: true,
                        options: ['BLACK / L', 'BLACK / XXL', 'STEEL GREY / S'],
                        optionOpen: false
                    },
                    {
                        seller: 'KKODOLSHOP',
                        grade: 'excellence',
                        price: '1,210,000',
                        is_current: true,

                        // 배송상태
                        shipping: {
                            international: {
                                includeTax: true
                            }
                        },
                        // 배송금액
                        paid: {
                            prepaid: true,
                            cost: '39,900',
                            collect: false
                        },
                        quick: true,
                        //무료교환반품
                        freeExchange: false,
                        options: ['BLACK / L', 'BLACK / XXL', 'STEEL GREY / S'],
                        optionOpen: false
                    },
                    {
                        seller: 'Frenchbox',
                        grade: '',
                        price: '1,220,000',
                        // 제품상태
                        itemsStatus: {
                            used: false,
                            new: false,
                            refurbished: true
                        },
                        // 배송상태
                        shipping: {
                            international: {
                                includeTax: false
                            }
                        },
                        // 배송금액
                        paid: {
                            prepaid: false,
                            cost: '39,900',
                            collect: true
                        },
                        quick: true,
                        //무료교환반품
                        freeExchange: false,
                        options: ['BLACK / L', 'BLACK / XXL', 'STEEL GREY / S'],
                        optionOpen: false
                    }
                ]
            }
        },
        created() {
            this.$emit('compareItemLength', this.productData.length)
        },
        mounted() {
            document.addEventListener('scroll', this.allHideOption)
        },
        computed: {
            ...mapState('modalModule', ['fadeInOpen', 'fadeComponentName']),
            ...mapState('comparePriceModule', ['toastMsg', 'toastShow'])
        },
        watch: {
            toastMsg(newVal) {
                if (newVal === '가격하락 알림이 신청되었습니다.') {
                    this.applyAlarm = true
                    this.applyAlarmText = '가격하락 알림해제'
                }
            }
        },
        methods: {
            ...mapActions('modalModule', ['fadeModalAction', 'setFadeComponentName']),
            ...mapActions('comparePriceModule', [
                'setToastToggleAction',
                'setToastMsgAction'
            ]),
            showFreeDelivery(value) {
                if (value) {
                    this.freeDeliveryCompareItem = true
                } else {
                    this.freeDeliveryCompareItem = false
                }
            },
            alarmDropPrice() {
                if (!this.applyAlarm) {
                    this.setFadeComponentName('VAlertAlarmDropPrice.vue')
                    this.fadeModalAction(true)
                } else {
                    this.setToastMsgAction('가격하락 알림이 해제되었습니다.')
                    this.setToastToggleAction(true)
                    this.applyAlarm = false
                    this.applyAlarmText = '가격하락 알림받기'
                }
            },
            allHideOption() {
                this.productData.forEach((el) => {
                    el.optionOpen = false
                })
            }
        },
        beforeDestroy() {
            document.removeEventListener('scroll', this.allHideOption)
        }
    }
</script>
