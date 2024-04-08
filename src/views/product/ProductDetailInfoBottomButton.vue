<template>
    <div class="pulg_goods_order">
        <div class="pulg_goods_order__select_area">
            <div
                class="pulg_goods_order__select_content"
                ref="orderMenu"
                :class="{ 'menu_on': orderMenu }"
            >
                <div class="goods_select">
                    <div class="goods_select__size_tip">
                        <button class="goods_select__size_btn">사이즈 참고표</button>
                    </div>
                    <div class="goods_select__option_box">
                        <div
                            class="detail_option_select"
                            ref="optionMenu"
                            :class="{ 'option_active': optionSelect }"
                            @click="optionMenu()"
                        >
                            <!-- custom select -->
                            <div class="title_select_box">옵션을 선택하세요</div>
                            <div class="select_option_box">
                                <ul class="inner_box">
                                    <li
                                        class="option_list"
                                        :class="{
                                            'goods_almost': list.state === 'almost',
                                            'goods_soldout': list.state === 'soldout'
                                        }"
                                        v-for="(list, index) in prodOpt"
                                        :key="index"
                                    >
                                        <span class="select_option_box__option">
                                            {{ list.text }}
                                        </span>
                                        <span
                                            class="select_option_box_state"
                                            v-if="list.state !== ''"
                                        >
                                            {{ optState(list.state) }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- select items -->
                        <div class="detail_price_info">
                            <div class="item_box" v-for="i in 5" :key="i">
                                <div class="item_header">
                                    <span class="item_header__name">
                                        아이보리 / IT34
                                    </span>
                                    <span class="item_header__delete">
                                        <span class="item_header__btn_delete"> </span>
                                    </span>
                                </div>
                                <div class="item_price_info">
                                    <span class="item_price_info__length">
                                        <div class="item_price_info__length_btn">
                                            <button
                                                class="item_price_info__btn_minus"
                                            ></button>
                                            <input
                                                type="number"
                                                class="item_price_info__num"
                                                value="1"
                                            />
                                            <button
                                                class="item_price_info__btn_plus"
                                            ></button>
                                        </div>
                                    </span>
                                    <span class="item_price_info__price_box">
                                        <span class="item_price_info__price">
                                            1,230,000
                                        </span>
                                        <span class="item_price_info__won"> 원 </span>
                                    </span>
                                </div>
                                <div class="gift_option_select">
                                    <select class="select_box" name="" id="">
                                        <option value="">사은품을 선택해 주세요</option>
                                        <option value="">보테가 베네타 위빙 키링</option>
                                        <option value="">보테가 옵션1</option>
                                        <option value="">보테가 옵션2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="detail_total_box">
                            <div
                                class="max_sale_price detail_total_box__cupon"
                                @click="couponBtn"
                            >
                                <div class="max_sale_price__cupon" v-if="couponDown">
                                    <button class="max_sale_price__btn_box">
                                        할인받기
                                    </button>
                                </div>
                                <div class="max_sale_price__cupon_check" v-else>
                                    <span class="max_sale_price__btn_box">
                                        할인적용
                                    </span>
                                </div>
                            </div>
                            <div
                                class="detail_total_box__total_price"
                                @click="soldOutBtn()"
                            >
                                <span class="txt">총 금액</span>
                                <span class="price">1,230,000</span>
                                <span class="won">원</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- bg -->
            <div
                class="pulg_goods_order__select_bg"
                v-if="orderMenu"
                style="display: block"
                @click="orderBtn()"
            ></div>
        </div>
        <!-- 장바구니 담았을때 -->
        <div class="layer_cart_box" ref="cartPop" :class="{ 'cart_pop_on': cartOpen }">
            <div class="layer_cart_box__inner_box">
                <p class="layer_cart_box__txt">장바구니에 상품이 담겼습니다.</p>
                <a href="#" class="layer_cart_box__link">장바구니 가기</a>
            </div>
        </div>
        <div class="goods_order_btn">
            <template v-if="!soldoutState && orderMenu">
                <span class="goods_order_btn__box btn_cart">
                    <button class="goods_order_btn__button" @click="orderBtn()">
                        장바구니
                    </button>
                </span>
                <span class="goods_order_btn__box btn_buy">
                    <button class="goods_order_btn__button" @click="orderBtn()">
                        바로구매
                    </button>
                </span>
            </template>
            <template v-else>
                <span class="goods_order_btn__box btn_wish">
                    <button
                        class="goods_order_btn__button"
                        :class="[
                            { 'no_animation': !isBtnAnimation },
                            { 'wish_list_on': isWished },
                            { 'wish_list_off': !isWished }
                        ]"
                        @click="wishBtn()"
                    >
                        <span class="wish_num">{{
                            wishCount > 9999
                                ? '9,999+'
                                : new Intl.NumberFormat().format(wishCount)
                        }}</span>
                    </button>
                </span>
                <span class="goods_order_btn__box btn_buy" v-if="!soldoutState">
                    <button class="goods_order_btn__button" @click="orderBtn()">
                        구매하기
                    </button>
                </span>
                <span class="goods_order_btn__box btn_soldout" v-else>
                    <button class="goods_order_btn__button">품절상품</button>
                </span>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                optionSelect: false,
                orderMenu: false,
                cartOpen: false,
                couponDown: false,
                soldoutState: false,
                isWished: false,
                wishCount: 99999,
                wishNumber: '',
                isBtnAnimation: false,
                prodOpt: [
                    { text: '블랙 - 레드와펜 / S(남성)', state: '' },
                    { text: '블랙 - 레드와펜 / M(남성)', state: '' },
                    { text: '블랙 - 레드와펜 / L(남성)', state: '' },
                    { text: '블랙 - 레드와펜 / L(남성)', state: 'almost' },
                    { text: '블랙 - 레드와펜 / L(남성)', state: 'almost' },
                    { text: '블랙 - 레드와펜 / L(남성)', state: 'almost' },
                    { text: '블랙 - 레드와펜 / L(남성)', state: 'soldout' },
                    { text: '블랙 - 레드와펜 / L(남성)', state: 'soldout' },
                    { text: '블랙 - 레드와펜 / L(남성)', state: 'soldout' }
                ]
            }
        },
        watch: {
            orderMenu: function (n) {
                if (!n) {
                    this.cartOpen = true
                    this.isBtnAnimation = false
                    setTimeout(() => {
                        this.cartOpen = false
                    }, 2000)
                }
            }
        },
        methods: {
            optionMenu() {
                this.optionSelect = !this.optionSelect
            },
            orderBtn() {
                this.orderMenu = !this.orderMenu
            },
            couponBtn() {
                this.couponDown = !this.couponDown
            },
            optState(data) {
                const STR = data === 'almost' ? '품절임박' : '품절'
                return STR
            },
            soldOutBtn() {
                this.soldoutState = !this.soldoutState
            },
            wishBtn() {
                this.isBtnAnimation = true
                this.isWished ? this.wishCount-- : this.wishCount++
                this.isWished = !this.isWished
            }
        }
    }
</script>
