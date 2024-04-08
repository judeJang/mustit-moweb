<template>
    <article class="product_review_area">
        <div class="review_score_header">
            <div class="review_score_header__inner_box">
                <div class="module_star_point size_24">
                    <span class="star score_10">
                        <i class="comp_icon_star_24"></i>
                    </span>
                    <span class="star score_10">
                        <i class="comp_icon_star_24"></i>
                    </span>
                    <span class="star score_10">
                        <i class="comp_icon_star_24"></i>
                    </span>
                    <span class="star score_10">
                        <i class="comp_icon_star_24"></i>
                    </span>
                    <span class="star score_5">
                        <i class="comp_icon_star_24"></i>
                    </span>
                </div>
                <span class="review_score_header__num_txt">4.5</span>
            </div>
            <div class="review_score_header__review_num">상품리뷰 (1,532)</div>
        </div>
        <div class="review_score_detail">
            <div class="review_score_detail__inner_box" :class="{ 'score_on': viewMore }">
                <dl v-for="list in grapthData" :key="list.title">
                    <dt>{{ list.title }}</dt>
                    <dd
                        v-for="item in list.data"
                        :key="item.name"
                        :class="{ 'on_box': item.isMax }"
                    >
                        <span class="review_score_detail__txt">{{ item.name }}</span>
                        <span class="review_score_detail__progress_box">
                            <progress
                                class="review_score_detail__progress_bar"
                                :value="item.value"
                                max="100"
                            ></progress>
                        </span>

                        <span class="review_score_detail__percent"
                            >{{ item.value }}%</span
                        >
                    </dd>
                </dl>
            </div>
            <div class="review_score_detail__btn_more" @click="viewMoreBtn()">
                {{ viewMoreTxt }}
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'ProductReviewInfo',

        data() {
            return {
                viewMoreTxt: '자세히 보기',
                viewMore: false,
                grapthData: [
                    {
                        title: '사이즈',
                        data: [
                            { name: '생각보다 커요', value: 15, isMax: false },
                            { name: '정사이즈에요', value: 70, isMax: true },
                            { name: '생각보다 작아요', value: 27, isMax: false }
                        ]
                    },
                    {
                        title: '핏',
                        data: [
                            { name: '오버핏이에요', value: 15, isMax: false },
                            { name: '적당해요', value: 58, isMax: true },
                            { name: '슬림해요', value: 23, isMax: false }
                        ]
                    },
                    {
                        title: '착용감',
                        data: [
                            { name: '아주 편해요', value: 15, isMax: false },
                            { name: '편해요', value: 58, isMax: true },
                            { name: '불편해요', value: 23, isMax: false }
                        ]
                    },
                    {
                        title: '포장',
                        data: [
                            { name: '빨라요', value: 70, isMax: false },
                            { name: '적당해요', value: 27, isMax: true },
                            { name: '느려요', value: 23, isMax: false }
                        ]
                    },
                    {
                        title: '배송',
                        data: [
                            { name: '좋아요', value: 70, isMax: false },
                            { name: '보통이에요', value: 27, isMax: true },
                            { name: '별로에요', value: 23, isMax: false }
                        ]
                    },
                    {
                        title: '가격',
                        data: [
                            { name: '싸요', value: 70, isMax: false },
                            { name: '적당해요', value: 27, isMax: true },
                            { name: '비싸요', value: 23, isMax: false }
                        ]
                    }
                ]
            }
        },
        watch: {
            viewMore: function (n) {
                n ? (this.viewMoreTxt = '닫기') : (this.viewMoreTxt = '자세히 보기')
            }
        },

        methods: {
            viewMoreBtn() {
                this.viewMore = !this.viewMore
            }
        }
    }
</script>

<style lang="sass" scoped></style>
