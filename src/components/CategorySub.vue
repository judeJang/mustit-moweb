<!-- CategorySub.vue -->
<template>
    <div class="sub_category">
        <div class="swiper-container sub_swiper">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide"
                    :class="section.id"
                    v-for="section in sections"
                    :key="section.id"
                >
                    <slot v-if="isBannerVisible">
                        <Banner003
                            v-if="section.id === 1"
                            id="CategoryBanner003"
                            data-module="CategoryBanner003"
                        />
                    </slot>

                    <h2 :class="{ no_banner: !isBannerVisible }">
                        <a
                            :href="checkLink(section.content.link)"
                            :class="{ disabled: !section.content.link }"
                        >
                            {{ section.content.title }}
                        </a>
                    </h2>
                    <div class="sub_category_box">
                        <a
                            :href="checkLink(menuItem.link)"
                            v-for="menuItem in section.content.menuItems"
                            :key="menuItem.name"
                        >
                            <div class="img_wrap">
                                <div class="round_box">
                                    <img :src="menuItem.img" :alt="menuItem.name" />
                                </div>
                            </div>
                            <p class="name">{{ menuItem.name }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import Banner003 from '@/modules/VCategoryBanner003.vue'

    export default {
        components: {
            Banner003
        },
        props: {
            sections: Array
        },
        data() {
            return {
                subSwiper: null,
                slidesOffsetData: [],
                lastScrollTop: 0, // 마지막 스크롤 위치를 저장
                isBannerVisible: true
            }
        },
        methods: {
            initSwiper() {
                const _ = this
                this.subSwiper = new Swiper('.sub_swiper', {
                    slidesPerView: 'auto',
                    freeMode: true, // 사용자 슬라이더를 자유롭게 드래그
                    direction: 'vertical',
                    resizeObserver: true,
                    resistance: true,
                    resistanceRatio: 0,
                    touchRatio: 0.8,
                    on: {
                        transitionStart: this.handleTouchMove,
                        transitionEnd: this.handleTouchMove,
                        slideMove: this.handleTouchMove,
                        slideChange() {
                            _.handleTouchMove()
                        }
                    }
                })
            },

            checkLink(link) {
                // 링크가 유효한지 확인하고, 유효하지 않은 경우 기본값을 반환
                return link || 'javascript:void(0)'
            },
            getSlidesOffsetData() {
                // 각 슬라이드의 offset 정보를 수집하여 slidesOffsetData 배열에 저장
                // slidesOffsetData 배열을 초기화합니다.
                this.slidesOffsetData = []

                // Swiper 슬라이드의 offset 정보를 수집합니다.
                Array.prototype.forEach.call(this.subSwiper.slides, (el) => {
                    const offsetTop = el.offsetTop
                    const offsetHeight = el.offsetHeight
                    this.slidesOffsetData.push({
                        start: offsetTop,
                        end: offsetTop + offsetHeight
                    })
                })
            },

            handleScroll() {
                const currentTranslate = this.getTranslate()
                let targetIndex = this.getIndex(currentTranslate)
                const progress = this.calcProgress(targetIndex, currentTranslate)
                const isEnd = this.subSwiper.isEnd
                const totalSlides = this.subSwiper.slides.length // 총 슬라이드 수

                // progress가 0.85 이상이거나 슬라이드가 끝에 도달한 경우,
                // 그리고 targetIndex가 총 슬라이드 수보다 작은 경우에만 targetIndex를 증가
                if ((progress >= 0.7 || isEnd) && targetIndex < totalSlides - 1) {
                    targetIndex += 1
                }

                this.UpdateProgress(targetIndex)
                this.getDirection(currentTranslate)
            },

            getTranslate() {
                // Swiper의 현재 위치(translate 값)를 반환
                // 값은 음수일 수 있으므로 절대값을 사용
                return Math.abs(this.subSwiper.translate)
            },

            getIndex(currentTranslate) {
                // 현재 위치에 기반하여 활성 슬라이드의 인덱스를 찾아 반환
                return this.slidesOffsetData.findIndex((offset, index) => {
                    const isCurrentSlide = currentTranslate >= offset.start
                    const isLastSlide =
                        !this.slidesOffsetData[index + 1] ||
                        currentTranslate < this.slidesOffsetData[index + 1].start
                    return isCurrentSlide && isLastSlide
                })
            },

            calcProgress(currentIndex, currentTranslate) {
                // 스와이프의 진행률
                const currentSlideElem = this.subSwiper.slides[currentIndex]
                const currentSlideHeight = currentSlideElem.offsetHeight
                const currentSlideStart = currentSlideElem.offsetTop
                const actualSwipedDistance = currentTranslate - currentSlideStart
                return Math.abs(actualSwipedDistance) / currentSlideHeight
            },

            UpdateProgress(currentIndex) {
                // 진행 상황 업데이트를 부모 컴포넌트에 전달
                this.$emit('progress-update', currentIndex + 1)
            },

            getDirection(currentTranslate) {
                // 현재 스와이프 위치와 마지막 스와이프 위치를 비교하여 스와이프 방향을 결정
                const isUp = currentTranslate > this.lastScrollTop

                // 스와이프가 맨 아래에 위치해 있는지 확인
                const isEnd = this.subSwiper.isEnd

                // 방향 초기화
                let Direction = ''

                if (isEnd && !isUp) {
                    // 스와이프가 맨 아래에 있고, 사용자가 아래로 스와이프를 계속할 경우
                    Direction = 'down'
                } else if (isUp) {
                    // 일반적으로 위로 스와이프하는 경우
                    Direction = 'down'
                } else {
                    // 일반적으로 아래로 스와이프하는 경우
                    Direction = 'up'
                }

                // 방향 변경을 이벤트로 전달합니다.
                this.$emit('scroll-direction', Direction)

                // 마지막 스크롤 위치를 업데이트합니다.
                this.lastScrollTop = currentTranslate
            },
            handleTouchMove() {
                this.updateShadow()
                this.throttle(this.handleScroll(),200)
                // this.checkEnd()
            },
            goToSlide(slideIndex) {
                if (this.subSwiper) {
                    this.subSwiper.slideTo(slideIndex, 500)
                }
            },
            updateShadow() {
                // Swiper가 시작점이나 끝점에 있는지 확인
                const isAtStart = this.subSwiper.translate >= 0
                // const isAtEnd = this.subSwiper.isEnd
                // 상태에 따라 그림자를 업데이트
                this.$emit('update-shadow', !isAtStart)
            },
            // Throttle 함수 정의
            throttle(func, limit) {
                let inThrottle
                return function () {
                    const args = arguments
                    const context = this
                    if (!inThrottle) {
                        func.apply(context, args)
                        inThrottle = true
                        setTimeout(() => (inThrottle = false), limit)
                    }
                }
            }
        },
        mounted() {
            // 컴포넌트가 마운트된 직후, 다음 틱에서 Swiper 초기화
            this.$nextTick(() => {
                this.initSwiper()
                this.getSlidesOffsetData() // 슬라이드 위치 데이터 초기화 호출
                // Throttle 적용
                const throttledScroll = this.throttle(this.handleScroll, 200)
                this.subSwiper.on('scroll', throttledScroll)
            })
        },
        beforeDestroy() {
            // 컴포넌트 제거 전에 Swiper 인스턴스 정리
            if (this.subSwiper) {
                this.subSwiper.destroy()
            }
        }
    }
</script>
