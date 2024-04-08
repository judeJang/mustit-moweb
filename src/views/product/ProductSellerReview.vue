<template>
    <section class="product_detail_area common_css">
        <SubHeader title="판매자 리뷰" />
        <!-- <SubTopHeader :data="headerName" :isDropState="false" :rightShow="false" /> -->
        <article class="member_review_area">
            <!-- 검색 -->
            <div class="filter_container">
                <div class="search_filter">
                    <form>
                        <input
                            type="text"
                            name="search_keyword"
                            placeholder="브랜드, 카테고리, 상품명으로 검색"
                            :value="inputText"
                            autofocus
                            autocomplete="off"
                            @input="changeInput($event)"
                        />
                        <button
                            type="button"
                            class="clear_btn"
                            v-if="!inputEmpty"
                            @click="textClear()"
                        ></button>
                        <button type="button" class="search_btn"></button>
                    </form>
                </div>
            </div>

            <!-- 리뷰 sorting -->
            <div class="reivew_tab_menu">
                <span
                    class="reivew_tab_menu__photo"
                    @click="photoReview"
                    :class="{ 'photo_reivew_on': photoSelect }"
                    >포토리뷰만</span
                >
                <span class="reivew_tab_menu__list_type">
                    <span
                        class="reivew_tab_menu__btn_box"
                        v-for="(button, index) in sortBtnData"
                        :key="button.name"
                    >
                        <button
                            type="button"
                            class="reivew_tab_menu__btn"
                            :class="{ 'btn_on': button.isActive }"
                            @click="selectSort(index)"
                        >
                            {{ button.name }}
                        </button>
                    </span>
                </span>
            </div>

            <ProductReviewList type="seller" v-if="!dataEmpty" />

            <div class="empty_result" v-else>
                <i class="icon"></i>
                <p>{{ emptyText }}</p>
            </div>
        </article>
    </section>
</template>

<script>
    import SubHeader from '@/components/SubHeader.vue'
    import ProductReviewList from '@/views/product/VReviewList.vue'
    export default {
        name: 'ProductSellerReview',
        components: {
            SubHeader,
            ProductReviewList
        },
        data() {
            return {
                headerName: [{ name: '판매자 리뷰' }],
                inputText: '',
                inputEmpty: true,
                photoSelect: false,
                sortBtnData: [
                    { name: '최신순', isActive: true },
                    { name: '별점순', isActive: false }
                ],
                dataEmpty: false,
                emptyText: '검색된 리뷰가 없습니다. '
            }
        },

        mounted() {},

        methods: {
            changeInput(e) {
                let value = e.target.value
                this.inputText = value
                if (value == '') {
                    this.inputEmpty = true
                } else {
                    this.inputEmpty = false
                }
            },
            textClear() {
                this.inputText = ''
            },
            photoReview() {
                this.photoSelect = !this.photoSelect
                if (this.photoSelect) {
                    this.dataEmpty = true
                    this.emptyText = '등록된 포토리뷰가 없습니다.'
                } else {
                    this.dataEmpty = false
                }
            },
            selectSort(id) {
                this.sortBtnData.forEach((data) => {
                    data.isActive = false
                })
                this.sortBtnData[id].isActive = true

                if (id == 1) {
                    this.dataEmpty = true
                    this.emptyText = '검색된 리뷰가 없습니다.'
                } else {
                    this.dataEmpty = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped></style>
