<script>
    import Swiper from 'swiper'
    import EventBus from '@/assets/js/EventBus'
    import ThreeItem from '@/components/ThreeItem.vue'
    export default {
        components: {
            ThreeItem
        },
        props: {
            brandName: String,
            id: String,
            dataArray: Array
        },
        data() {
            return {
                swiper: null
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs[this.id], {
                speed: 500,
                resizeObserver: true,
                followFinger: false,
                touchReleaseOnEdges: true,
                slidesPerView: 1,
                observer: true,
                observeParents: true
            })
            EventBus.$emit('brandSwiper', this.swiper)

            this.swiper.on('slideChangeTransitionStart', function () {
                let id = this.realIndex
                EventBus.$emit('menuSwiperClick', id)
            })
        },
        methods: {}
    }
</script>
<template>
    <div>
        <div class="popular_swiper swiper-container" :ref="id">
            <ul class="swiper-wrapper">
                <li
                    class="popular_swiper__list swiper-slide"
                    v-for="item in dataArray"
                    :key="item.name"
                >
                    <ThreeItem v-for="list in 6" :key="list" />
                </li>
            </ul>
        </div>
        <button type="button" class="popular_btn">
            <strong>{{ brandName }}</strong>
            상품 더보기
        </button>
    </div>
</template>
<style lang="sass"></style>
