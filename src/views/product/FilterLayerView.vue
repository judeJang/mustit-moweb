<template>
    <section class="self_module">
        <button type="button" class="filter" @click.stop="filterToggle()">
            필터 보기
        </button>
        <SlideUpWrap />
    </section>
</template>
<script>
    import SlideUpWrap from '@/modules/VModalSlideUpWrap.vue'
    import { mapActions } from 'vuex'

    export default {
        name: 'FILTER_LAYER',
        components: { SlideUpWrap },
        data() {
            return {}
        },
        mounted() {
            this.filterToggle()
        },
        methods: {
            ...mapActions('modalModule', ['slideUpModalAction', 'setSlideComponentName']),
            filterToggle() {
                this.setSlideComponentName('VFilterLayer.vue')
                this.slideUpModalAction(true)
            }
        }
    }
</script>
<style lang="scss" scoped>
    section {
        height: 100vh;
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 50px;
            margin: 80px 0 0 80px;
            border-radius: 4px !important;
            background: #121212 !important;
            color: $white;
        }
    }
</style>
