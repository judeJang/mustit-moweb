<template>
    <section class="public_content">
        <SubHeader
            :title="headerTitle"
            :fadeTarget="headerFadeTarget"
            :type="headerType"
        />

        <template v-if="curMode == 'LP'">
            <ListCategory />
            <div class="divider f5_bg" @click="hasData = !hasData"></div>
            <VCategoryRecommand />
        </template>

        <article
            class="test_banner"
            v-if="curMode == 'BLP'"
            data-brand="Nike"
            ref="banner"
        ></article>
        <VListFilter />
        <template v-if="hasData">
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
            <article class="test_list_container">더미 list 영역</article>
        </template>
        <ListNodata v-else :type="2" />
    </section>
</template>
<script>
    import SubHeader from '@/components/SubHeader.vue'
    import VListFilter from '@/views/product/VListFilter.vue'
    import ListCategory from '@/components/ListCategory.vue'
    import ListNodata from '@/components/ListNodata.vue'
    import VCategoryRecommand from '@/components/VCategoryRecommand.vue'
    import ListSortHeader from '@/views/product/VSearchSort.vue'
    export default {
        components: {
            VListFilter,
            SubHeader,
            ListNodata,
            ListSortHeader,
            ListCategory,
            VCategoryRecommand
        },
        data() {
            return {
                params: this.$route.params.list,
                curMode: 'LP',
                menuArray: [
                    { name: 'LP나이키', isActive: true },
                    { name: '아디다스', isActive: false },
                    { name: '리복', isActive: false }
                ],
                headerType: 4,
                headerTitle: '',
                headerFadeTarget: '',
                hasData: true,
                premiumPopup: false
            }
        },

        beforeMount() {
            if (this.params == '_blp') {
                this.curMode = 'BLP'
                this.headerTitle = 'BLP 나이키'
                this.headerType = 5
                this.headerFadeTarget = 'banner'
            } else {
                this.curMode = 'LP'
                this.headerType = 4
                this.headerTitle = this.menuArray
            }
        }
    }
</script>
<style lang="scss" scoped>
    .public_content {
        min-height: 100vh;
        background: #fff;
    }
    .test_list_container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200vh;
        background: linear-gradient(
            184deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(9, 9, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
        );
        font-size: 20px;
        color: $black;
    }
    .test_banner {
        display: flex;
        width: 100%;
        height: 55.5555vw;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
        // margin-left: -16px;
        background-image: url(https://cdn.mustit.co.kr/lib/upload/home/brand_banner/2021/07/17e8471b8af707fac0c3a9f34003dd5a.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
        &::after {
            content: attr(data-brand);
            font-size: 22px;
            color: $white;
            font-weight: $fw-bold;
        }
    }
</style>
