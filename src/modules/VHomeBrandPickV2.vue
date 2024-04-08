<template>
    <article class="brand_pick_version2">
        <div class="brand_pick__nav" v-if="brands.length > 1">
            <div class="swiper-wrapper">
                <button
                    type="button"
                    v-for="(nav, index) in brands"
                    :key="index"
                    class="swiper-slide"
                    :class="{ 'active': nav.active }"
                    @click="menuClick(index, 'click')"
                >
                    <div class="img_wrap">
                        <img src="https://dummyimage.com/160x160/aaa/fff" alt="img" />
                    </div>
                    <span class="brand">{{ nav.name }}</span>
                </button>
            </div>
        </div>

        <div class="brand_pick__container">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide"
                    v-for="(container, index) in brands"
                    :key="index"
                    :style="`background-color: ${container.color}`"
                >
                    <a href="#" class="banner">
                        <img
                            src="https://dummyimage.com/750x750/ddd/fff"
                            alt="brand image"
                        />
                        <div class="info_container">
                            <p class="desc">{{ container.desc }}</p>
                            <p class="brand">{{ container.name }}</p>
                        </div>
                    </a>
                    <div class="product_container">
                        <a href="#" class="product" v-for="item in 3" :key="item">
                            <div class="img_wrap">
                                <img
                                    src="https://image.mustit.co.kr/lib/upload/product/87queens/2022/12/5628e9cd15e858db9d41bc7492b4b374.jpeg/_dims_/resize/250"
                                    alt="product"
                                    class="cover_img"
                                />
                            </div>
                            <div class="info_container">
                                <p class="name">
                                    조르지오 아르마니 맨즈 아쿠아 디 지오 압솔뤼 EDP
                                    스프레이 향수 6.7 oz (200 ml) 4858094
                                </p>
                                <div class="price">
                                    <span class="discount_price">184,000</span>
                                    <span class="discount">33%</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
    import Swiper from 'swiper'

    export default {
        data() {
            return {
                brands: [
                    {
                        name: 'MACKAGE',
                        desc: '캐나다 럭셔리 패딩 브랜드1',
                        active: true,
                        color: '#2a170f'
                    },
                    {
                        name: 'Max Mara',
                        desc: '캐나다 럭셔리 패딩 브랜드2',
                        active: false,
                        color: 'skyblue'
                    },
                    {
                        name: 'Moncler',
                        desc: '캐나다 럭셔리 패딩 브랜드3',
                        active: false,
                        color: '#6f5fc9'
                    },
                    {
                        name: 'Isabel Marang',
                        desc: '캐나다 럭셔리 패딩 브랜드4',
                        active: false,
                        color: '#48a2b6'
                    },
                    {
                        name: 'GANNI',
                        desc: '캐나다 럭셔리 패딩 브랜드5',
                        active: false,
                        color: 'gray'
                    }
                ],
                menuSwiper: null,
                containerSwiper: null,
                selectData: null
            }
        },
        beforeMount() {
            this.selectData = this.brands[0]
        },
        mounted() {
            const _this = this

            this.menuSwiper = new Swiper('.brand_pick_version2 .brand_pick__nav', {
                speed: 500,
                slidesPerView: 'auto',
                resizeObserver: true,
                observer: true,
                observeParents: true,
                freeMode: true
            })

            this.containerSwiper = new Swiper(
                '.brand_pick_version2 .brand_pick__container',
                {
                    speed: 500,
                    slidesPerView: 1,
                    resizeObserver: true,
                    followFinger: false,
                    observeParents: true,
                    on: {
                        slideChangeTransitionStart: function () {
                            _this.menuClick(this.realIndex)
                        }
                    }
                }
            )
        },
        methods: {
            menuClick(num, behavior = 'swipe') {
                if (num === undefined) return false
                //btn click & move
                this.brands.forEach((e) => {
                    e.active = false
                })
                this.brands[num].active = true
                if (num >= 3) this.menuSwiper.slideTo(num)
                if (num < 3) this.menuSwiper.slideTo(0)

                //container swiper move
                if (behavior == 'click') {
                    this.containerSwiper.slideTo(num)
                }
            }
        }
    }
</script>
