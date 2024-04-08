<template>
    <article class="PDP_option_container self_module" :style="`z-index:${zIndex}`">
        <div class="size_tip">
            <button type="button">사이즈 참고표</button>
        </div>
        <!-- 옵션 셀렉트 -->
        <div
            class="select_box"
            :class="{ active: optionOpen }"
            @click="optionOpen = !optionOpen"
        >
            <p class="name">옵션을 선택하세요</p>
            <div class="option_box" v-if="optionOpen">
                <ul class="inner_wrap">
                    <li
                        v-for="(list, index) in optionList"
                        :key="index"
                        :class="{ soldout: list.stock == 0 }"
                    >
                        <span class="option_name">{{ list.name }}</span>
                        <span class="stock_info" v-if="list.stock >= 0">
                            {{ list.stock | stockInfo }}</span
                        >
                    </li>
                </ul>
            </div>
        </div>
        <!-- 옵션 컨텐츠 -->
        <div class="fix_height_box">
            <ul class="select_price_info" v-if="true">
                <li
                    class="select_list"
                    v-for="(list, index) in selectItemsList"
                    :key="index"
                >
                    <div class="list_header">
                        <div class="name">{{ list.name }}</div>
                        <button
                            type="button"
                            class="list_delete_btn"
                            title="리스트 삭제"
                        ></button>
                    </div>
                    <div class="amount_price">
                        <div class="amount_box">
                            <button type="button" class="minus"></button>
                            <input type="number" readonly value="1" />
                            <button type="button" class="plus"></button>
                        </div>
                        <p class="price_box">{{ list.price }}</p>
                    </div>
                    <select name="" id="" class="select_gift" v-if="list.gift">
                        <option :value="opt" v-for="opt in list.gift" :key="opt">
                            {{ opt }}
                        </option>
                    </select>
                </li>
            </ul>

            <div class="payment_price" v-if="true">
                <button
                    type="button"
                    class="discount"
                    :class="{ active: applyDiscount }"
                    @click="applyDiscount = !applyDiscount"
                >
                    {{ applyDiscountText }}
                </button>
                <p class="total_price">1,230,000</p>
            </div>
        </div>
    </article>
</template>
<!-- <style lang="scss" scoped>
    .PDP_option_container {
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: 1000;
    }
</style> -->
<script>
    export default {
        name: 'PDP_ORDER_OPTION',
        props: {
            zIndex: { type: Number, default: 9003 }
        },
        data() {
            return {
                optionOpen: false,
                applyDiscount: false,
                applyDiscountText: this.applyDiscount ? '할인적용' : '할인받기',
                optionList: [
                    {
                        name: '블랙 - 레드와펜 / S(남성)',
                        stock: 11
                    },
                    {
                        name: '블랙 - 레드와펜 / S(남성)',
                        stock: 11
                    },
                    {
                        name: '블랙 - 레드와펜 / S(남성)',
                        stock: 6
                    },
                    {
                        name: '블랙 - 레드와펜 / S(남성)',
                        stock: 10
                    },
                    {
                        name: '블랙 - 레드와펜 / S(남성)',
                        stock: 0
                    },
                    {
                        name: '블랙 - 레드와펜 / S(남성)',
                        stock: 7
                    },
                    {
                        name: '블랙 - 레드와펜 / S(남성)',
                        stock: 11
                    }
                ],
                selectItemsList: [
                    {
                        name: '아이보리 / IT34',
                        price: '1,230,000'
                    },
                    {
                        name: '아이보리 / IT34',
                        price: '1,230,000',
                        gift: [
                            '사은품을 선택해 주세요',
                            '보테가 베네타 위빙 키링',
                            '보테가 옵션1',
                            '보테가 옵션2'
                        ]
                    },
                    {
                        name: '아이보리 / IT34',
                        price: '1,230,000',
                        gift: [
                            '사은품을 선택해 주세요',
                            '보테가 베네타 위빙 키링',
                            '보테가 옵션1',
                            '보테가 옵션2'
                        ]
                    },
                    {
                        name: '아이보리 / IT34',
                        price: '1,230,000'
                    },
                    {
                        name: '아이보리 / IT34',
                        price: '1,230,000',
                        gift: [
                            '사은품을 선택해 주세요',
                            '보테가 베네타 위빙 키링',
                            '보테가 옵션1',
                            '보테가 옵션2'
                        ]
                    },
                    {
                        name: '아이보리 / IT34',
                        price: '1,230,000'
                    }
                ]
            }
        },
        filters: {
            stockInfo(num) {
                if (num === 0) {
                    return '품절'
                } else if (num < 10) {
                    return '품절임박'
                }
            }
        }
    }
</script>
