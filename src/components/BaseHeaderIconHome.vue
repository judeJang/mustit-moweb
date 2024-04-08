<template>
    <router-link
        to="/home"
        :class="bothShow"
        class="comp_header_icon_wrap"
        aria-label="홈으로 가기"
    >
        <i
            class="comp_header_icon_home"
            :style="curOpacity"
            v-if="color == 'black' || type == 'fade'"
        ></i>
        <i
            class="comp_header_icon_home_wh"
            :style="curOppositeOpacity"
            v-if="color == 'white' || type == 'fade'"
        ></i>
    </router-link>
</template>
<script>
    export default {
        name: 'HeaderIconHome',
        props: {
            color: { type: String, default: 'black' },
            opacity: { type: Number, default: NaN },
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
