<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>할인혜택</h2>
        </header>
        <div class="layer_container fix_bottom_button discount_container">
            <Item></Item>
            <div class="divider"></div>
            <ul class="discount_list">
                <li v-for="(list, index) in dData" :key="index">
                    <dl>
                        <dt>{{ list.name }}</dt>
                        <dd>
                            <span class="price"
                                ><strong>{{ list.price.toLocaleString('ko-KR') }}</strong
                                >원</span
                            >
                            <button
                                type="button"
                                :class="{ 'apply': list.applyState == 'apply' }"
                                :disabled="list.applyState == 'fix' ? true : false"
                                @click="applyBtn(index, list.applyState)"
                            >
                                {{ execuseMap(list.applyState) }}
                            </button>
                        </dd>
                    </dl>
                </li>
            </ul>

            <div class="fix_button">
                <button type="button">{{ addPrice }}원 할인 적용</button>
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
                dData: [
                    { name: '즉시할인', price: -2500, applyState: 'fix' },
                    { name: '단골할인', price: -2000, applyState: 'pending' },
                    { name: '기획전 할인 (4%)', price: -8000, applyState: 'apply' }
                ]
            }
        },
        mounted() {},
        computed: {
            addPrice() {
                let sum = 0
                for (const value of this.dData) {
                    if (value.applyState == 'fix' || value.applyState == 'apply') {
                        sum += value.price
                    }
                }
                const price = sum * -1
                return price.toLocaleString('ko-KR')
            }
        },
        methods: {
            modalClose: function () {
                this.$parent.close()
            },
            execuseMap: function (str) {
                const map = {
                    'fix': '적용중',
                    'pending': '적용하기',
                    'apply': '적용취소'
                }
                return map[str]
            },
            applyBtn: function (index, str) {
                const changeStr = str === 'pending' ? 'apply' : 'pending'
                this.dData[index].applyState = changeStr
            }
        }
    }
</script>
