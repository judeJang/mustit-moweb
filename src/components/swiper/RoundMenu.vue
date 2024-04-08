<script>
    import Swiper from 'swiper'
    import EventBus from '@/assets/js/EventBus'
    export default {
        props: {
            dataArray: Array,
            id: { type: String, default: 'roundMenuSwiper' },
            target: String
        },
        data() {
            return {
                swiper: null,
                applyCheck: true
            }
        },
        mounted() {
            if (this.dataArray.length > 3) {
                this.swiper = new Swiper(this.$refs[this.id], {
                    speed: 500,
                    slidesPerView: 'auto',
                    resizeObserver: true,
                    observeParents: true,
                    observeSlideChildren: true,
                    observe: true,
                    centeredSlides: true,
                    centeredSlidesBounds: true,
                    slideToClickedSlide: true,
                    freeMode: true,
                    on: {
                        transitionStart: () => {
                            // 추후 작업
                            if (!this.applyCheck) {
                                // this.swiper.wrapperEl.style.transform =
                                //     'translate3d(0,0,0)'
                            }
                        }
                    }
                })
            }

            window.addEventListener('resize', this.applyCenterCalculator)
            this.applyCenterCalculator()

            EventBus.$emit('menuSwiper', this.swiper)
            if (this.target == 'mainCategory') {
                EventBus.$emit('cMenuSwiper', this.swiper)
            } else if (this.target == 'mainRanking') {
                EventBus.$emit('rMenuSwiper', this.swiper)
            }
        },
        methods: {
            menuClick(index, type = 'combined') {
                //다른 컴포넌트와 연결된 메서드
                if (type == 'combined') {
                    EventBus.$emit('menuSwiperClick', index)
                    if (this.target == 'mainCategory') {
                        EventBus.$emit('cMenuActive', index, 'click')
                    } else if (this.target == 'mainRanking') {
                        EventBus.$emit('rMenuActive', index, 'click')
                    }
                } else {
                    this.$emit('send-index', index)
                    // this.swiper.slideTo(index)
                }
            },
            applyCenterCalculator() {
                const name = this.id, //ref
                    swiper = this.$refs[name],
                    wrapper = swiper.querySelector('.swiper-wrapper'),
                    slide = swiper.querySelectorAll('.swiper-slide'),
                    slideLength = slide.length,
                    lastSlide = slide[slideLength - 1],
                    lastSlideWidth = lastSlide.getBoundingClientRect().width,
                    lastSlideLeft = lastSlide.getBoundingClientRect().left,
                    lastSlideMargin = parseInt(
                        window
                            .getComputedStyle(lastSlide)
                            .getPropertyValue('margin-right'),
                        10
                    ),
                    lastSlidePosition = lastSlideWidth + lastSlideLeft + lastSlideMargin

                this.applyCheck = wrapper.offsetWidth < lastSlidePosition ? true : false
                // console.log(wrapper.offsetWidth, lastSlidePosition, this.applyCheck)
            }
        }
    }
</script>
<template>
    <nav class="comp_menu_swiper swiper-container" :ref="id">
        <ul class="swiper-wrapper">
            <li
                class="swiper-slide"
                :class="{ active: item.isActive }"
                v-for="(item, index) in dataArray"
                :key="item.name"
                @click="menuClick(index, id == 'roundMenuSwiper' ? 'alone' : 'combined')"
            >
                {{ item.name }}
                <template v-if="item.len === 0 || item.len">
                    {{ item.len }}
                </template>
            </li>
        </ul>
    </nav>
</template>
<style lang="sass"></style>
