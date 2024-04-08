<template>
    <nav class="hotdeal_category" :ref="id">
        <div class="swiper-wrapper">
            <button
                type="button"
                :class="['swiper-slide', 'category', { active: category.isActive }]"
                v-for="(category, i) in categories"
                :key="category.name"
                @click="clickCategory(category, i)"
            >
                {{ category.name }}
            </button>
        </div>
    </nav>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        props: {
            id: { type: String, default: 'hotdealCategory' }
        },
        data() {
            return {
                categories: [
                    { name: '전체', isActive: true },
                    { name: '의류', isActive: false },
                    { name: '신발', isActive: false },
                    { name: '가방', isActive: false },
                    { name: '액세서리', isActive: false },
                    { name: '키즈', isActive: false },
                    { name: '라이프', isActive: false }
                ],
                activeTab: 0,
                swiper: null
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs[this.id], {
                speed: 500,
                slidesPerView: 'auto',
                resizeObserver: true,
                observer: true,
                observeParents: true,
                freeMode: true
            })
        },
        methods: {
            clickCategory(category, i) {
                this.categories.forEach((e) => {
                    e.isActive = false
                })
                category.isActive = true
                if (i >= 3) this.swiper.slideTo(i)
                if (i < 3) this.swiper.slideTo(0)
            }
        }
    }
</script>
