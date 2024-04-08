<template>
    <!-- Product_cate002, Product_cate003 공통 -->
    <article>
        <TitleArea :subTitle="subTitle" :title="title" />
        <!-- roundMenu -->
        <!-- TabListModule -->
        <nav class="comp_menu_swiper swiper-container" :ref="id">
            <ul class="swiper-wrapper">
                <li
                    class="swiper-slide"
                    :class="{ active: item.isActive }"
                    v-for="(item, index) in categoryBestArray"
                    :key="item.name"
                    @click="clickMenu(index)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </nav>
        <!-- //TabListModule -->
        <hr
            class="divider self_module"
            style="background-color: #ffffff; height: 20px; border: 0; margin: 0"
        />
        <div class="product_cate_list self_module">
            <!-- MultiSwiper -->
            <div ref="parentSwiperObj" class="parent_swiper swiper-container">
                <ul class="swiper-wrapper">
                    <li
                        class="parent_swiper__slide swiper-slide"
                        v-for="(list, index) in categoryBestArray"
                        :key="`parent_${list.name}`"
                    >
                        <div
                            class="child_swiper swiper-container"
                            :ref="`childSwiperObj_${index}`"
                        >
                            <ul class="swiper-wrapper">
                                <li
                                    class="child_swiper__slide swiper-slide"
                                    v-for="(child, index2) in categoryChildArray[index]"
                                    :key="`child_${index2}`"
                                >
                                    <ul class="child_swiper__lists">
                                        <li
                                            class="child_swiper__list"
                                            v-for="index3 in 4"
                                            :key="`item_${index3}`"
                                        >
                                            <Item />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div
                                class="swiper-pagination"
                                :ref="`childPaging_${index}`"
                            ></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    import Item from '@/components/BaseGalleryItem.vue'
    import TitleArea from '@/modules/VTitleArea.vue'

    export default {
        name: 'VOutletProductCate002',
        components: { Item, TitleArea },
        props: {
            title: { type: String, default: '' },
            subTitle: { type: String, default: '' },
            categoryBestArray: {
                type: Array,
                default() {
                    return [
                        { name: 'Clothing', isActive: true },
                        { name: 'Shoes', isActive: false },
                        { name: 'Bag', isActive: false },
                        { name: 'Acc', isActive: false },
                        { name: 'Cap', isActive: false },
                        { name: 'Test', isActive: false }
                    ]
                }
            },
            categoryChildArray: {
                type: Array,
                default() {
                    return [5, 3, 2, 5, 2, 3, 2]
                }
            }
        },
        data() {
            return {
                id: 'swiper',
                categoryMenuSwiper: null,
                categoryParentSwiper: null,
                childSwiperArray: [],
                menuSwiperWidth: 0
            }
        },
        methods: {
            activeMenu(id) {
                for (let value of this.categoryBestArray) {
                    value.isActive = false
                }
                if (!this.categoryMenuSwiper.destroyed) {
                    if (id < 3) this.categoryMenuSwiper.slideTo(0)
                    if (id > 2) this.categoryMenuSwiper.slideTo(id)
                }
                this.categoryBestArray[id].isActive = true
            },
            clickMenu(id) {
                this.activeMenu(id)
                this.categoryParentSwiper.slideTo(id, 500)
                this.childSwiperArray[id].slideTo(0, 0)
            }
        },
        mounted() {
            this.categoryMenuSwiper = new Swiper(this.$refs[this.id], {
                speed: 500,
                slidesPerView: 'auto',
                resizeObserver: true,
                observeParents: true,
                observeSlideChildren: true,
                observe: true,
                centeredSlides: true,
                centeredSlidesBounds: true,
                freeMode: true,
                watchOverflow: true
            })

            this.categoryParentSwiper = new Swiper(this.$refs.parentSwiperObj, {
                speed: 500,
                resizeObserver: true,
                followFinger: false,
                observer: true,
                observeParents: true
            })

            const _this = this
            this.categoryParentSwiper.on('slideChangeTransitionStart', function () {
                let id = this.realIndex
                _this.activeMenu(id)
            })

            for (let i in this.categoryChildArray) {
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
            }

            Array.from(this.categoryMenuSwiper.slides).forEach((el, i) => {
                this.menuSwiperWidth =
                    this.menuSwiperWidth + el.getBoundingClientRect().width + 6 * (i - 1)
            })
            if (this.menuSwiperWidth + 32 < this.categoryMenuSwiper.width) {
                this.categoryMenuSwiper.destroy()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .comp_menu_swiper {
        padding-bottom: 0;
    }
</style>
