<template>
    <article class="PDP_review">
        <template v-if="isEmpty">
            <div class="empty" @click="toggleEmpty()">
                <p>
                    등록된 리뷰가 없습니다.<br />
                    상품구매 후 리뷰를 작성해주세요.
                </p>
            </div>
        </template>
        <template v-else>
            <!-- 상단영역 -->
            <div class="review_header" @click="toggleEmpty()">
                <div class="point">
                    {{ data.point }}
                </div>
                <div class="percentage">
                    <dl v-for="(value, key) in data.percentage" :key="key">
                        <dt>{{ titleReturn(key) }}</dt>
                        <dd>
                            <p class="name">{{ nameReturn(key) }}</p>
                            <span class="dot"></span>
                            <p class="num">{{ value }}</p>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="review_alert">
                <p>같은 상품에 작성된 리뷰로, 판매자가 다를 수 있습니다.</p>
            </div>
            <ReviewList
                v-for="(listData, index) in data.list"
                :key="index"
                :data="listData"
                :point="data.point"
            />
            <router-link to="/product/productReview" class="review_all_view_btn"
                >리뷰 전체보기</router-link
            >
        </template>
    </article>
</template>

<script>
    import ReviewList from '@/modules/VPDPReviewList.vue'

    export default {
        name: 'PDP_REVIEW_WRAP',
        components: { ReviewList },
        data() {
            return {
                data: {
                    point: 4.8,
                    percentage: {
                        size: 90,
                        fit: 89,
                        competition: 63
                    },
                    list: [
                        {
                            id: 'rere***',
                            date: '2023-12-22',
                            seller: 's-project',
                            comment: '정사이즈에요',
                            height: 160,
                            weight: 50,
                            point: 5,
                            reply: '늦은 시간에 문의 드렸는데 답변이 빨랐어요 배송도 로켓배송급이고 포장상태도 최고~! 정품인증도 확인했습니다^^',
                            link: '#',
                            img: 'https://dummyimage.com/60x60/000/fff'
                        },
                        {
                            id: 'rere***',
                            date: '2023-12-22',
                            seller: 's-project',
                            height: 160,
                            weight: 50,
                            point: 4,
                            reply: '늦은 시간에 문의 드렸는데 답변이 빨랐어요 배송도 로켓배송급이고 포장상태도 최고~! 정품인증도 확인했습니다^^',
                            link: '#'
                        },
                        {
                            id: 'rere***',
                            date: '2023-12-22',
                            seller: 's-project',
                            comment: '정사이즈에요',
                            height: 160,
                            weight: 50,
                            point: 1,
                            reply: '늦은 시간에 문의 드렸는데 답변이 빨랐어요 배송도 로켓배송급이고 포장상태도 최고~! 정품인증도 확인했습니다^^늦은 시간에 문의 드렸는데 답변이 빨랐어요 배송도 로켓배송급이고 포장상태도 최고~! 정품인증도 확인했습니다^^',
                            link: '#',
                            img: 'https://dummyimage.com/180x100/000/fff'
                        }
                    ]
                },
                isEmpty: true
            }
        },
        methods: {
            titleReturn(str) {
                if (str === 'size') {
                    return '사이즈'
                } else if (str === 'fit') {
                    return '핏'
                } else if (str === 'competition') {
                    return '착용감'
                }
            },
            nameReturn(str) {
                if (str === 'size') {
                    return '정사이즈에요'
                } else if (str === 'fit') {
                    return '슬림해요'
                } else if (str === 'competition') {
                    return '편해요'
                }
            },
            toggleEmpty() {
                this.isEmpty = !this.isEmpty
            }
        }
    }
</script>
