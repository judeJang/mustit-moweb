<template>
    <!-- roundMenu - banner002 -->
    <!-- 골프, 키즈, 뷰티, 라이프 카테고리 총 4개 노출(고정)  -->
    <article class="category_home_direct self_module">
        <div class="banner_swiper swiper-container" :ref="id">
            <ul class="swiper-wrapper">
                <li
                    class="swiper-slide banner_box"
                    v-for="(item, index) in banner002Data"
                    :key="index"
                >
                    <a :href="item.link || '#'">
                        <span class="img">
                            <img :src="item.img" :alt="item.name" />
                        </span>
                        <p class="name">
                            {{ item.name | truncateText(15) }}
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    import { DIRECT_DATA } from '@/assets/js/dummy/categoryHomeDirect'
    export default {
        name: 'VCategoryBanner002',
        props: {
            id: { type: String, default: 'defaultSwiperId' }
        },
        data() {
            return {
                banner002Data: [...DIRECT_DATA],
                swiper: null
            }
        },
        filters: {
            truncateText: function (value, limit) {
                if (value.length > limit) {
                    return value.slice(0, limit) + '...'
                }
                return value
            }
        },
        methods: {
            initSwiper() {
                this.swiper = new Swiper(this.$refs[this.id], {
                    resizeObserver: true,
                    slidesPerView: 'auto',
                    freeMode: true
                })
            }
        },
        mounted() {
            this.initSwiper()
        }
    }
</script>
<style lang="scss" scoped></style>
