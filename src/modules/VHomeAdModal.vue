<template>
    <article class="ad_modal">
        <transition name="fade-ani" @after-leave="onAfterLeave">
            <div class="black_deem" @click="commonClose()" v-if="show"></div>
        </transition>
        <transition name="slide-up" @enter="onEnter">
            <div class="ad_swiper swiper-container" ref="adSwiper" v-if="show">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" v-for="i in listLength" :key="i">
                        <router-link class="swiper_link" :to="{ name: 'home' }">
                            <img
                                src="https://dummyimage.com/750x500/944394/fff"
                                alt="images"
                            />
                        </router-link>
                    </li>
                </ul>
                <p class="paging">
                    <span class="current">{{ curNum }}</span> &nbsp;/&nbsp;
                    <span class="total">{{ listLength }}</span>
                </p>
                <div class="bottom_btn">
                    <button type="button" @click="cookieClose()">오늘 그만보기</button>
                    <button type="button" @click="commonClose()">닫기</button>
                </div>
            </div>
        </transition>
    </article>
</template>
<script>
    import Swiper from 'swiper'
    import { getCookie, setCookie } from '@/assets/js/Common'
    export default {
        name: 'ADModal',
        props: {
            showADModal: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                swiper: null,
                curNum: NaN,
                listLength: 10,
                show: false
            }
        },

        watch: {
            showADModal: function (n) {
                const HTML = document.getElementsByTagName('html')[0]
                const BODY = document.body

                if (n) {
                    if (getCookie('homeADModal') !== 'Y') {
                        HTML.classList.add('html_scroll')
                        BODY.classList.add('body_scroll')
                        this.show = true
                    }
                } else {
                    HTML.classList.remove('html_scroll')
                    BODY.classList.remove('body_scroll')
                    this.show = false
                }
            }
        },
        methods: {
            curNumber(num) {
                this.curNum = num + 1
            },
            addSwiper() {
                const _ = this
                const swiperTarget = this.$refs.adSwiper
                this.swiper = new Swiper(swiperTarget, {
                    speed: 500,
                    resizeObserver: true,
                    spaceBetween: 0,
                    loop: this.listLength <= 1 ? false : true, //배너가 1개 이하라면
                    slidesPerView: 1,
                    on: {
                        init: function () {
                            _.curNumber(this.realIndex)
                        }
                    }
                })
                this.swiper.on('slideChange', function () {
                    _.curNumber(this.realIndex)
                })
            },
            //슬라이드업 진입 후
            onEnter() {
                if (this.swiper !== null) this.swiper.destroy()
                this.addSwiper()
                this.swiper.update()
            },
            //하루동안 보지 않기
            cookieClose() {
                setCookie('homeADModal', 'Y')
                this.commonClose()
            },
            //닫기
            commonClose() {
                this.show = false
                this.$parent.showADModal = false
            },
            //객체 삭제
            onAfterLeave() {
                this.$parent.closeADModal = true
            }
        },
        destroyed() {
            if (this.swiper) {
                this.swiper.destroy()
            }
        }
    }
</script>
