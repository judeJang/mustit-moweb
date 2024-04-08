<script>
    import Swiper from 'swiper'
    import EventBus from '@/assets/js/EventBus'

    export default {
        name: 'MainBigBanner',
        props: {
            id: { type: String, default: '' }
        },
        components: {},
        data() {
            return {
                swiper: null,
                listLength: 10,
                curNum: NaN
            }
        },
        methods: {
            curNumber(num) {
                this.curNum = num + 1
            },
            allEventShow() {
                console.log('close')
                EventBus.$emit('allModalOpen')
            }
        },
        mounted() {
            const _this = this
            const swiperTarget = `#${this.id}`
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
                slidesPerView: 'auto',
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                on: {
                    init: function () {
                        _this.curNumber(this.realIndex)
                    }
                }
            })
            this.swiper.on('slideChange', function () {
                _this.curNumber(this.realIndex)
            })
        }
    }
</script>
<template>
    <article class="big_banner">
        <div :id="id" class="big_banner__swiper swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="index in listLength" :key="index">
                    <router-link class="swiper_link" :to="{ name: 'home' }">
                        <img
                            src="https://cdn.mustit.co.kr/lib/upload/home/main_banner/2021/09/5d8f04d2ac15f0693935389f66e77241.jpeg"
                            alt="images"
                            class="cover_img"
                        />
                    </router-link>
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
<style lang="sass"></style>
