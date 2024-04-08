<template>
    <div class="public_content">
        <!-- header -->
        <SearchHeader :searchText="searchText" :type="1" />

        <div class="search_content">
            <template v-if="searchText.length == 0">
                <!-- 최근 검색어 -->
                <SearchRecent />
                <!-- 추천 검색어 -->
                <SearchRecommend />
                <!-- 인기검색어 -->
                <SearchPopular />
                <!-- 급상승 검색어 -->
                <SearchRise />
            </template>
            <!-- 검색어 입력시 -->
            <SearchTermList v-if="searchText.length > 0" :searchText="searchText" />
        </div>
    </div>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    import SearchHeader from '@/views/product/SearchHeader.vue'
    import SearchRecent from '@/views/product/SearchRecent.vue'
    import SearchRecommend from '@/views/product/SearchRecommend.vue'
    import SearchPopular from '@/views/product/SearchPopular.vue'
    import SearchRise from '@/views/product/SearchRise.vue'
    import SearchTermList from '@/views/product/SearchTermList.vue'
    export default {
        components: {
            SearchHeader,
            SearchRecent,
            SearchPopular,
            SearchTermList,
            SearchRecommend,
            SearchRise
        },
        data() {
            return {
                searchText: '',
                hasSearchValue: false
            }
        },
        created() {
            EventBus.$on('changeSearchText', (val) => {
                this.searchText = val
            })
        },
        beforeDestroy() {
            EventBus.$off('changeSearchText')
        },
        mounted() {
            window.addEventListener('touchmove touchstart touchend', function (e) {
                console.log(e.type)
                console.log('손가락이 화면 위에서 움직였습니다.')
            })
        }
    }
</script>
<style>
    html,
    body {
        background: white;
    }
</style>
