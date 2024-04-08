<template>
    <article class="search_rise">
        <div class="search_title_area">
            <h3 class="title">급상승 검색어</h3>
            <span class="date">2024.01.31 06:00 기준</span>
        </div>

        <div class="search_rise_list">
            <a href="#" class="search_term" v-for="(term, index) in riseTerms" :key="index">
                <strong class="text">
                    {{ term | truncateText }}
                </strong>
            </a>
        </div>
    </article>
</template>

<script>
    import { riseData } from '@/assets/js/dummy/SearchTermData'

    export default {
        data() {
            return {
                riseTerms: [...riseData],
                swiper: null
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
            console.log(this.riseTerms)
        },
    }
</script>
