<template>
    <!-- roundMenu - banner001 -->
    <!-- 위켄드세일, 브랜드셀렉션, 매거진, 리뷰, 깜짝배송, 무료반품, 사전케어, 사후케어 노출  -->
    <article class="category_home_shortcut self_module">
        <div class="banner_swiper swiper-container" :ref="id">
            <ul class="swiper-wrapper">
                <li
                    :class="{ new: item.isNew}"
                    class="swiper-slide banner_box"
                    v-for="(item, index) in banner001Data"
                    :key="index"
                >
                    <a :href="item.link || '#'">
                        <span class="img">
                            <img :src="item.img" :alt="item.name" />
                        </span>
                        <p class="name">{{ item.name }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    import { SHORTCUT_DATA } from '@/assets/js/dummy/categoryHomeShortcut'
    export default {
        name: 'VCategoryBanner001',
        props: {
            id: { type: String, default: 'defaultSwiperId' }
        },
        data() {
            return {
                banner001Data: [...SHORTCUT_DATA]
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
