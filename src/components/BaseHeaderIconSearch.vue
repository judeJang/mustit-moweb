<template>
    <router-link
        :to="router"
        :class="bothShow"
        class="comp_header_icon_wrap"
        aria-label="검색하기"
    >
        <i
            class="comp_header_icon_search"
            :style="curOpacity"
            v-if="color == 'black' || type == 'fade'"
        ></i>
        <i
            class="comp_header_icon_search_wh"
            :style="curOppositeOpacity"
            v-if="color == 'white' || type == 'fade'"
        ></i>
    </router-link>
</template>
<script>
    export default {
        name: 'HeaderIconSearch',
        props: {
            color: { type: String, default: 'black' },
            opacity: { type: Number, default: NaN },
            type: { type: String, default: '' }, // '' or fade
            router: { type: String, default: '/product/search' }
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
