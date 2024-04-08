<!-- CategoryHomeView.vue -->
<template>
    <div class="category_home_container public_content" :class="bannerClasses">
        <SearchHeader :type="3" />
        <Banner001
            v-if="isBanner001"
            id="CategoryBanner001"
            data-module="CategoryBanner001"
        />
        <Banner002
            v-if="isBanner002"
            id="CategoryBanner002"
            data-module="CategoryBanner002"
        />

        <article class="category_container" :class="{ 'shadow': isShadow }">
            <CategoryMain
                ref="mainSwiper"
                :sections="sections"
                :active-slide="activeSlide"
                @update-shadow="handleShadow"
                @menu-click="handleMenuClick"
                @scroll-direction="handleScroll"
            />

            <CategorySub
                ref="subSwiper"
                :sections="sections"
                @update-shadow="handleShadow"
                @progress-update="handleActiveSlide"
                @scroll-direction="handleScroll"
            />
        </article>
        <SubBottom :scrollDirection="scrollDirection" />
    </div>
</template>

<script>
    import SearchHeader from '@/views/product/SearchHeader.vue'
    import SubBottom from '@/layouts/AppSubBottom.vue'
    import Banner001 from '@/modules/VCategoryBanner001.vue'
    import Banner002 from '@/modules/VCategoryBanner002.vue'
    import CategoryMain from '@/components/CategoryMain.vue'
    import CategorySub from '@/components/CategorySub.vue'
    import { CATEGORY_MENU_DATA } from '@/assets/js/dummy/categoryHomeMenu'

    function debounce(fn, delay) {
        let timeoutID = null
        return function () {
            clearTimeout(timeoutID)
            let args = arguments
            let context = this
            timeoutID = setTimeout(function () {
                fn.apply(context, args)
            }, delay)
        }
    }

    export default {
        components: {
            SearchHeader,
            SubBottom,
            Banner001,
            Banner002,
            CategoryMain,
            CategorySub
        },
        data() {
            return {
                sections: [...CATEGORY_MENU_DATA],
                activeSlide: 1,
                isShadow: null,
                scrollDirection: null,
                isBanner001: true, // 숏컷
                isBanner002: true // 바로가기
            }
        },
        computed: {
            bannerClasses() {
                if (!this.isBanner001 && !this.isBanner002) {
                    return { 'no_content': true }
                } else if (this.isBanner001 && this.isBanner002) {
                    return { 'default': true }
                } else {
                    return {
                        'no_direct': this.isBanner001,
                        'no_shortcut': this.isBanner002
                    }
                }
            }
        },
        methods: {
            handleMenuClick(slideId) {
                this.activeSlide = slideId
                this.$refs.mainSwiper.goToSlide(slideId - 1)
                this.$refs.subSwiper.goToSlide(slideId - 1)
                this.handleHaptic()
            },
            handleHaptic() {
                if ('vibrate' in navigator) {
                    navigator.vibrate(100)
                }
            },
            handleScroll(direction) {
                this.scrollDirection = direction
            },
            handleShadow(isVisible) {
                this.isShadow = isVisible
            },
            // handleActiveSlide에 디바운싱 적용
            handleActiveSlide: debounce(function (realIndex) {
                this.activeSlide = realIndex
                this.$refs.mainSwiper.goToSlide(realIndex - 1)
            }, 100) // 100ms 딜레이
            // handleActiveSlide(realIndex) {
            //     this.activeSlide = realIndex
            //     this.$refs.mainSwiper.goToSlide(realIndex - 1)
            // }
        },
        mounted() {
            document.body.classList.add('body-overflow-hidden')
        },
        beforeDestroy() {
            document.body.classList.remove('body-overflow-hidden')
        }
    }
</script>

<style scoped></style>
