<template>
    <article class="home_big_banner007 self_module">
        <div :id="id" class="big_banner__swiper swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(item, index) in data" :key="index">
                    <a :href="item.landingUrl" class="swiper_link">
                        <img :src="item.imageUrl" alt="images" class="cover_img" />
                    </a>
                </li>
            </ul>
            <button type="button" class="big_banner__pagination" @click="allEventShow()">
                <p>
                    <span class="current">{{ curNum }}</span> /
                    <span class="total">{{ listLength }}</span>
                </p>
                <i class="icon"></i>
            </button>
        </div>
    </article>
</template>
<script>
    import Swiper from 'swiper'
    import EventBus from '@/assets/js/EventBus'
    import { moduleListData } from '@/assets/js/dummy/HomeData'

    // 데이터 자르기
    const dataSlice = () => {
        let isType
        let sliceData = []
        let randomMode = false
        const setData = () => {
            for (let idx in moduleListData) {
                if (moduleListData[idx].type == isType) {
                    if (moduleListData[idx].data.isRandomMode) {
                        randomMode = moduleListData[idx].data.isRandomMode
                    }
                    sliceData = [...moduleListData[idx].data.items]
                    break
                }
            }
        }
        return {
            setType: (type) => {
                isType = type
                setData()
            },
            getData: () => {
                return sliceData
            },
            getRandom: () => {
                return randomMode
            }
        }
    }

    const mainSwiperOption = (length, isRandom) => {
        const interleaveOffset = 0.5
        let len = length
        let initSlide = isRandom ? Math.floor(Math.random() * len) - 1 : 0
        let currentSlide = NaN
        let option = {
            initialSlide: initSlide,
            speed: 600,
            spaceBetween: 0,
            loop: len <= 1 ? false : true,
            followFinger: len <= 1 ? false : true,
            grabCursor: true,
            watchSlidesProgress: true,
            observer: true,
            resizeObserver: true,
            observeParents: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            on: {
                init: function () {
                    currentSlide = initSlide + 1
                },
                progress: function () {
                    const swiper = this
                    Array.from(swiper.slides).forEach((el) => {
                        let progress = el.progress
                        let innerOffset = swiper.width * interleaveOffset
                        let innerTranslate = progress * innerOffset
                        el.querySelector(
                            'img'
                        ).style.transform = `translate3d(calc( -50% + ${innerTranslate}px),-50%,0)`
                    })
                },
                setTransition: function (speed) {
                    const swiper = this
                    Array.from(swiper.slides).forEach((el) => {
                        el.querySelector('img').style.transition = speed + 'ms'
                    })
                }
            }
        }

        return {
            getOption: () => {
                return option
            },
            getCurrentSlide: () => {
                return currentSlide
            }
        }
    }

    export default {
        name: 'MainBigBanner',
        props: {
            id: { type: String, default: '' }
        },
        components: {},
        data() {
            return {
                swiper: null,
                listLength: NaN,
                curNum: NaN,
                data: null,
                random: false
            }
        },
        methods: {
            curNumber(num) {
                this.curNum = num + 1
            },
            allEventShow() {
                // console.log('close')
                EventBus.$emit('allModalOpen')
            },
            getData() {
                this.$axios
                    .get('https://api.mustit.xyz/facade/v3/home/main', {
                        headers: {
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzc0tleSI6ImY2OThhN2NmLTc0NTAtNDBhMC1hMDVhLTUyMWZlYjhiZTk2YiIsImZyb21JZCI6Im11c3RpdC13ZWIiLCJpYXQiOjE3MDEzMDM3MjMsImV4cCI6MTcwMTMxNDUyM30.ANqYu0BozZkNCQc_8APDl7YpmkKjHUSvdjLhhjK6kac`
                        }
                    })
                    .then((res) => {
                        console.log(res.data)
                        console.log(res.status)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        created() {
            this.getData()
        },
        beforeMount() {
            const BigBannerDataSlice = dataSlice()
            BigBannerDataSlice.setType('BigBannerV4')
            this.data = BigBannerDataSlice.getData()
            this.random = BigBannerDataSlice.getRandom()
            this.listLength = this.data.length
        },
        mounted() {
            const _ = this
            const swiperTarget = `#${this.id}`
            const SwiperSet = mainSwiperOption(this.data.length, this.random)
            this.swiper = new Swiper(swiperTarget, SwiperSet.getOption())
            this.curNum = SwiperSet.getCurrentSlide()
            this.swiper.on('slideChange', function () {
                _.curNum = this.realIndex + 1
            })
        }
    }
</script>
