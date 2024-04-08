<template>
    <section class="product_detail_area common_css">
        <SubHeader title="스타일 리뷰" />
        <article class="member_review_area">
            <div class="review_list_content type_style">
                <div class="reivew_list_box" v-for="review in review" :key="review.id">
                    <div class="swiper review_img_swiper" ref="review_slider">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(reviewImg, imgIndex) in review.reviewImg"
                                :key="imgIndex"
                            >
                                <img :src="reviewImg.img" alt="상품리뷰이미지" />
                            </div>
                        </div>
                        <div class="review_img_pagination"></div>
                    </div>
                    <div class="reivew_list_box__product_box">
                        <div class="reivew_list_box__product_img">
                            <img :src="review.itemImg" alt="상품리미지" />
                        </div>
                        <div class="reivew_list_box__product_info">
                            <span class="reivew_list_box__product_brand">
                                {{ review.itemBrand }}
                            </span>
                            <span class="reivew_list_box__product_desc">
                                {{ review.itemDesc }}
                            </span>
                            <span class="reivew_list_box__product_price">
                                {{ review.itemPrice }}
                            </span>
                        </div>
                    </div>
                    <div class="lr_gap_box">
                        <div class="module_star_point">
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon off"></i>
                            <i class="module_star_point__icon off"></i>
                        </div>
                        <div class="reivew_list_box__score">
                            <span
                                v-for="reviewTxt in review.reviewTxt"
                                :key="reviewTxt.id"
                                class="reivew_list_box__score_txt"
                                :class="[{ 'bold': reviewTxt.txtBold }]"
                            >
                                {{ reviewTxt.txtBold }} {{ reviewTxt.txt }}
                            </span>
                        </div>
                        <p class="reivew_list_box__desc">
                            {{ review.desc }}
                        </p>
                        <div class="reivew_list_box__member_info">
                            <div class="reivew_list_box__member_id">
                                <span class="reivew_list_box__member_txt">
                                    {{ review.memberId }}
                                </span>
                                <span class="reivew_list_box__member_txt">
                                    {{ review.day }}
                                </span>
                                <span class="reivew_list_box__member_txt">신고</span>
                            </div>
                            <div
                                class="reivew_list_box__btn_like"
                                :class="{ btn_like_on: review.likeState }"
                            >
                                <button type="button" class="btn_like">
                                    {{ review.like }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>
<script>
    import Swiper from 'swiper'
    import SubHeader from '@/components/SubHeader.vue'

    export default {
        components: { SubHeader },
        data() {
            return {
                height: '',
                review: [
                    {
                        itemImg:
                            'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                        itemBrand: 'AMI',
                        itemDesc: '테스트1  자수 로고 클래식 맨...',
                        itemPrice: '440,000',
                        desc: '테스트 이미지 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요',
                        reviewTxt: [
                            {
                                txtBold: '정사이즈에요'
                            },
                            {
                                txt: '평소사이즈 : S'
                            },
                            {
                                txt: '구매사이즈 : 8'
                            }
                        ],
                        reviewImg: [
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            },
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            },
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            },
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            },
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            },
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            }
                        ],
                        memberId: 'textID',
                        day: '2022.02.10',
                        likeState: false,
                        like: '5'
                    },
                    {
                        itemImg:
                            'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                        itemBrand: 'AMI',
                        itemDesc:
                            'AMI 아미 스몰 하트 자수 로고 클래식 맨...AMI 아미 스몰 하트 자수 로고 클래식 맨...',
                        itemPrice: '440,000',
                        desc: '사이즈 고민하다가 주문이 늦어졌는데요 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요',
                        reviewTxt: [
                            {
                                txtBold: '정사이즈에요'
                            },
                            {
                                txt: '평소사이즈 : S'
                            },
                            {
                                txt: '구매사이즈 : 8'
                            }
                        ],
                        reviewImg: [
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            },
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            }
                        ],
                        memberId: 'textID02',
                        day: '2022.02.18',
                        likeState: true,
                        like: '10'
                    },
                    {
                        itemImg:
                            'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                        itemBrand: 'AMI',
                        itemDesc:
                            'AMI 아미 스몰 하트 자수 로고 클래식 맨...AMI 아미 스몰 하트 자수 로고 클래식 맨...',
                        itemPrice: '440,000',
                        desc: '사이즈 고민하다가 주문이 늦어졌는데요 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요',
                        reviewTxt: [
                            {
                                txtBold: '정사이즈에요'
                            },
                            {
                                txt: '평소사이즈 : S'
                            },
                            {
                                txt: '구매사이즈 : 8'
                            }
                        ],
                        reviewImg: [
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            },
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            },
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            }
                        ],
                        memberId: 'textID003',
                        day: '2022.02.20',
                        likeState: true,
                        like: '10'
                    }
                ]
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs.review_slider, {
                pagination: {
                    el: '.review_img_pagination'
                }
            })
        },
        methods: {}
    }
</script>
