<template>
    <article class="search_recent">
        <div class="search_title_area">
            <h3 class="title">최근 검색어</h3>
            <button
                type="button"
                class="btn_delete_all"
                v-if="recentTerms.length > 0"
                @click="clearRecentTerms()"
            >
                전체 삭제
            </button>
        </div>
        <!-- list 존재 할 경우 -->
        <template v-if="recentTerms.length > 0">
            <!-- 통합 검색 창 -->
            <ul class="search_recent_list_gray" v-if="isSearchPage">
                <li
                    class="search_term"
                    v-for="(term, index) in recentTerms"
                    :key="index"
                >
                    <a href="#" class="text">{{ term | truncateText }}</a>
                    <button type="button" class="btn_delete">
                        <i class="icon_delete"></i>
                        <span class="blind">최근 검색어 삭제</span>
                    </button>
                </li>
            </ul>
            <!-- 아울렛 검색 창 -->
            <ul class="search_recent_list" v-else>
                <li class="search_term" v-for="(term, index) in recentTerms" :key="index">
                    <a href="#" class="text">{{ term | truncateText }}</a>
                    <button type="button" class="btn_delete">
                        <i class="icon_delete"></i>
                        <span class="blind">최근 검색어 삭제</span>
                    </button>
                </li>
            </ul>
        </template>

        <!-- list 없을 경우 -->
        <div class="search_recent_list" v-else>
            <div class="search_recent_nodata" @click="clickNoData">
                최근 검색어가 없습니다.
            </div>
        </div>
    </article>
</template>

<script>
    import { recentTerm } from '@/assets/js/dummy/SearchTermData'

    import Swiper from 'swiper'

    export default {
        data() {
            return {
                recentTerms: [...recentTerm.slice(0, 10)],
                isSearchPage: false
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
        created() {
            //page 위치 true:검색 false: outlet검색
            this.isSearchPage = this.$route.path == '/product/search' ? true : false
            console.log(this.isSearchPage)
        },
        mounted() {
            if (this.img !== '') this.imgPath = this.img
        },
        methods: {
            clearRecentTerms() {
                this.recentTerms = []
            },
            deleteTerm(text) {
                this.recentTerms = this.recentTerms.filter((term) => term != text)
            },
            clickNoData() {
                this.recentTerms = [...recentTerm.slice(0, 10)]
            }
        }
    }
</script>
