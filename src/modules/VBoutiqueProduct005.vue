<template>
    <article class="boutique_big_swiper self_module">
        <div class="swiper" ref="boutiqueBigSwiper">
            <div class="swiper-wrapper">
                <a href="#" class="swiper-slide" v-for="item in 6" :key="item">
                    <img src="@/assets/img/750.jpg" alt="" />
                </a>
            </div>
        </div>
        <span class="boutique_pagination" ref="boutiquePaging">
            <span class="move"></span>
        </span>
    </article>
</template>
<script>
    import Swiper from 'swiper'
    export default {
        data() {
            return {
                swiper: null
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs.boutiqueBigSwiper, {
                resizeObserver: true,
                slidesPerView: 1,
                followFinger: false,
                loop: true,
                speed: 500,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: this.$refs.boutiquePaging,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        this.el.dataset['total'] = total
                        this.el.dataset['current'] = current
                    }
                }
            })
        }
    }
</script>
<style></style>
