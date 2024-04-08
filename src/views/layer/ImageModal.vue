<template>
    <section class="layer_all_black public_content">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
        </header>
        <div class="layer_container">
            <div class="swiper-container" ref="zoomContainer">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="swiper-zoom-container">
                            <img
                                src="https://cdn.mustit.co.kr/review/2019/05/17/suki1919_0_1558056831_10.jpg/_dims_/resize/%5E500"
                                alt="suki1919_0_1558056831_10.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Swiper from 'swiper'
    import EventBus from '@/assets/js/EventBus'
    export default {
        data() {
            return {
                swiper: null
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs.zoomContainer, {
                followFinger: false,
                zoom: true
            })
        },
        methods: {
            modalClose() {
                EventBus.$emit('imageModalClose')
            }
        }
    }
</script>
