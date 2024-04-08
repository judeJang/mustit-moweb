<script>
    import Swiper from 'swiper'
    export default {
        props: {
            id: { type: String, default: '' }
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
<template>
    <article class="best_review">
        <div class="best_review__swiper swiper-container" :ref="id">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="list in 5" :key="list">
                    <a class="swiper_link" href="#">
                        <div class="img_wrap">
                            <img
                                src="https://cdn.mustit.co.kr/dev_server/review/2021/08/18/13522315_0_20210818141847_7322.jpeg/_dims_/resize/%5E500/cropcenter/500x500"
                                alt="product"
                                class="cover_img"
                            />
                        </div>
                        <div class="info_container">
                            <p class="brand">GUCCI</p>
                            <p class="review">
                                구찌 홀스빗 플랫슈즈 구매하려고 검색하다가 머스트잇에서
                                구매했는데 국내배송으로 주문하니 배구찌 홀스빗 플랫슈즈
                                구매하려고 검색하다가 머스트잇에서 구매했는데 국내배송으로
                                주문하니 배
                            </p>
                            <div class="comp_star_rating" :class="`star${list}`">
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </article>
</template>
