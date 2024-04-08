<template>
    <!-- 



     -->
    <section class="product_detail_area common_css">
        <SubHeader title="리뷰" />

        <!-- 리뷰 토탈정보-->
        <ProductReviewTotalInfoVue />

        <article class="member_review_area">
            <div class="review_alert">
                <p>같은 상품에 작성된 리뷰로, 판매자가 다를 수 있습니다.</p>
            </div>
            <!-- 리뷰 sorting -->
            <div class="reivew_tab_menu">
                <div class="check_box_container">
                    <BaseCheckboxBlack text="현재상품 리뷰만" />
                    <BaseCheckboxBlack text="포토 리뷰만" />
                </div>
                <div class="sort_select">
                    <p
                        class="sort_name"
                        :class="{ 'is_open': sortOpen }"
                        @click="sortOptionOpen"
                    >
                        {{ sortName }}
                    </p>
                    <ul class="option" v-if="sortOpen">
                        <li
                            v-for="(data, index) in sortBtnData"
                            :key="index"
                            :class="{ active: data.isActive }"
                            @click="optionClick(index)"
                        >
                            {{ data.name }}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 리뷰 리스트 -->
            <ProductReviewList type="member" />
        </article>
    </section>
</template>

<script>
    // import SubTopHeader from '@/components/SubTopHeader.vue'
    import SubHeader from '@/components/SubHeader.vue'
    import ProductReviewTotalInfoVue from '@/views/product/ProductReviewTotalInfo.vue'
    import ProductReviewList from '@/views/product/VReviewList.vue'
    import BaseCheckboxBlack from '@/components/BaseCheckboxBlack.vue'

    export default {
        components: {
            // SubTopHeader,
            SubHeader,
            ProductReviewTotalInfoVue,
            ProductReviewList,
            BaseCheckboxBlack
        },
        data() {
            return {
                headerName: [{ name: '리뷰' }],
                photoSelect: false,
                sortBtnData: [
                    { name: '최신순', isActive: true },
                    { name: '별점순', isActive: false },
                    { name: '추천순', isActive: false }
                ],
                sortName: '',
                sortOpen: false
            }
        },
        created() {
            this.sortBtnData.forEach((data) => {
                if (data.isActive) {
                    this.sortName = data.name
                }
            })
        },
        methods: {
            photoReview() {
                this.photoSelect = !this.photoSelect
            },
            selectSort(id) {
                this.sortBtnData.forEach((data) => {
                    data.isActive = false
                })
                this.sortBtnData[id].isActive = true
            },
            optionClick(index) {
                this.sortBtnData.forEach((data) => {
                    data.isActive = false
                })
                this.sortBtnData[index].isActive = true
                this.sortName = this.sortBtnData[index].name
                this.sortOpen = false
            },
            sortOptionOpen() {
                this.sortOpen = !this.sortOpen
            }
        }
    }
</script>

<style></style>
