<template>
    <section class="wishlist_content public_content">
        <SubHeader title="나의 관심 리스트" />
        <!-- page tab -->
        <nav class="page_tab">
            <button
                type="button"
                @click="pageTabClick(1)"
                :class="{ 'active': tabState === 'recently' }"
            >
                최근 본 상품
            </button>
            <button
                type="button"
                @click="pageTabClick(2)"
                :class="{ 'active': tabState === 'addToFavorites' }"
            >
                찜
            </button>
        </nav>
        <!-- 최근 본 상품 -->
        <RecentlyList v-if="tabState == 'recently'" />
        <!-- 찜 -->
        <AddToFavorite v-if="tabState == 'addToFavorites'" />
    </section>
</template>
<script>
    import SubHeader from '@/components/SubHeader.vue'
    import RecentlyList from '@/views/mypage/WishListRecentlyList.vue'
    import AddToFavorite from '@/views/mypage/WishListAddToFavorite.vue'
    export default {
        name: 'Wishlist',
        components: { SubHeader, RecentlyList, AddToFavorite },
        data() {
            return {
                tabState: 'recently'
            }
        },
        beforeMount() {
            //찜 url로 보려할때
            if (this.$route.query['zzim'] === 'true') {
                this.tabState = 'addToFavorites'
            }
        },
        methods: {
            pageTabClick(idx) {
                if (idx == 1) {
                    this.tabState = 'recently'
                } else if (idx == 2) {
                    this.tabState = 'addToFavorites'
                }
            }
        }
    }
</script>
