<template>
    <section class="public_content">
        <SubHeader :type="3" title="가격비교 (12)" />
        <main class="compare_container">
            <BaseCheckRed text="무료배송만 보기" @change="showFreeDelivery" />
            <template v-if="hasItems">
                <PriceItem
                    v-for="(item, index) in productData"
                    :data="item"
                    :key="index"
                    :id="index"
                />
                <p class="desc_text">상품가격 및 혜택은 실시간으로 변경될 수 있습니다.</p>
                <p class="desc_text">상품 페이지에서 가격을 한번 더 확인하세요.</p>
            </template>
            <template v-else>
                <article class="empty">
                    <i class="comp_icon_empty"></i>
                    <p>조건과 일치하는 상품이 없습니다.</p>
                </article>
            </template>
        </main>
    </section>
</template>

<script>
    /* components */
    import SubHeader from '@/components/SubHeader.vue'
    import BaseCheckRed from '@/components/BaseCheckboxRed.vue'
    import PriceItem from '@/views/product/ComparePriceItem.vue'

    //optional
    export default {
        components: {
            SubHeader,
            BaseCheckRed,
            PriceItem
        },
        data() {
            return {
                hasItems: true,
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
        methods: {
            showFreeDelivery(val) {
                this.hasItems = !val
            }
        }
    }
</script>
