<!-- CategoryMain.vue -->
<template>
    <aside class="main_category">
        <div class="swiper-container main_swiper">
            <div class="swiper-wrapper" ref="swiperWrapper">
                <div
                    class="swiper-slide"
                    v-for="section in sections"
                    :key="section.id"
                    :data-id="section.id"
                >
                    <button
                        :data-id="section.id"
                        @click="handleMenuClick(section.id)"
                        :class="{
                            active: activeSlide === section.id,
                            'static_bg': isStaticBackground(section.id)
                        }"
                    >
                        {{ section.name }}
                    </button>
                </div>
            </div>
            <div
                ref="indicatorRef"
                class="indicator"
                :style="indicatorStyle"
                v-show="isIndicatorVisible"
            ></div>
        </div>
    </aside>
</template>

<script>
    import Swiper from 'swiper'

    export default {
        props: {
            sections: Array,
            activeSlide: Number
        },
        data() {
            return {
                mainSwiper: null,
                activeSlidePos: 0,
                staticBgSlideId: 1,
                isIndicatorVisible: true
            }
        },
        computed: {
            indicatorStyle() {
                // 인디케이터 스타일을 계산
                return {
                    top: this.activeSlidePos + 'px'
                    // display: this.isIndicatorVisible ? 'block' : 'none'
                }
            }
        },
        methods: {
            initSwiper() {
                this.mainSwiper = new Swiper('.main_swiper', {
                    slidesPerView: 'auto',
                    freeMode: true,
                    direction: 'vertical',
                    // touchRatio: 0.5, // 사용자가 1픽셀을 스와이프해야 슬라이더가 0.5픽셀 이동한다는 것을 의미, 스와이프의 민감도를 줄이는 데 사용
                    speed: 10,
                    resizeObserver: true,
                    resistance: true,
                    resistanceRatio: 0, // 저항 비율을 제어 기본값 	0.85
                    roundLengths: true, // 스크롤 시 translate3d 소수점 -> 정수
                    on: {
                        slideChangeTransitionEnd: this.handleTouchMove,
                        slideChange: this.handleTouchMove,
                        slideMove: this.handleTouchMove
                    }
                })
            },
            calculateSlideHeights() {
                // Swiper 컨테이너 내 모든 슬라이드 요소를 가져옵니다.
                const slides = this.$el.querySelectorAll('.swiper-slide')

                // 모든 슬라이드의 높이를 합산합니다.
                let totalHeight = 0
                slides.forEach((slide) => {
                    totalHeight += slide.offsetHeight
                })

                return totalHeight
            },
            onResize() {
                if (this.mainSwiper) {
                    // 뷰포트 높이
                    const viewportHeight = window.innerHeight
                    // 컨테이너 높이
                    const containerHeight = this.calculateSlideHeights()

                    // 뷰포트 높이와 컨테이너 높이를 비교합니다.
                    const centerOption = containerHeight < viewportHeight

                    // Swiper 설정 업데이트
                    this.mainSwiper.params.centeredSlides = !centerOption
                    this.mainSwiper.params.centeredSlidesBounds = !centerOption

                    // Swiper 업데이트
                    this.mainSwiper.update()
                    // 인디게이터 업데이트
                    this.updateIndicatorPos()
                }
            },
            getTranslate() {
                // Swiper의 현재 위치(translate 값)를 반환
                // 값은 음수일 수 있으므로 절대값을 사용
                return Math.abs(this.mainSwiper.translate)
            },

            getDirection(currentTranslate) {
                // 현재 스와이프 위치와 마지막 스와이프 위치를 비교하여 스와이프 방향을 결정
                const isUp = currentTranslate > this.lastScrollTop

                // 스와이프가 맨 아래에 위치해 있는지 확인
                const isEnd = this.mainSwiper.isEnd

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
                const currentTranslate = this.getTranslate()
                this.getDirection(currentTranslate)
                this.updateShadow()
                this.isIndicatorVisible = false
                this.staticBgSlideId = this.activeSlide
            },
            goToSlide(slideIndex) {
                this.isIndicatorVisible = true
                if (this.mainSwiper) {
                    // Swiper 인스턴스의 .el 속성을 통해 DOM 요소에 접근
                    const swiperElement = this.mainSwiper.el

                    // swiper-wrapper 요소를 찾습니다.
                    const swiperWrapper = swiperElement.querySelector('.swiper-wrapper')

                    // swiper-wrapper가 존재한다면, 스타일을 설정합니다.
                    if (swiperWrapper) {
                        swiperWrapper.style.transitionDuration = '0.5s'
                    }
                    // 선택된 슬라이드 요소 찾기
                    const slide = this.mainSwiper.slides[slideIndex]
                    if (slide) {
                        // Swiper 컨테이너의 높이와 선택된 슬라이드의 상단 위치 계산
                        const swiperHeight = this.mainSwiper.height
                        const slideTop = slide.offsetTop
                        const slideHeight = slide.offsetHeight

                        // 슬라이드를 중앙에 위치시키기 위한 translate 값 계산
                        let translate = swiperHeight / 2 - (slideTop + slideHeight / 2)

                        // Swiper의 최대 translate 값 확인
                        const maxTranslate = this.mainSwiper.maxTranslate()

                        // Translate 값이 최대 및 최소 범위를 넘지 않도록 조정
                        translate = Math.max(maxTranslate, Math.min(translate, 0))

                        // Swiper의 translate 값을 조정하여 슬라이드를 중앙에 위치시키기
                        // this.mainSwiper.slideTo(slideIndex);
                        this.mainSwiper.setTranslate(translate)

                        // 인디케이터 및 기타 UI 요소 업데이트
                        this.updateIndicatorPos()

                        this.staticBgSlideId = slide.dataset.id
                    }
                }
            },
            handleMenuClick(sectionId) {
                this.$emit('menu-click', sectionId)
                this.updateIndicatorPos()
                this.staticBgSlideId = null
                this.isIndicatorVisible = true
            },
            isStaticBackground(slideId) {
                return this.staticBgSlideId === slideId
            },
            updateIndicatorPos() {
                const activeSlideElem = this.$el.querySelector(
                    '.swiper-slide button.active'
                ) // 현재 컴포넌트에서만 유효 함

                const containerElem = this.$refs.swiperWrapper
                const translateValue = this.mainSwiper.translate
                if (activeSlideElem && containerElem) {
                    this.activeSlidePos =
                        activeSlideElem.getBoundingClientRect().top -
                        containerElem.getBoundingClientRect().top +
                        translateValue
                }
            },
            updateShadow() {
                // Swiper가 시작점이나 끝점에 있는지 확인
                const isAtStart = this.mainSwiper.translate >= 0
                // const isAtEnd = this.subSwiper.isEnd
                // 상태에 따라 그림자를 업데이트
                this.$emit('update-shadow', !isAtStart)
            }
        },
        watch: {
            activeSlide() {
                // DOM 업데이트 후 인디케이터 위치 업데이트
                this.$nextTick(this.updateIndicatorPos)
            }
        },
        mounted() {
            // 컴포넌트가 마운트된 직후, 다음 틱에서 Swiper 초기화
            this.$nextTick(() => {
                this.initSwiper()
                this.onResize() // 초기 렌더링 시에도 적절한 설정이 적용되도록 합니다.
            })
            // window.addEventListener('resize', this.onResize)
        },
        beforeDestroy() {
            // 컴포넌트 제거 전에 Swiper 인스턴스 정리
            if (this.mainSwiper) {
                this.mainSwiper.destroy()
            }
            window.removeEventListener('resize', this.onResize)
        }
    }
</script>
<style scoped></style>
