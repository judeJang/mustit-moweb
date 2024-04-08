<template>
    <div class="lp_content public_content">
        <OutletHeader :count="1" :type="2" />
        <template v-if="hasData">
            <SearchRelateKeyword />
            <div
                class="divider f5_bg"
                @click="
                    hasData = !hasData
                    searchTerm = 'fdks'
                "
            ></div>
            <VListFilter :outletSearch="true" />
            <ListSortHeader />
            <div class="premium_info">
                <div class="premium_info__container">
                    <span class="premium_info__text"> 프리미엄 상품 AD </span>
                    <button class="btn_premium_popup" @click="premiumPopup = true">
                        <i class="question_icon" :class="{ active: premiumPopup }"></i>
                    </button>
                </div>
                <div class="premium_info__popup" :class="{ active: premiumPopup }">
                    프리미엄 광고를 구매한 판매자의 상품으로 상품의 판매실적(판매량,
                    판매금액), 리뷰수 등을 점수화하여 전시됩니다.
                </div>
                <div
                    class="sort_container_transition"
                    :class="{ active: premiumPopup }"
                    @click="premiumPopup = false"
                ></div>
            </div>
            <article class="product_list_box">
                <div class="list">
                    <LpList
                        v-for="index in 8"
                        :key="index"
                        :className="index % 2 == 0 ? 'even' : 'odd'"
                        :zzimShow="true"
                        :outletShow="false"
                    />
                </div>
            </article>
        </template>
        <ListNodata v-else :type="1" />
    </div>
</template>

<script>
    import OutletHeader from '@/components/OutletHeader.vue'
    import ListNodata from '@/components/ListNodata.vue'
    import VListFilter from '@/views/product/VListFilter.vue'
    import SearchRelateKeyword from '@/views/product/VSearchRelateKeyword.vue'
    import LpList from '@/components/LpList.vue'
    import ListSortHeader from '@/views/product/VSearchSort.vue'
    export default {
        components: {
            LpList,
            ListSortHeader,
            VListFilter,
            OutletHeader,
            SearchRelateKeyword,
            ListNodata
        },
        data() {
            return {
                premiumPopup: false,
                menuObj: [{ name: '여성의류' }],
                hasData: true
            }
        }
    }
</script>

<style>
    .lp_content {
        min-height: 100vh;
        background: #fff;
    }
</style>
