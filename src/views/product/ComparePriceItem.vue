<template>
    <div
        class="compare_item_list self_module"
        :class="{
            'lowest': data.lowest,
            'current': data.is_current,
            'is_open': data.optionOpen
        }"
        @click="goToPDP()"
    >
        <div class="info_header">
            <p class="seller" :class="data.grade">
                <span>{{ data.seller }}</span>
            </p>
            <p class="price">{{ data.price }}</p>
        </div>

        <div class="info_middle">
            <p class="shipping">
                <span v-if="data.itemsStatus">{{ itemStatus(data.itemsStatus) }}</span>
                <template v-if="isNotInternational">
                    <span v-for="(etc, index) in otherShipping" :key="index">{{
                        etc
                    }}</span>
                </template>
                <template v-if="isInternational">
                    <span
                        v-for="(etc, index) in InternationalShipping"
                        :key="index"
                        :class="{ 'bold': etc === '관부가세미포함' }"
                        >{{ etc }}</span
                    >
                </template>
            </p>
            <p class="delivery_paid" v-if="data.paid">
                {{ paidStatus(data.paid) }}
                <template v-if="data.paid.cost"> {{ data.paid.cost }}원 </template>
            </p>
        </div>
        <div class="option_info">
            <p class="badge">
                <span v-if="data.quick">깜짝배송</span>
                <span v-if="data.freeExchange">무료교환반품</span>
            </p>
            <button type="button" class="option_btn" @click.stop="toggleOption(id)">
                {{ changeText }}
            </button>
        </div>
        <ul class="option" v-if="data.optionOpen">
            <li v-for="opt in data.options" :key="opt">
                {{ opt }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PDP_COMPARE_PRICE_ITEM',
        props: {
            data: { type: Object, required: true },
            id: { type: Number, required: true }
        },
        data() {
            return {
                moreOption: false,
                isNotInternational: false,
                otherShipping: [],
                isInternational: false,
                InternationalShipping: [],
                optOpen: this.data.optionOpen,
                toggleOptionText: this.data.optionOpen ? '닫기' : '구매 가능한 옵션'
            }
        },
        created() {
            this.optOpen = Object.entries(this.data.shipping).forEach((el) => {
                switch (el[0]) {
                    case 'domestic':
                        this.isNotInternational = true
                        this.otherShipping.push('국내배송')
                        break
                    case 'international':
                        this.isInternational = true
                        this.InternationalShipping.push('해외배송')
                        Object.entries(el[1]).forEach((internationalChild) => {
                            if (internationalChild[1]) {
                                this.InternationalShipping.push('관부가세포함')
                            } else {
                                this.InternationalShipping.push('관부가세미포함')
                            }
                        })
                        break
                }
            })
        },
        computed: {
            changeText() {
                if (this.data.optionOpen) {
                    return '닫기'
                } else {
                    return '구매 가능한 옵션'
                }
            }
        },
        methods: {
            itemStatus(obj) {
                const trueKeys = Object.keys(obj).filter((key) => obj[key] === true)
                if (trueKeys[0] === 'used') {
                    return '중고'
                } else if (trueKeys[0] === 'new') {
                    return '새상품'
                } else if (trueKeys[0] === 'refurbished') {
                    return '리퍼브'
                }
            },
            shippingStatus(obj) {
                if (obj[0] !== 'international') {
                    if (obj[1]) {
                        switch (obj[0]) {
                            case 'domestic':
                                return '국내배송'
                        }
                    }
                } else {
                    this.isInternational = true
                    this.dataInternational = [...obj]
                }
            },
            paidStatus(obj) {
                if (obj['prepaid']) {
                    return '선불 '
                }
                if (obj['collect']) {
                    return '착불 '
                }
                if (obj['free']) {
                    return '무료'
                }
            },
            toggleOption(index) {
                // this.$emit('optionOpen', index)
                this.otherHideOption(index)
                this.$parent.productData[index].optionOpen =
                    !this.$parent.productData[index].optionOpen
            },
            otherHideOption(num) {
                this.$parent.productData.forEach((el, index) => {
                    if (index !== num) el.optionOpen = false
                })
            },
            goToPDP() {
                alert('PDP 링크')
            }
        }
    }
</script>
