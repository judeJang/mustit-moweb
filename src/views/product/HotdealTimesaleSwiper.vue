<template>
    <article class="hotdeal_timesale self_module">
        <!-- 타이머 영역 swiper fade -->
        <div class="hotdeal_timer_swiper" :ref="id + 'timer'">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide timer_slide"
                    :class="item.oneday ? 'oneday' : 'timesale'"
                    v-for="(item, i) in list"
                    :key="i"
                >
                    <template v-if="item.oneday">
                        <p class="timer_title">
                            <img
                                :src="`${$S3}m_product/hotdeal-title-1-day.png`"
                                alt="원데이 초특가"
                            />
                        </p>
                        <p class="title">{{ oneday }}</p>
                        <p class="timer" @click="day = day == 0 ? 1 : 0">
                            <strong class="time">{{
                                hours - i > 9 ? hours - i : '0' + (hours - i)
                            }}</strong>
                            <i class="colon">:</i>
                            <strong class="time">{{
                                minutes - i > 9 ? minutes - i : '0' + (minutes - i)
                            }}</strong>
                            <i class="colon">:</i>
                            <strong class="time">{{
                                seconds > 9 ? seconds : '0' + seconds
                            }}</strong>
                        </p>
                    </template>
                    <template v-else>
                        <p class="timer_title">TIME SALE</p>
                        <p class="title">{{ timesale }}</p>
                        <p class="timer" @click="day = day == 0 ? 1 : 0">
                            <template v-if="day > 0">
                                <strong class="day">D-{{ day }}</strong>
                                <span class="text">/</span>
                            </template>
                            <strong class="time">{{
                                hours - i > 9 ? hours - i : '0' + (hours - i)
                            }}</strong>
                            <i class="colon">:</i>
                            <strong class="time">{{
                                minutes - i > 9 ? minutes - i : '0' + (minutes - i)
                            }}</strong>
                            <i class="colon">:</i>
                            <strong class="time">{{
                                seconds > 9 ? seconds : '0' + seconds
                            }}</strong>
                        </p>
                    </template>
                </div>
                <!-- <div class="swiper-slide timer_slide timesale">
                    <p class="timer_title">TIME SALE</p>
                    <p class="title">{{ timesale }}</p>
                    <p class="timer" @click="day = day == 0 ? 1 : 0">
                        <template v-if="day > 0">
                            <strong class="day">D-{{ day }}</strong>
                            <span class="text">/</span>
                        </template>
                        <strong class="time">{{
                            hours > 9 ? hours : '0' + hours
                        }}</strong>
                        <i class="colon">:</i>
                        <strong class="time">{{
                            minutes > 9 ? minutes : '0' + minutes
                        }}</strong>
                        <i class="colon">:</i>
                        <strong class="time">{{
                            seconds > 9 ? seconds : '0' + seconds
                        }}</strong>
                    </p>
                </div>
                <div class="swiper-slide timer_slide oneday">
                    <p class="timer_title">
                        <img
                            :src="`${$S3}m_product/hotdeal-title-1-day.png`"
                            alt="원데이 초특가"
                        />
                    </p>
                    <p class="title">{{ oneday }}</p>
                    <p class="timer" @click="day = day == 0 ? 1 : 0">
                        <strong class="time">{{
                            hours > 9 ? hours : '0' + hours
                        }}</strong>
                        <i class="colon">:</i>
                        <strong class="time">{{
                            minutes > 9 ? minutes : '0' + minutes
                        }}</strong>
                        <i class="colon">:</i>
                        <strong class="time">{{
                            seconds > 9 ? seconds : '0' + seconds
                        }}</strong>
                    </p>
                </div> -->
            </div>
        </div>
        <!-- 상품 정보 영역 swiper -->
        <div class="hotdeal_timesale_swiper" :ref="id">
            <ul class="swiper-wrapper">
                <li
                    class="swiper-slide hotdeal_item"
                    :class="[{ active: i == 0 }, { soldout: item.jeago == 0 }]"
                    v-for="(item, i) in list"
                    :key="i"
                    :data-type="item.oneday ? 'oneday' : 'timesale'"
                >
                    <a href="#">
                        <div class="img_wrap">
                            <img
                                :src="item.imgPath"
                                alt="상품 이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="info_container">
                            <div class="info_box">
                                <p class="brand">{{ item.brand }}</p>
                                <p class="name">{{ item.productName }}</p>
                                <p class="price">
                                    {{ item.discountPrice }}
                                    <del v-if="item.discount > 0">
                                        {{ item.delPrice }}
                                    </del>
                                </p>
                            </div>
                            <div class="discount" v-if="item.discount > 0">
                                <strong>{{ item.discount }}</strong>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <span class="hotdeal_pagination" ref="hotDealPaging">
            <span class="move"></span>
        </span>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        data() {
            return {
                swiper: null,
                timerSwiper: null,
                day: 1,
                hours: 21,
                minutes: 37,
                seconds: 58,
                timer: null
            }
        },
        props: {
            id: { type: String, default: 'hotdealTimesaleSwiper' },
            list: { type: Array },
            timesale: { type: String },
            oneday: { type: String }
        },
        methods: {
            timedealBg(speed) {
                const onedayIndex = this.timerSwiper.$('.oneday').index()
                const timesaleIndex = this.timerSwiper.$('.timesale').index()
                if (
                    this.swiper
                        .$(
                            `.swiper-slide[data-swiper-slide-index="${this.swiper.realIndex}"]`
                        )
                        .attr('data-type') == 'oneday'
                ) {
                    this.timerSwiper.slideTo(onedayIndex, speed)
                } else {
                    this.timerSwiper.slideTo(timesaleIndex, speed)
                }
            }
        },
        mounted() {
            // timer
            this.timer = setInterval(() => {
                if (this.seconds == 0) {
                    if (this.minutes == 0) {
                        if (this.hours == 0) {
                            if (this.day == 0) {
                                clearInterval(this.timer)
                            } else {
                                this.hours = 23
                                this.minutes = 59
                                this.seconds = 59
                                this.day--
                            }
                        } else {
                            this.seconds = 59
                            this.minutes = 59
                            this.hours--
                        }
                    } else {
                        this.minutes--
                        this.seconds = 59
                    }
                } else {
                    this.seconds--
                }
            }, 1000)
            //timer swiper
            this.timerSwiper = new Swiper(this.$refs[this.id + 'timer'], {
                effect: 'fade',
                allowTouchMove: false,
                followFinger: false,
                resizeObserver: true,
                loop: true
            })
            // swiper
            this.swiper = new Swiper(this.$refs[this.id], {
                spaceBetween: 12,
                resizeObserver: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                centeredSlidesBounds: true,
                followFinger: false,
                loop: true,
                speed: 500,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: this.$refs.hotDealPaging,
                    type: 'custom',
                    renderCustom: function (swiper, current, total) {
                        swiper.$('.move').css({
                            width: `${100 / total}%`,
                            left: `${(100 / total) * (current - 1)}%`
                        })
                    }
                },
                thumbs: {
                    swiper: this.timerSwiper
                }
            })
            // this.timedealBg(0) // 첫 화면
            this.swiper.on('slideChangeTransitionEnd', () => {
                this.swiper.$('.swiper-slide.hotdeal_item').removeClass('active')
                this.swiper
                    .$(
                        `.swiper-slide[data-swiper-slide-index="${this.swiper.realIndex}"]`
                    )
                    .addClass('active')
                // this.timedealBg(200) // slide change
            })
        }
    }
</script>

<style></style>
