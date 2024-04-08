<template>
    <article class="product_slider_container box_border_top">
        <div class="product_slider_container__title">
            <span class="txt">
                <slot></slot>
            </span>
            <a class="more_btn">전체보기</a>
        </div>
        <div
            id="product_slider_box01"
            class="product_slider_container__item_slider swiper-container"
            ref="product_slider_box01"
        >
            <div class="item_inner swiper-wrapper">
                <a class="swiper-slide item_box" href="#" v-for="i in 10" :key="i">
                    <div class="img_box">
                        <img
                            src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                            alt="상품이미지"
                            class="cover_img"
                        />
                    </div>
                    <div class="txt_box">
                        <div class="brand">A.P.C.</div>
                        <div class="desc">
                            [TEST-009]
                            웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                        </div>
                        <div class="price_box">
                            <span class="goods_price">17,721,000</span>
                            <span class="discount">36%</span>
                        </div>
                        <del class="goods_price_del">17,721,000</del>
                    </div>
                </a>
            </div>
        </div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        data() {
            return {
                swiperOpt: {
                    speed: 500,
                    resizeObserver: true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    slideToClickedSlide: true,
                    observer: true,
                    observeParents: true
                }
            }
        },
        mounted() {
            new Swiper(this.$refs.product_slider_box01, this.swiperOpt)
        }
    }
</script>

<style></style>
