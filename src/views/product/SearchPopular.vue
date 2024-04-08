<template>
    <article class="search_popular">
        <div class="search_title_area">
            <h3 class="title">인기 검색어</h3>
            <span class="date">2024.01.22 기준</span>
        </div>
        <div class="swiper popular_swiper" ref="popularList">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(list, id) in popularTerms" :key="id">
                    <ul class="search_popular_list">
                        <li
                            class="search_term"
                            v-for="(term, index) in list"
                            :key="index"
                        >
                            <a href="#" class="text_box">
                                <span class="rank" :class="{ primary: hasBold(id, index) }">{{ orderNum(id, index) }}</span>
                                <strong class="text">{{ term }}</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="swiper-pagination" ref="popularPaging"></div>
        </div>
    </article>
</template>

<script>
    import { popularTerm } from '@/assets/js/dummy/SearchTermData'

    import Swiper from 'swiper'

    export default {
        data() {
            return {
                popularTerms: [],
                swiper: null
            }
        },
        created() {
            this.popularTerms = this.sliceData(popularTerm, 10)
        },
        mounted() {
            if (this.popularTerms.length > 1) {
                this.swiper = new Swiper(this.$refs.popularList, {
                    slidesPerView: 'auto',
                    speed: 500,
                    resizeObserver: true,
                    followFinger: false,
                    observer: true,
                    observeParents: true,
                    pagination: {
                        el: this.$refs.popularPaging,
                        clickable: true
                    }
                })
            }
        },
        methods: {
            sliceData: function (array, chunkSize) {
                var result = []
                for (var i = 0; i < array.length; i += chunkSize) {
                    result.push(array.slice(i, i + chunkSize))
                }
                return result
            },
            orderNum(ten, single) {
                if (ten > 0) {
                    ten *= 10
                }
                return ten + (single + 1)
            },
            hasBold(id, bid) {
                const value = id == 0 && bid < 3 ? true : false
                return value
            }
        }
    }
</script>
