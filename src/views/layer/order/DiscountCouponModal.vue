<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>할인쿠폰</h2>
        </header>
        <div class="layer_container fix_bottom_button discount_container">
            <template v-for="(box, index) in data">
                <article class="inner_container" :key="box[1].name">
                    <item></item>
                    <label
                        class="coupon_list"
                        :class="{ 'active': list.checked, 'disabled': list.otherUsed }"
                        v-for="(list, bIndex) in box[1]"
                        :key="bIndex"
                    >
                        <input
                            type="radio"
                            :name="box[0]"
                            @change="radioChange($event, index, bIndex)"
                            :disabled="list.otherUsed ? true : false"
                        />
                        <i class="radio_circle"></i>
                        <div class="coupon_info">
                            <p class="discount">{{ list.discount }}</p>
                            <p class="name" v-if="list.name">{{ list.name }}</p>
                            <div class="option" v-if="list.option">
                                <span v-for="opt in list.option" :key="opt">{{
                                    opt
                                }}</span>
                                <p class="duplicate_used" v-if="list.duplicateUse">
                                    앱할인 중복사용불가
                                </p>
                            </div>
                            <p class="other_used" v-if="list.otherUsed">
                                다른 상품에 적용중
                            </p>
                        </div>
                    </label>
                </article>
                <div class="divider" v-if="index < data.length - 1" :key="index"></div>
            </template>
            <div class="fix_button is_shadow">
                <button type="button">{{ sum }}원 할인 적용</button>
            </div>
        </div>
    </section>
</template>
<script>
    import Item from '@/views/layer/order/DiscountItem.vue'

    export default {
        components: { Item },
        data() {
            return {
                imgPath:
                    'https://cdn.mustit.co.kr/lib/upload/product/s-project/2021/10/1635388017-20.jpeg/_dims_/resize/250x250/extent/250x250',
                data: [
                    [
                        '11111',
                        [
                            {
                                name: '임직원 10% 할인 쿠폰 (2022년)',
                                discount: '-2,500원 (10%)',
                                option: ['최대 300,000원 할인', '05/01~06/30'],
                                otherUsed: false,
                                duplicateUse: true,
                                checked: false,
                                price: -2500
                            },
                            {
                                name: '임직원 10% 할인 쿠폰 (2022년)',
                                discount: '-2,500원 (10%)',
                                option: ['최대 300,000원 할인', '05/01~06/30'],
                                otherUsed: false,
                                checked: false,
                                price: -2500
                            },
                            {
                                name: '임직원 10% 할인 쿠폰 (2022년)',
                                discount: '-2,500원 (10%)',
                                option: ['최대 300,000원 할인', '05/01~06/30'],
                                otherUsed: true,
                                checked: false,
                                price: -2500
                            },
                            {
                                name: '룰렛 랜덤 쿠폰 (앱전용)',
                                discount: '-30,000원',
                                option: ['60만원 이상 구매 시', '앱할인 중복사용불가'],
                                otherUsed: false,
                                checked: false,
                                price: -30000
                            },
                            {
                                discount: '선택 안함',
                                checked: false,
                                price: 0
                            }
                        ]
                    ],
                    [
                        '222',
                        [
                            {
                                name: '임직원 10% 할인 쿠폰 (2022년)',
                                discount: '-2,500원 (10%)',
                                option: ['최대 300,000원 할인', '05/01~06/30'],
                                otherUsed: true,
                                checked: false,
                                duplicateUse: true,
                                price: -2500
                            },
                            {
                                name: '임직원 10% 할인 쿠폰 (2022년)',
                                discount: '-2,500원 (10%)',
                                option: ['최대 300,000원 할인', '05/01~06/30'],
                                otherUsed: false,
                                checked: false,
                                price: -2500
                            },
                            {
                                name: '임직원 10% 할인 쿠폰 (2022년)',
                                discount: '-2,500원 (10%)',
                                option: ['최대 300,000원 할인', '05/01~06/30'],
                                otherUsed: true,
                                checked: false,
                                price: -2500
                            },
                            {
                                name: '룰렛 랜덤 쿠폰 (앱전용)',
                                discount: '-30,000원',
                                option: ['60만원 이상 구매 시', '05/01~06/30'],
                                otherUsed: false,
                                checked: false,
                                price: -30000
                            },
                            {
                                discount: '선택 안함',
                                checked: false,
                                price: 0
                            }
                        ]
                    ]
                ],
                priceMap: [0]
            }
        },
        computed: {
            sum() {
                let sumNum = this.priceMap.reduce((a, b) => a + b)
                return sumNum.toLocaleString('ko-KR')
            }
        },

        methods: {
            modalClose: function () {
                this.$parent.close()
            },
            radioChange(e, id, bId) {
                const checked = e.target.checked

                for (let data of this.data[id][1]) {
                    data.checked = false
                }
                this.data[id][1][bId].checked = checked
                this.totalPrice(id, this.data[id][1][bId].price)
            },
            totalPrice(index, price) {
                this.$set(this.priceMap, index, Math.abs(price))
                console.log(this.priceMap)
            }
        }
    }
</script>
