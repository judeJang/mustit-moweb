<script>
    import Swiper from 'swiper'
    export default {
        name: 'HotDeal',
        props: {
            id: { type: String, default: '' }
        },
        data() {
            return {
                swiper: null,
                imgPath:
                    'https://cdn.mustit.co.kr/lib/upload//admin/specialSale/e39fd90cce484f6198eff6f2194c0d6a.jpeg'
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs[this.id], {
                resizeObserver: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: 10,
                followFinger: false,
                pagination: {
                    type: 'custom',
                    el: '.product-modules-pagination',
                    clickable: true,
                    renderCustom: (_, current, total) => {
                        return Array.from(Array(total).keys())
                            .map(
                                (i) =>
                                    `<span class="product-modules-pagination-bullet${
                                        current - 1 === i ? '-active' : ''
                                    }"></span>`
                            )
                            .join('')
                    }
                }
            })
        }
    }
</script>
<template>
    <article class="hot_deal">
        <div class="hot_deal__swiper swiper-container" :ref="id">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="list in 5" :key="list">
                    <a class="swiper_link" href="#">
                        <div class="time_wrap">
                            <span class="timer">17:02:31</span>남음
                        </div>
                        <div class="img_wrap">
                            <img :src="imgPath" alt="product" class="cover_img" />
                        </div>
                        <div class="info_container">
                            <div class="info_container__text">
                                <p class="brand">
                                    GUCCIGUCCIGUCCIGUCCIGUCCIGUCCIGUCCIGUCCIGUCCIGUCCIGUCCIGUCCIGUCCIGUCCIGUCCI
                                </p>
                                <p class="name">
                                    GG 캔버스 크로스백GG 캔버스 크로스백GG 캔버스
                                    크로스백GG 캔버스 크로스백
                                </p>
                                <div class="price">
                                    <p class="discount_price">189,000</p>
                                    <p class="real_price">335,000</p>
                                </div>
                            </div>
                            <div class="info_container__discount">
                                <span class="big">44</span> <i>%</i>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="product-modules-pagination"></div>
        </div>
    </article>
</template>
