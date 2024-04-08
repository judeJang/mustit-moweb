<template>
    <router-link
        to="#"
        class="comp_header_basket comp_header_icon_wrap"
        :class="bothShow"
        aria-label="장바구니 가기"
    >
        <i
            class="comp_header_icon_basket"
            :style="curOpacity"
            v-if="color == 'black' || type == 'fade'"
        ></i>
        <i
            class="comp_header_icon_basket_wh"
            :style="curOppositeOpacity"
            v-if="color == 'white' || type == 'fade'"
        ></i>
        <span class="count" v-if="itemsCount != 0">{{ itemsCount }}</span>
    </router-link>
</template>
<script>
    export default {
        name: 'HeaderIconBasket',
        props: {
            color: { type: String, default: 'black' },
            opacity: { type: Number, default: NaN },
            itemsCount: { type: Number, default: 0 },
            type: { type: String, default: '' } // '' or fade
        },
        computed: {
            bothShow() {
                return this.type == 'fade' ? 'both' : ''
            },
            curOpacity() {
                return `opacity:${this.opacity}`
            },
            curOppositeOpacity() {
                return `opacity:${1 - this.opacity}`
            }
        }
    }
</script>
