<template>
    <section class="lp_content public_content">
        <SearchHeader :type="2" />
        <template v-if="hasData">
            <SearchRelateKeyword />
            <div class="divider f5_bg" @click="hasData = !hasData"></div>
            <VListFilter />
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
                        v-for="index in 3"
                        :key="index"
                        :className="index % 2 == 0 ? 'even' : 'odd'"
                        :zzimShow="true"
                        :outletShow="true"
                    />
                </div>
            </article>
            <div class="premium_info">
                <div class="premium_info__container">
                    <span class="premium_info__text"> 일반 상품 </span>
                </div>
            </div>
            <article class="product_list_box">
                <div class="list">
                    <LpList
                        v-for="index in 12"
                        :key="index"
                        :className="index % 2 == 0 ? 'even' : 'odd'"
                        :zzimShow="true"
                        :outletShow="index % 3 == 1 ? true : false"
                    />
                </div>
            </article>
        </template>
        <template v-else>
            <ListNodata :type="1" />
            <div class="divider f5_bg" @click="hasData = !hasData"></div>
            <MainTitle
                title="검색어 관련 추천상품"
                link="#"
                :allView="false"
                :bg="true"
            />
            <SmallProduct id="smallProduct2" />
        </template>
    </section>
</template>
<script>
    import SearchHeader from '@/views/product/SearchHeader.vue'
    import LpList from '@/components/LpList.vue'
    import ListNodata from '@/components/ListNodata.vue'
    import ListSortHeader from '@/views/product/VSearchSort.vue'
    import VListFilter from '@/views/product/VListFilter.vue'
    import SearchRelateKeyword from '@/views/product/VSearchRelateKeyword.vue'
    import MainTitle from '@/modules/VHomeTitle.vue'
    import SmallProduct from '@/modules/VFreeSwiper.vue'
    export default {
        components: {
            LpList,
            ListSortHeader,
            VListFilter,
            SearchRelateKeyword,
            SearchHeader,
            ListNodata,
            MainTitle,
            SmallProduct
        },
        data() {
            return {
                premiumPopup: false,
                hasData: true
            }
        }
    }
</script>
<style scoped></style>
