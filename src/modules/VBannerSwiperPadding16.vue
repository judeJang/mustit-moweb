<template>
    <article
        class="comp_banner_swiper_padding_16"
        :class="{ 'single_banner': listLength == 1 }"
    >
        <div class="swiper-container" :ref="id">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="list in listLength" :key="list">
                    <a class="swiper_link" href="#">
                        <img
                            src="https://dummyimage.com/328x80/000/fff"
                            alt="promotion"
                        />
                    </a>
                </li>
            </ul>
            <div
                class="swiper-pagination"
                ref="indicator"
                v-if="this.listLength > 1"
            ></div>
        </div>
    </article>
</template>
<script>
    import Swiper from 'swiper'
    export default {
        name: 'BANNER_SWIPER_PADDING_16',
        props: {
            id: { type: String, required: true }
        },
        data() {
            return {
                swiper: null,
                listLength: 3
            }
        },
        mounted() {
            if (this.img !== '') this.imgPath = this.img
            this.swiper = new Swiper(this.$refs[this.id], {
                resizeObserver: true,
                loop: this.listLength > 1 ? true : false, //갯수가 1개보다 많으면
                followFinger: this.listLength > 1 ? true : false,
                spaceBetween: 16,
                pagination: {
                    el: this.$refs.indicator,
                    clickable: true
                }
            })
        },
        beforeDestroy() {
            this.swiper.destroy()
        }
    }
</script>
