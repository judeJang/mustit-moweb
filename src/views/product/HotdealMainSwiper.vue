<template>
    <article class="hotdeal_swiper_container">
        <div class="timer_conatiner">
            <h2 class="timesale">TIME SALE</h2>
            <p class="timer" @click="day = day == 0 ? 1 : 0">
                <strong class="day" v-if="day > 0">{{ day }}</strong>
                <span class="text" v-if="day > 0">일</span>
                <strong class="time">{{ hours > 9 ? hours : '0' + hours }}</strong>
                <i class="colon">:</i>
                <strong class="time">{{ minutes > 9 ? minutes : '0' + minutes }}</strong>
                <i class="colon">:</i>
                <strong class="time">{{ seconds > 9 ? seconds : '0' + seconds }}</strong>
                <span class="text">남음</span>
            </p>
            <p class="title">{{ title }}</p>
        </div>
        <!-- 최소 1개에서 최대 24개까지 셋팅 -->
        <div class="hotdeal_swiper" :ref="id">
            <ul class="swiper-wrapper">
                <li
                    class="swiper-slide hotdeal_item"
                    :class="[{ active: i == 0 }, { soldout: item.jeago == 0 }]"
                    v-for="(item, i) in list"
                    :key="i"
                >
                    <a href="#">
                        <div class="img_container">
                            <div class="img_wrap">
                                <img
                                    :src="item.imgPath"
                                    alt="상품 이미지"
                                    class="cover_img"
                                />
                            </div>
                            <span class="discount" v-if="item.discount > 0">
                                <strong>{{ item.discount }}</strong>
                            </span>
                        </div>
                        <div class="info_container">
                            <p class="brand">{{ item.brand }}</p>
                            <p class="name">{{ item.productName }}</p>
                            <p class="price">
                                {{ item.discountPrice }} <del>3,323,400</del>
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <span class="hotdeal_pagination" ref="hotDealPaging">
            <span class="move"></span>
        </span>
        <div class="gradient_bg" ref="gradientBg">
            <span class="before"></span>
            <span class="after"></span>
        </div>
    </article>
</template>
<script>
    import Swiper from 'swiper'
    export default {
        data() {
            return {
                swiper: null,
                day: 1,
                hours: 23,
                minutes: 21,
                seconds: 58,
                timer: null
            }
        },
        props: {
            id: { type: String, default: 'hotdealMainSwiper' },
            list: { type: Array },
            title: { type: String }
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
            // swiper
            this.swiper = new Swiper(this.$refs[this.id], {
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
                        this.el.dataset['total'] = total
                        this.el.dataset['current'] = current
                    }
                }
            })
            // gradient
            const elGradient = this.$refs.gradientBg
            let moveWidth
            let elWidth
            let bgMoveEnd = true
            // 일차함수
            const linearFunction = (curX, startX, endX, startY, endY, intcY) => {
                const y = ((endY - startY) / (endX - startX)) * curX + intcY
                return y
            }
            // gradient 크기
            const loadSize = function () {
                moveWidth = window.innerWidth / 3
                elWidth = elGradient.offsetWidth
                console.log(moveWidth, elWidth)
            }
            loadSize()
            window.addEventListener('resize', loadSize)

            // 배경움직임 parameters로 next, prev
            const bgPosition = (event) => {
                const xPos = elGradient.offsetLeft
                let resetX = xPos
                if (!bgMoveEnd) return false

                bgMoveEnd = false
                if (event == 'next' && xPos <= (-1 * elWidth) / 2) {
                    resetX = linearFunction(xPos, 0, -1 * elWidth, elWidth, 0, elWidth)
                    console.warn('reset', event, resetX)
                } else if (event == 'prev' && xPos >= elWidth / 2) {
                    resetX = linearFunction(
                        xPos,
                        elWidth,
                        0,
                        0,
                        -1 * elWidth,
                        -1 * elWidth
                    )
                    console.warn('reset', event, resetX)
                }

                //move
                const moveVal = event == 'next' ? resetX - moveWidth : resetX + moveWidth
                console.log(moveVal, 'move')
                setTimeout(function () {
                    elGradient.animate(
                        [{ left: resetX + 'px' }, { left: moveVal + 'px' }],
                        {
                            duration: 1000,
                            easing: 'ease-in-out',
                            fill: 'both'
                        }
                    )
                }, 600)
                setTimeout(function () {
                    bgMoveEnd = true
                }, 1600)
            }
            this.swiper.on('slideNextTransitionStart', () => {
                bgPosition('next')
            })
            this.swiper.on('slidePrevTransitionStart', () => {
                bgPosition('prev')
            })
            this.swiper.on('slideChangeTransitionEnd', () => {
                this.swiper.$('.swiper-slide.hotdeal_item').removeClass('active')
                this.swiper
                    .$(
                        `.swiper-slide[data-swiper-slide-index="${this.swiper.realIndex}"]`
                    )
                    .addClass('active')
            })
        }
    }
</script>

<style></style>
