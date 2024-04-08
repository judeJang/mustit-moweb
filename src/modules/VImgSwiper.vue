<template>
    <div class="comp_img_swiper swiper-container" :ref="id">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="list in 3" :key="list">
                <a class="swiper_link" href="#">
                    <img :src="imgPath" alt="product" class="cover_img" />
                </a>
            </li>
        </ul>
        <div class="swiper-pagination" ref="marketingPaging"></div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    export default {
        name: 'ImagesSwiper',
        props: {
            id: { type: String, default: '' },
            img: { type: String, default: '' }
        },
        data() {
            return {
                swiper: null,
                listLength: 3,
                imgPath: require('@/assets/img/750x200.jpg')
            }
        },
        mounted() {
            if (this.img !== '') this.imgPath = this.img
            this.swiper = new Swiper(this.$refs[this.id], {
                initialSlide: Math.floor(Math.random() * this.listLength) - 1,
                resizeObserver: true,
                loop: this.listLength > 1 ? true : false, //갯수가 1개보다 많으면
                followFinger: this.listLength > 1 ? true : false,
                pagination: {
                    el: this.$refs.marketingPaging,
                    clickable: true
                }
            })
        }
    }
</script>
