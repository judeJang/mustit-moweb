<template>
    <div class="hotdeal_items_swiper" :ref="id">
        <ul class="swiper-wrapper">
            <li class="swiper-slide swiper_item" v-for="(item, i) in list" :key="i">
                <a href="#">
                    <div class="img_wrap">
                        <img :src="item.imgPath" alt="product" class="cover_img" />
                    </div>
                    <div class="info_container">
                        <p class="brand">{{ item.brand }}</p>
                        <p class="name">{{ item.productName }}</p>
                        <div class="price_info">
                            <p class="discount">
                                <strong>{{ item.discount }}</strong>
                            </p>
                            <div class="price">
                                <del class="del_price">{{ item.delPrice }}</del>
                                <p class="discount_price">{{ item.discountPrice }}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        props: {
            id: { type: String, default: 'hotdealItemsSwiper' },
            list: { type: Array }
        },
        data() {
            return {
                swiper: null
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs[this.id], {
                resizeObserver: true,
                slidesPerView: 'auto',
                freeMode: true
            })
        }
    }
</script>
