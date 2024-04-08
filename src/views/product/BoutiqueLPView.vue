<template>
    <section class="public_content lp_content">
        <SubHeader :title="menuObj" :type="4" />
        <article>
            <div class="test_search"></div>
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
                    />
                </div>
            </article>
        </article>
    </section>
</template>
<script>
    import SubHeader from '@/components/SubHeader.vue'
    import VListFilter from '@/views/product/VListFilter.vue'
    import LpList from '@/components/LpList.vue'
    import ListSortHeader from '@/views/product/VSearchSort.vue'
    export default {
        components: { SubHeader, VListFilter, LpList, ListSortHeader },
        data() {
            return {
                menuObj: [{ name: '여성의류' }],
                premiumPopup: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    .test_search {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin-left: -16px;
        width: calc(100% + 32px);
        height: 142px;
        background-color: $gray2;
        &::before {
            content: 'search 영역';
            font-size: 14px;
            color: $white;
        }
    }
</style>
