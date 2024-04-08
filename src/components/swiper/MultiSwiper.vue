<template>
    <div ref="parentSwiperObj" class="parent_swiper swiper-container">
        <ul class="swiper-wrapper">
            <li
                class="parent_swiper__slide swiper-slide"
                v-for="(list, index) in dataArray"
                :key="`parent_${list.name}`"
            >
                <div
                    class="child_swiper swiper-container"
                    :ref="`childSwiperObj_${index}`"
                >
                    <ul class="swiper-wrapper">
                        <li
                            class="child_swiper__slide swiper-slide"
                            v-for="(child, index2) in childrenArray[index]"
                            :key="`child_${index2}`"
                        >
                            <ul class="child_swiper__lists">
                                <li
                                    class="child_swiper__list"
                                    v-for="index3 in 4"
                                    :key="`item_${index3}`"
                                    v-show="target == 'mainCategory'"
                                >
                                    <Item />
                                </li>
                                <li
                                    class="child_swiper__list"
                                    v-for="index3 in 6"
                                    :key="`item2_${index3}`"
                                    v-show="target == 'mainRanking'"
                                >
                                    <a
                                        class="comp_three_item"
                                        href="#"
                                        v-if="target == 'mainRanking'"
                                    >
                                        <div
                                            class="img_wrap"
                                            :data-rank="index2 * 6 + index3"
                                        >
                                            <img
                                                src="https://cdn.mustit.co.kr/lib/upload/home/brand_pick/2021/09/c1a627de9da37e638c1795cff6bb1c61.jpeg"
                                                alt="product"
                                                class="cover_img"
                                            />
                                        </div>
                                        <div class="info_container">
                                            <p class="brand">Nike</p>
                                            <div class="price">
                                                <p class="discount_price">189,000</p>
                                                <p class="discount">64%</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="swiper-pagination" :ref="`childPaging_${index}`"></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import EventBus from '@/assets/js/EventBus'
    import Item from '@/components/BaseGalleryItem.vue'

    export default {
        components: {
            Item
        },
        props: {
            dataArray: Array,
            childrenArray: Array,
            isRanking: Boolean,
            target: String
        },
        data() {
            return {
                parentSwiper: null,
                childSwiperArray: [],
                childSwiperOption: {}
            }
        },
        mounted() {
            const _this = this
            this.parentSwiper = new Swiper(this.$refs.parentSwiperObj, {
                speed: 500,
                resizeObserver: true,
                followFinger: false,
                observer: true,
                observeParents: true
            })
            if (_this.target == 'mainCategory') {
                EventBus.$emit('cParentSwiper', this.parentSwiper)
            } else if (_this.target == 'mainRanking') {
                EventBus.$emit('rParentSwiper', this.parentSwiper)
            }

            this.parentSwiper.on('slideChangeTransitionStart', function () {
                let id = this.realIndex
                if (_this.target == 'mainCategory') {
                    EventBus.$emit('cMultiChange', id)
                } else if (_this.target == 'mainRanking') {
                    EventBus.$emit('rMultiChange', id)
                }
            })
            for (let i in this.dataArray) {
                this.childSwiperArray[i] = new Swiper(this.$refs[`childSwiperObj_${i}`], {
                    speed: 500,
                    resizeObserver: true,
                    followFinger: false,
                    touchReleaseOnEdges: true,
                    slidesPerView: 1,
                    observer: true,
                    observeParents: true,
                    pagination: {
                        el: this.$refs[`childPaging_${i}`],
                        clickable: true
                    }
                })
                this.childSwiperArray[i].on('slideNextTransitionStart', function () {
                    let id = _this.parentSwiper.realIndex
                    if (_this.target == 'mainCategory') {
                        EventBus.$emit('categorySwiperChange', id, 'next')
                    } else if (_this.target == 'mainRanking') {
                        EventBus.$emit('rankingSwiperChange', id, 'next')
                    }
                })
                this.childSwiperArray[i].on('slidePrevTransitionStart', function () {
                    let id = _this.parentSwiper.realIndex
                    if (_this.target == 'mainCategory') {
                        EventBus.$emit('categorySwiperChange', id, 'prev')
                    } else if (_this.target == 'mainRanking') {
                        EventBus.$emit('rankingSwiperChange', id, 'prev')
                    }
                })
            }
            if (_this.target == 'mainCategory') {
                EventBus.$emit('cChildSwiper', this.childSwiperArray)
            } else if (_this.target == 'mainRanking') {
                EventBus.$emit('rChildSwiper', this.childSwiperArray)
            }
        }
    }
</script>
