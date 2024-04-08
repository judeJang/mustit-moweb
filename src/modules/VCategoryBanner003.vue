<template>
    <!-- roundMenu - banner003 -->
    <!-- CPP 상단 빅배너 4개 랜덤노출   -->
    <article class="category_home_big_banner self_module">
        <div class="big_banner_container">
            <a
                :href="banner.link || '#'"
                class="menu"
                v-for="banner in banner003Data"
                :key="banner.name"
            >
                <div class="img_wrap">
                    <img :src="banner.img" :alt="banner.name" />
                </div>
                <p class="name">{{ banner.name }}</p>
            </a>
        </div>
    </article>
</template>

<script>
    import { BIG_BANNER_DATA } from '@/assets/js/dummy/categoryHomeBigBanner'
    export default {
        name: 'VCategoryBanner003',
        props: {
            id: { type: String, default: 'defaultBigBanner' }
        },
        data() {
            return {
                banner003Data: [...BIG_BANNER_DATA]
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>
~/src/assets/js/dummy/categoryHomeBigBanner