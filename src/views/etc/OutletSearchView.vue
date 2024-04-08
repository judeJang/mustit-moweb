<template>
    <div class="public_content">
        <!-- header -->
        <OutletSearchHeader :searchText="searchText" />
        <div class="search_content">
            <template v-if="searchText.length == 0">
                <!-- 최근 검색어 -->
                <SearchRecent />
            </template>
            <!-- 검색어 입력시 -->
            <SearchTermList
                v-if="searchText.length > 0"
                :searchText="searchText"
                :type="2"
            />
        </div>
    </div>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    import OutletSearchHeader from '@/components/OutletSearchHeader.vue'
    import SearchRecent from '@/views/product/SearchRecent.vue'
    import SearchTermList from '@/views/product/SearchTermList.vue'
    export default {
        components: { OutletSearchHeader, SearchRecent, SearchTermList },
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
        }
    }
</script>

<style scoped>
    /* mustit-ux 전용 */
    .search_content {
        height: calc(100vh - 56px);
    }
</style>
