<template>
    <button
        type="button"
        @click="$router.go(-1)"
        :class="bothShow"
        class="comp_header_icon_wrap"
        aria-label="뒤로가기"
    >
        <i
            class="comp_header_icon_back"
            :style="curOpacity"
            v-if="color == 'black' || type == 'fade'"
        ></i>
        <i
            class="comp_header_icon_back_wh"
            v-if="color == 'white' || type == 'fade'"
            :style="curOppositeOpacity"
        ></i>
    </button>
</template>
<script>
    export default {
        name: 'HeaderIconBack',
        props: {
            color: { type: String, default: 'black' },
            opacity: { type: Number, default: NaN },
            type: { type: String, default: '' } // '' or fade
        },
        computed: {
            bothShow() {
                let classes = {
                    'both': this.type === 'fade'
                }
                return classes
            },
            curOpacity() {
                return `opacity:${this.opacity}`
            },
            curOppositeOpacity() {
                return `opacity:${1 - this.opacity}`
            }
        },
        mounted() {
            // //console.log(this.type, )
        }
    }
</script>
