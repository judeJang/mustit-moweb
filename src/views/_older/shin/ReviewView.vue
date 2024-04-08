<template>
    <section class="product_detail_area common_css">
        <article class="sub_page_header">
            <a class="sub_page_header__btn_back">
                <i class="sub_page_header__icon_box"
                    ><img
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_back_b.svg"
                        alt="뒤로가기"
                /></i>
            </a>
            <h2 class="sub_page_header__title">리뷰</h2>
        </article>
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
                    <span class="review_score_header__num_txt">4.0</span>
                </div>
                <div class="review_score_header__review_num">상품리뷰 (1,532)</div>
            </div>
            <div class="review_score_detail">
                <div class="review_score_detail__inner_box" ref="reviewMore">
                    <dl>
                        <dt>사이즈</dt>
                        <dd>
                            <span class="review_score_detail__txt">생각보다 커요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="15"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">36%</span>
                        </dd>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">정사이즈에요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="70"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">70%</span>
                        </dd>
                        <dd>
                            <span class="review_score_detail__txt">생각보다 작아요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="27"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">27%</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>핏</dt>
                        <dd>
                            <span class="review_score_detail__txt">오버핏이에요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="15"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">36%</span>
                        </dd>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">적당해요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="58"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">58%</span>
                        </dd>
                        <dd>
                            <span class="review_score_detail__txt">슬림해요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="13"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">13%</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>착용감</dt>
                        <dd>
                            <span class="review_score_detail__txt">아주 편해요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="21"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">21%</span>
                        </dd>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">편해요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="76"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">76%</span>
                        </dd>
                        <dd>
                            <span class="review_score_detail__txt">불편해요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="3"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">3%</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>배송</dt>
                        <dd>
                            <span class="review_score_detail__txt">빨라요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="15"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">36%</span>
                        </dd>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">적당해요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="70"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">70%</span>
                        </dd>
                        <dd>
                            <span class="review_score_detail__txt">느려요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="27"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">27%</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>포장</dt>
                        <dd>
                            <span class="review_score_detail__txt">좋아요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="15"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">36%</span>
                        </dd>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">보통이에요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="58"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">58%</span>
                        </dd>
                        <dd>
                            <span class="review_score_detail__txt">별로에요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="13"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">13%</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>가격</dt>
                        <dd>
                            <span class="review_score_detail__txt">싸요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="21"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">21%</span>
                        </dd>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">적당해요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="76"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">76%</span>
                        </dd>
                        <dd>
                            <span class="review_score_detail__txt">비싸요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="3"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">3%</span>
                        </dd>
                    </dl>
                </div>
                <div class="review_score_detail__btn_more" @click="viewMoreBtn()">
                    {{ viewMoreTxt }}
                </div>
            </div>
        </article>
        <article class="member_review_area">
            <div class="reivew_tab_menu">
                <span
                    class="reivew_tab_menu__photo"
                    ref="photoSelect"
                    @click="photoReview"
                    >포토리뷰만</span
                >
                <span class="reivew_tab_menu__list_type">
                    <span class="reivew_tab_menu__btn_box">
                        <button type="button" class="reivew_tab_menu__btn btn_on">
                            최신순
                        </button>
                    </span>
                    <span class="reivew_tab_menu__btn_box">
                        <button type="button" class="reivew_tab_menu__btn">별점순</button>
                    </span>
                    <span class="reivew_tab_menu__btn_box">
                        <button type="button" class="reivew_tab_menu__btn">추천순</button>
                    </span>
                </span>
            </div>
            <div class="review_list_content type_member">
                <div class="reivew_list_box" v-for="review in review" :key="review.id">
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
                            @click="reviewImgBtn(reviewTxt.id)"
                            ref="'reviewImgList'+reviewTxt.id"
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
                        <div class="seller_reple" v-if="review.replyTxt">
                            <span class="seller_name">{{ review.replyBrand }}</span>
                            <p class="reple_txt">
                                {{ review.replyTxt }}
                            </p>
                        </div>
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
    export default {
        data() {
            return {
                photoSelect: false,
                viewMore: false,
                imgMore: false,
                viewMoreTxt: '자세히 보기',
                review: [
                    {
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
                            }
                        ],
                        memberId: 'textID',
                        day: '2022.02.10',
                        likeState: true,
                        like: '20',
                        replyBrand: 's-project',
                        replyTxt:
                            ' 안녕하세요 고객님 어쩌구 저쩌구 ~~~안녕하세요 고객님 어쩌구 저쩌구 ~~~안녕하세요 고객님 어쩌구 저쩌구 ~~~안녕하세요 고객님 어쩌구 저쩌구 ~~~'
                    },
                    {
                        desc: '사이즈 고민하다가 주문이 늦어졌는데요 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요',
                        reviewTxt: [
                            {
                                txt: '정사이즈에요'
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
                        memberId: 'textID02',
                        day: '2022.02.18',
                        likeState: false,
                        like: '5'
                    },
                    {
                        desc: '사이즈 고민하다가 주문이 늦어졌는데요 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요',
                        reviewTxt: [
                            {
                                txt: '정사이즈에요'
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
                            },
                            {
                                img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            }
                        ],
                        memberId: 'textID02',
                        day: '2022.02.18',
                        likeState: true,
                        like: '1'
                    }
                ]
            }
        },
        mounted() {},
        methods: {
            viewMoreBtn() {
                this.viewMore = !this.viewMore
                if (!this.viewMore) {
                    this.btnMoreText = '자세히 보기'
                    this.$refs.reviewMore.classList.remove('score_on')
                } else {
                    this.btnMoreText = '닫기'
                    this.$refs.reviewMore.classList.add('score_on')
                }
            },
            photoReview() {
                this.photoSelect = !this.photoSelect
                if (!this.photoSelect) {
                    this.$refs.photoSelect.classList.remove('photo_reivew_on')
                } else {
                    this.$refs.photoSelect.classList.add('photo_reivew_on')
                }
            },
            reviewImgBtn(index) {
                this.imgMore = !this.imgMore
                if (this.imgMore) {
                    this.$refs.reviewImgList[index].classList.remove(
                        'basic_img hidden_img'
                    )
                } else {
                    this.$refs.reviewImgList[index].classList.add('basic_img hidden_img')
                }
            }
        }
    }
</script>
