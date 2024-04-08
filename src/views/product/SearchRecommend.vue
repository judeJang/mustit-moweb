<template>
    <article class="search_recommend">
        <div class="search_title_area">
            <h3 class="title">
                추천 검색어
                <button type="button" class="tooltip" @click.stop="toggleTooltip">
                    <i class="question_icon" :class="{ active: tooltipShow }"></i>
                </button>
                <p
                    class="tooltip_box"
                    :class="{ active: tooltipShow }"
                    :style="tooltipStyle"
                >
                    트렌드 제안을 위해 추천합니다.
                </p>
            </h3>
        </div>

        <div class="swiper" ref="recommendList">
            <div class="swiper-wrapper recommend_list">
                <a
                    href="#"
                    class="swiper-slide recommend_keyword"
                    v-for="(term, index) in recommendData"
                    :key="index"
                >
                    {{ term | truncateText }}
                </a>
            </div>
        </div>
    </article>
</template>

<script>
    import { recommendData } from '@/assets/js/dummy/SearchTermData'

    import Swiper from 'swiper'

    export default {
        data() {
            return {
                recommendData: [...recommendData],
                swiper: null,
                tooltipShow: false,
                tooltipStyle: ''
            }
        },
        filters: {
            truncateText: function (value) {
                if (value.length > 15) {
                    return value.slice(0, 15) + '...'
                }
                return value
            }
        },
        mounted() {
            if (this.recommendData.length > 0) {
                this.swiper = new Swiper(this.$refs.recommendList, {
                    resizeObserver: true,
                    slidesPerView: 'auto',
                    freeMode: true
                })
            }

            document.body.addEventListener('click', (e) => {
                e.preventDefault()
                this.tooltipShow = false
            })
        },
        methods: {
            toggleTooltip: function (e) {
                const X = e.target.offsetLeft
                const Y = e.target.offsetTop
                this.tooltipPosition(X, Y)

                this.tooltipShow = !this.tooltipShow
            },
            tooltipPosition: function (x, y) {
                this.tooltipStyle = `left:${x + 24}px;top:${y - 8}px`
            }
        }
    }
</script>
