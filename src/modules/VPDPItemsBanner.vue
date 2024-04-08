<template>
    <article class="PDP_items_banner self_module">
        <div class="swiper-container" ref="itemsBanner">
            <ul class="swiper-wrapper">
                <li v-for="(img, index) in data" :key="index" class="swiper-slide">
                    <img
                        :src="`${frontPath + img + rearPath}`"
                        :alt="brandName"
                        loading="lazy"
                        :style="`transform:translateY(${movePX}px)`"
                    />
                </li>
            </ul>
            <p class="paging">{{ curIndex }} / {{ total }}</p>
        </div>
        <!-- 타임세일 영역 -->
        <p class="time_sale_count" v-if="curIndex === 2">
            타임세일 남은시간
            <strong>
                <span class="time">23</span> <span>:</span> <span class="time">45</span>
                <span>:</span>
                <span class="time">38</span>
            </strong>
        </p>
        <!-- 할인기간 영역 -->
        <p class="discount_count" v-if="curIndex === 3">
            할인 기간이 <strong>&nbsp;12일 12시간 40분 53초&nbsp;</strong> 남았어요!
        </p>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    import { scrollRatio } from '@/assets/js/Common'

    export default {
        name: 'PDP_ITEMS_BANNER',
        props: {
            data: { type: Array, require: true }
        },
        data() {
            return {
                swiper: null,
                brandName: this.$parent.constBrandName,
                frontPath: 'https://cdn.mustit.co.kr/lib/upload/product/',
                rearPath: '/_dims_/resize/500x500/extent/500x500/strip/true',
                curIndex: 1,
                total: this.data.length,
                movePX: 0
            }
        },

        methods: {
            bannerMove() {
                const target = this.$refs.itemsBanner
                let ratio = scrollRatio(target)
                this.movePX = ratio * ((this.$refs.itemsBanner.clientHeight * 1) / 2)
            }
        },
        mounted() {
            const vm = this

            this.swiper = new Swiper(this.$refs.itemsBanner, {
                resizeObserver: true,
                observer: true,
                observeParents: true,
                lazy: true,
                loop: true,
                on: {
                    slideChange: function () {
                        vm.curIndex = this.realIndex + 1
                    }
                }
            })

            document.addEventListener('scroll', this.bannerMove)
        },
        destroyed() {
            this.swiper.destroy()
            document.removeEventListener('scroll', this.bannerMove)
        }
    }
</script>
