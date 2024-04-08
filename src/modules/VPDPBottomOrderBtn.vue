<template>
    <article class="PDP_bottom_order_btn" :class="{ 'hide_shadow': slideUpOpen }">
        <div class="order_btn_container">
            <template v-if="firstStep">
                <div class="wish" @click.stop="toggleWish($event)">
                    <i><span class="blind">아이콘</span></i>
                    <p>2,345</p>
                </div>
                <div class="share" @click.stop="shareBtn"></div>
                <button type="button" class="buy_btn" @click="nextStep">구매하기</button>
            </template>
            <template v-else>
                <template v-if="!soldout">
                    <button
                        type="button"
                        class="get_cart"
                        @click="orderBtn(), soldoutFun()"
                    >
                        장바구니
                    </button>
                    <button type="button" class="direct_buy" @click="orderBtn()">
                        바로구매
                    </button>
                </template>
                <template v-if="soldout">
                    <button
                        type="button"
                        class="soldout"
                        @click.stop="
                            soldout = false
                            firstStep = true
                        "
                    >
                        품절상품
                    </button>
                </template>
            </template>
        </div>
        <!-- 담았을때 모달 -->
        <ToastGetCart v-if="getCart" />
    </article>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import ToastGetCart from '@/modules/VPDPToastGetCart.vue'
    export default {
        name: 'PDP_BOTTOM_ORDER_BTN',
        data() {
            return {
                firstStep: true,
                orderMenu: false,
                optionSelect: false,
                cuponDawn: true,
                soldout: false,
                getCart: false
            }
        },
        components: { ToastGetCart },
        computed: { ...mapState('modalModule', ['slideUpOpen', 'slideComponentName']) },
        methods: {
            ...mapActions('modalModule', ['slideUpModalAction', 'setSlideComponentName']),
            nextStep() {
                this.firstStep = false
                this.setSlideComponentName('VPDPOrderOption.vue')
                this.$parent.zIndex = 9000
                this.slideUpModalAction(true)
                this.soldout = false
            },
            shareBtn() {
                this.setSlideComponentName('VPDPShare.vue')
                this.$parent.zIndex = 9004
                this.slideUpModalAction(true)
            },
            directBuyer() {
                this.firstStep = true
            },
            toggleWish(e) {
                const _ = e.currentTarget
                if (!_.classList.contains('animation')) {
                    _.classList.add('animation')
                    setTimeout(() => {
                        _.classList.remove('animation')
                    }, 400)
                } else {
                    return false
                }
                if (_.classList.contains('add')) {
                    _.classList.remove('add')
                    //console.log('wish 해제')
                } else {
                    _.classList.add('add')
                    //console.log('wish 추가')
                }
            },
            orderBtn() {
                this.slideUpModalAction(false)
                this.soldout = !this.soldout
            },
            soldoutFun() {
                this.soldout = !this.soldout
                if (!this.getCart) {
                    this.getCart = true
                    setTimeout(() => (this.getCart = false), 2000)
                }
            },
            optionMenu() {
                this.optionSelect = !this.optionSelect
                if (!this.optionSelect) {
                    this.$refs.optionMenu.classList.remove('option_active')
                } else {
                    this.$refs.optionMenu.classList.add('option_active')
                }
            }
        }
    }
</script>
