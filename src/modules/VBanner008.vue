<template>
    <article class="banner008 self_module">
        <div class="swiper_container" :ref="id">
            <ul class="swiper-wrapper">
                <li class="swiper-slide banner_box" v-for="ind in listLength" :key="ind">
                    <a href="#">
                        <picture
                            ><source :srcset="imgPath[ind]" type="image/webp" />
                            <img
                                :src="imgPath[ind]"
                                alt="Outlet banner"
                                class=""
                                style="aspect-ratio: 0.75 / 1"
                        /></picture>
                    </a>
                </li>
            </ul>
        </div>
        <div class="pagination_type1" v-if="paginationType === 1">
            <div class="progress">
                <span
                    :style="`width:${pageWidth}%; transform: translateX(${pagePosition}%)`"
                ></span>
            </div>
            <div class="paging">
                <span>{{ curNum }}</span>
                /
                <span>{{ listLength }}</span>
            </div>
        </div>
        <div class="pagination_type2 swiper-pagination" v-if="paginationType === 2"></div>
    </article>
</template>

<script>
    // paginationType
    // 1: progress bar + paging
    // 2: just test

    import Swiper from 'swiper'
    export default {
        name: 'VBanner008',
        props: {
            size: { type: String, default: '750x750' },
            paginationType: { type: Number, default: 1 },
            id: { type: String, default: '' }
        },
        data() {
            return {
                swiper: null,
                listLength: 3,
                curNum: NaN,
                imgPath: [
                    '',
                    'https://image.mustit.xyz/lib/upload/home/marketing_banner/a5a7c906b5a0d142040d44b3afb78ce1.png/_dims_/quality/80/autorotate/on',
                    'https://image.mustit.xyz/lib/upload/home/marketing_banner/dca1438c8fe0c01475fc322679268e9b.jpg/_dims_/quality/80/autorotate/on',
                    'https://image.mustit.xyz/lib/upload/home/marketing_banner/394e50de083e8f9b9428b25636e98e52.jpg/_dims_/quality/80/autorotate/on'
                ]
            }
        },
        computed: {
            pageWidth: function () {
                return (1 / this.listLength) * 100
            },
            pagePosition: function () {
                return 100 * (this.curNum - 1)
            }
        },
        methods: {
            curNumber(num) {
                this.curNum = num + 1
                console.log(num, '=====', this.imgPath[num])
            }
        },
        mounted() {
            const _this = this
            const swiperTarget = this.$refs[this.id]

            this.initNum = Math.floor(Math.random() * this.listLength) - 1

            this.swiper = new Swiper(swiperTarget, {
                initialSlide: this.initNum,
                speed: 500,
                resizeObserver: true,
                spaceBetween: 0,
                loop: this.listLength <= 1 ? false : true, //배너가 1개 이하라면
                followFinger: this.listLength <= 1 ? false : true, //배너가 1개 이하라면
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                slidesPerView: 1,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                on: {
                    init: function () {
                        _this.curNumber(this.realIndex)
                    }
                },
                pagination:
                    this.paginationType === 2 ? { el: '.pagination_type2' } : { el: null }
            })
            this.swiper.on('slideChange', function () {
                _this.curNumber(this.realIndex)
            })
        }
    }
</script>
