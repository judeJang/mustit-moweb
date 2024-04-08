<script>
    import Swiper from 'swiper'
    export default {
        props: {
            id: { type: String, default: '' }
        },
        data() {
            return {
                swiper: null,
                imgPath:
                    'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1625618375-1.jpg'
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs[this.id], {
                resizeObserver: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                centeredSlidesBounds: true,
                followFinger: false,
                observer: true,
                observeParents: true,
                pagination: {
                    el: this.$refs.magazinePaging,
                    clickable: true
                }
            })
        }
    }
</script>
<template>
    <article class="magazine_product">
        <div class="magazine_product__swiper swiper-container" :ref="id">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="list in 5" :key="list">
                    <a class="swiper_link" href="#">
                        <div
                            class="img_wrap"
                            :data-badge="[list % 2 ? 'STORY' : 'TREND']"
                        >
                            <img :src="imgPath" alt="product" class="cover_img" />
                        </div>
                        <div class="info_container">
                            <p class="title">당장 이번 겨울 패션부터 영감을 줄 뮤즈</p>
                            <p class="desc">
                                도저히 적용이 어려운 셀럽의 최근 착장이나 의도를 이해하기
                                어려운 런웨이 위 의상들 대신, 바로 바로 나에게 대입이
                                가능한 도저히 적용이 어려운 셀럽의 최근 착장이나 의도를
                                이해하기 어려운 런웨이 위 의상들 대신, 바로 바로 나에게
                                대입이 가능한
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="swiper-pagination" ref="magazinePaging"></div>
        </div>
    </article>
</template>
