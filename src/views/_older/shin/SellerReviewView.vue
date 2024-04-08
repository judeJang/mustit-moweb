<template>
    <section class="product_detail_area common_css">
        <article class="sub_page_header">
            <a class="sub_page_header__btn_back" href="javascript:history.back()">
                <i class="sub_page_header__icon_box"
                    ><img
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_back_b.svg"
                        alt="뒤로가기"
                /></i>
            </a>
            <h2 class="sub_page_header__title">판매자 리뷰</h2>
        </article>
        <article class="member_review_area">
            <div class="review_list_content type_seller">
                <div class="reivew_list_box" v-for="review in review" :key="review.id">
                    <div class="lr_gap_box">
                        <!-- 없는 부분 -->
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
                        <!-- 없는 부분 -->
                        <!-- 별점 -->
                        <div class="module_star_point">
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon off"></i>
                            <i class="module_star_point__icon off"></i>
                        </div>
                        <!-- 구매자 글 -->
                        <p class="reivew_list_box__desc">
                            {{ review.desc }}
                        </p>
                        <!-- 이미지 영역 -->
                        <div
                            class="reivew_list_box__img_list"
                            :class="[
                                { 'hidden_img': review.reviewImg.length >= 2 },
                                {
                                    'hidden_img basic_img':
                                        review.reviewImg.length == 1 ||
                                        review.reviewImg.offsetHeight >= 240
                                }
                            ]"
                        >
                            <div class="reivew_list_box__img_box">
                                <ul>
                                    <li
                                        v-for="reviewImg in review.reviewImg"
                                        :key="reviewImg.id"
                                    >
                                        <span class="reivew_list_box__img_box">
                                            <img
                                                :src="reviewImg.img"
                                                alt="상품리뷰이미지"
                                            />
                                        </span>
                                    </li>
                                </ul>
                                <div
                                    class="reivew_list_box__num_box"
                                    v-if="review.reviewImg.length >= 3"
                                >
                                    <span class="reivew_list_box__num_txt">
                                        +{{ review.reviewImg.length - 2 }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- 등록일 및 좋아요 -->
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
                            <div class="reivew_list_box__btn_like btn_like_on">
                                <button type="button" class="btn_like">5</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                height: '',
                review: [
                    {
                        itemImg:
                            'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                        itemBrand: 'AMI',
                        itemDesc:
                            '어쩌구 저쩌구맨...AMI 아미 스몰 하트 자수 로고 클래식 맨...',
                        itemPrice: '440,000',
                        desc: '테스트 이미지 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요',
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
                        day: '2022.02.10'
                    },
                    {
                        itemImg:
                            'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                        itemBrand: 'AMI',
                        itemDesc:
                            'AMI 아미 스몰 하트 자수 로고 클래식 맨...AMI 아미 스몰 하트 자수 로고 클래식 맨...',
                        itemPrice: '440,000',
                        desc: '사이즈 고민하다가 주문이 늦어졌는데요 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요',
                        reviewImg: [
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            },
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            }
                        ],
                        memberId: 'textID02',
                        day: '2022.02.18'
                    },
                    {
                        itemImg:
                            'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                        itemBrand: 'AMI',
                        itemDesc:
                            'AMI 아미 스몰 하트 자수 로고 클래식 맨...AMI 아미 스몰 하트 자수 로고 클래식 맨...',
                        itemPrice: '440,000',
                        desc: '사이즈 고민하다가 주문이 늦어졌는데요 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요',
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
                        day: '2022.02.20'
                    }
                ]
            }
        },
        method: {},
        methods: {}
    }
</script>
