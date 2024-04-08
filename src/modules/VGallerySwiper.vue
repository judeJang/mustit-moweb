<script>
    import Swiper from 'swiper'
    import GalleryItem from '@/components/BaseGalleryItem.vue'

    export default {
        name: 'Gallery',
        components: {
            GalleryItem
        },
        props: {
            id: { type: String, default: '' }
        },
        data() {
            return {
                swiper: null,
                listLength: 10,
                imgPath:
                    'https://cdn.mustit.co.kr/lib/upload/home/category_best/2022/03/2e830260be3809feb6bc169e16cb7ee0.jpeg'
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs[this.id], {
                speed: 500,
                resizeObserver: true,
                followFinger: false,
                touchReleaseOnEdges: true,
                slidesPerView: 1,
                observer: true,
                observeParents: true,
                pagination: {
                    el: this.$refs.categoryBestPaging,
                    clickable: true
                }
            })
        }
    }
</script>
<template>
    <article class="category_best">
        <div class="child_swiper swiper-container" :ref="id">
            <ul class="swiper-wrapper">
                <li
                    class="child_swiper__slide swiper-slide"
                    v-for="one in listLength"
                    :key="one"
                >
                    <ul class="child_swiper__lists">
                        <li class="child_swiper__list" v-for="two in 4" :key="two">
                            <GalleryItem />
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="swiper-pagination" ref="categoryBestPaging"></div>
        </div>
    </article>
</template>
