<template>
    <!-- [D]
        상품리뷰 상세 : type_member
        판매자리뷰 상세 : type_seller
        스타일 리뷰 상세 : type_style
     -->
    <div
        class="review_list_content"
        :class="{
            'type_member': type == 'member',
            'type_seller': type == 'seller',
            'type_style': type == 'style'
        }"
    >
        <div
            class="reivew_list_box"
            v-for="(data, id) in reviewData"
            :key="`review${id}`"
        >
            <!-- style swiper -->
            <div
                class="swiper review_img_swiper"
                ref="review_slider"
                v-if="type == 'style'"
            >
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide"
                        v-for="(swiper, index) in data.buyer.img"
                        :key="index"
                    >
                        <img :src="swiper" alt="상품리뷰이미지" />
                    </div>
                </div>
                <div class="review_img_pagination"></div>
            </div>

            <div class="reivew_list_box__product_box" v-if="type == 'style'">
                <div class="reivew_list_box__product_img">
                    <img :src="data.buyer.img" alt="상품이미지" />
                </div>
                <div class="reivew_list_box__product_info">
                    <span class="reivew_list_box__product_brand">
                        {{ data.buyer.brandName }}
                    </span>
                    <span class="reivew_list_box__product_desc">
                        {{ data.buyer.brandInfo }}
                    </span>
                    <span class="reivew_list_box__product_price">
                        {{ data.buyer.price }}
                    </span>
                </div>
            </div>

            <!-- 좌우 여백 존재 -->
            <div class="lr_gap_box">
                <!-- 제품 리스트 seller O -->
                <div class="reivew_list_box__product_box" v-if="type == 'seller'">
                    <div class="reivew_list_box__product_img">
                        <img :src="data.buyer.img" alt="상품리미지" />
                    </div>
                    <div class="reivew_list_box__product_info">
                        <span class="reivew_list_box__product_brand">
                            {{ data.buyer.brandName }}
                        </span>
                        <span class="reivew_list_box__product_desc">
                            {{ data.buyer.brandInfo }}
                        </span>
                    </div>
                </div>

                <!-- 별점 -->
                <div class="module_star_point">
                    <i
                        class="module_star_point__icon"
                        v-for="i in 5"
                        :key="`star${i}`"
                        :class="data.buyer.avgScore < i ? 'off' : ''"
                    ></i>
                    <strong>{{ data.buyer.fitSize }}</strong>
                </div>

                <div class="review_writer_info">
                    <span>{{ data.buyer.id }}</span>
                    <span>{{ data.buyer.date }}</span>
                    <span class="seller">판매자 : s-project</span>
                </div>

                <!-- 사이즈 정보 -->
                <div class="size_info">
                    <div
                        class="reivew_list_box__score buy_size"
                        v-if="data.buyer.buySize"
                    >
                        <span class="reivew_list_box__score_txt">
                            {{ data.buyer.buySize }}
                        </span>
                    </div>
                    <div class="reivew_list_box__score" v-if="data.buyer.sizeInfo">
                        <span
                            v-for="(sizes, sid) in data.buyer.sizeInfo"
                            :key="`sizes${sid}`"
                            class="reivew_list_box__score_txt"
                            :class="[{ 'bold': sizes.isBold }]"
                        >
                            {{ sizes.text }}
                        </span>
                    </div>
                </div>

                <!-- 구매자 글 -->
                <p class="reivew_list_box__desc">
                    {{ data.buyer.text }}
                </p>

                <!-- 이미지 영역 -->
                <div
                    class="reivew_list_box__img_list"
                    :class="[data.buyer.isHidden, data.buyer.isBase]"
                    @click="toggleImgShow(id)"
                    v-if="type != 'style'"
                >
                    <div class="reivew_list_box__img_box">
                        <ul>
                            <li v-for="(img, iId) in data.buyer.img" :key="`img${iId}`">
                                <span class="reivew_list_box__img_box">
                                    <img :src="img" alt="상품리뷰이미지" />
                                </span>
                            </li>
                        </ul>
                        <div class="reivew_list_box__num_box" v-if="data.buyer.iLen > 2">
                            <span class="reivew_list_box__num_txt">
                                +{{ data.buyer.iLen - 2 }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 판매자 글 : 상품리뷰 O , 판매자리뷰 X-->
                <div class="seller_reple" v-if="data.seller && type == 'member'">
                    <span class="seller_name">{{ data.seller.id }}</span>
                    <p class="reple_txt">
                        {{ data.seller.text }}
                    </p>
                </div>

                <!-- 등록일 및 좋아요 -->
                <div class="reivew_list_box__member_info">
                    <div class="reivew_list_box__member_id" v-if="false">
                        <span class="reivew_list_box__member_txt">
                            {{ data.buyer.id }}
                        </span>
                        <span class="reivew_list_box__member_txt">
                            {{ data.buyer.date }}
                        </span>
                        <span
                            class="reivew_list_box__member_txt"
                            :class="{ modify: data.buyer.modify }"
                            >{{ data.buyer.modify ? '수정' : '신고' }}</span
                        >
                    </div>

                    <button type="button" class="review_user_interaction">
                        {{ data.buyer.modify ? '수정' : '신고' }}
                    </button>
                    <button
                        type="button"
                        class="btn_like"
                        :class="{ 'btn_like_on': data.outside.isLike }"
                        @click="toggleLike(id)"
                    >
                        {{ data.outside.likeCount }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { imgAPI } from '@/assets/js/Common'
    import Swiper from 'swiper'
    export default {
        name: 'MustitUxProductReviewList',
        props: {
            type: { type: String, default: 'member' }
        },
        data() {
            return {
                reviewData: [
                    {
                        buyer: {
                            id: 'txtID',
                            date: '2022.02.10',
                            avgScore: 4,
                            fitSize: '정사이즈에요',
                            buySize: '구매사이즈 : M',
                            sizeInfo: [
                                { text: '168cm / 48kg', isBold: false },
                                { text: '평소사이즈 : S', isBold: false }
                            ],
                            img: [
                                'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            ],
                            brandName: 'AMI',
                            brandInfo: 'AMI 아미 스몰 하트 자수 로고 클래식 맨입니다.',
                            price: '299,000',
                            imgExtend: false,
                            isHidden: 'hidden_img',
                            isBase: 'basic_img',
                            text: '테스트 이미지 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요',
                            modify: true
                        },
                        seller: {
                            id: 's-project',
                            text: ' 안녕하세요 고객님 어쩌구 저쩌구 ~~~안녕하세요 고객님 어쩌구 저쩌구 ~~~안녕하세요 고객님 어쩌구 저쩌구 ~~~안녕하세요 고객님 어쩌구 저쩌구 ~~~'
                        },
                        outside: {
                            isLike: true,
                            likeCount: 20
                        }
                    },
                    {
                        buyer: {
                            id: 'txtID',
                            date: '2022.02.10',
                            avgScore: 5,
                            fitSize: '정사이즈에요',
                            img: [
                                'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                                'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            ],
                            brandName: 'AMI',
                            brandInfo: 'AMI 아미 스몰 하트 자수 로고 클래식 맨입니다.',
                            price: '299,000',
                            imgExtend: false,
                            isHidden: 'hidden_img',
                            isBase: 'basic_img',
                            text: '사이즈 고민하다가 주문이 늦어졌는데요 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요'
                        },
                        outside: {
                            isLike: false,
                            likeCount: 5
                        }
                    },
                    {
                        buyer: {
                            id: 'txtID',
                            date: '2022.02.10',
                            avgScore: 1,
                            fitSize: '정사이즈에요',
                            buySize: '구매사이즈 : S',
                            sizeInfo: [
                                { text: '정사이즈에요', isBold: false },
                                { text: '평소사이즈 : S', isBold: false },
                                { text: '구매사이즈 : 8', isBold: false }
                            ],
                            img: [
                                'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                                'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                                'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            ],
                            brandName: 'AMI',
                            brandInfo: 'AMI 아미 스몰 하트 자수 로고 클래식 맨입니다.',
                            price: '299,000',
                            imgExtend: false,
                            isHidden: 'hidden_img',
                            isBase: 'basic_img',
                            text: '사이즈 고민하다가 주문이 늦어졌는데요 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요',
                            modify: true
                        },
                        outside: {
                            isLike: false,
                            likeCount: 5
                        }
                    },
                    {
                        buyer: {
                            id: 'txtID',
                            date: '2022.02.10',
                            avgScore: 2,
                            buySize: '구매사이즈 : S',
                            img: [
                                'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                                'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                                'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                                'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"',
                                'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500"'
                            ],
                            brandName: 'AMI',
                            brandInfo: 'AMI 아미 스몰 하트 자수 로고 클래식 맨입니다.',
                            price: '299,000',
                            imgExtend: false,
                            isHidden: 'hidden_img',
                            isBase: 'basic_img',
                            text: '사이즈 고민하다가 주문이 늦어졌는데요 예상대로 슬림핏 하고 길이도 저한테는 적당합니다. 왁스자켓이라 베란다에서 말리면서 입고 다녀요'
                        },
                        outside: {
                            isLike: false,
                            likeCount: 5
                        }
                    }
                ],
                isType: ''
            }
        },
        watch: {},
        created() {
            switch (this.type) {
                case 'member':
                    break
                case 'seller':
                    break
                case 'style':
                    break
            }
        },
        mounted() {
            this.imgList()

            if (this.type == 'style') {
                this.$refs.review_slider.forEach((el) => {
                    if (el.querySelectorAll('.swiper-slide').length > 1) {
                        new Swiper(el, {
                            pagination: {
                                el: el.querySelector('.review_img_pagination')
                            }
                        })
                    }
                })
            }
        },
        methods: {
            imgList() {
                this.reviewData.forEach((items) => {
                    //img length
                    let imgLength = items.buyer.img.length

                    this.$set(items.buyer, 'iLen', imgLength)
                    //items.buyer.imgLength = imgLength;

                    items.buyer.img.forEach((img) => {
                        imgAPI.imgSize(img).then((returnImg) => {
                            if (returnImg.height < 240) {
                                this.$set(items.buyer, 'minHeight', true)
                                //items.buyer[index].minHeight = true;
                            } else {
                                this.$set(items.buyer, 'minHeight', false)
                            }
                        })
                    }) //E forEach

                    if (imgLength >= 2) {
                        items.buyer.isHidden = 'hidden_img'
                        items.buyer.isBase = ''
                    }

                    if (imgLength == 1 && !items.buyer.minHeight) {
                        items.buyer.isHidden = 'hidden_img'
                        items.buyer.isBase = 'basic_img'
                    }
                }) //E forEach
            },
            toggleImgShow(id) {
                const isExtand = (this.reviewData[id].buyer.imgExtend =
                    !this.reviewData[id].buyer.imgExtend)
                if (isExtand) {
                    this.$set(this.reviewData[id].buyer, 'isHidden', '')
                    this.$set(this.reviewData[id].buyer, 'isBase', '')
                } else {
                    this.imgList()
                }
            },
            toggleLike(id) {
                this.reviewData[id].outside.isLike = !this.reviewData[id].outside.isLike
            }
        } //E methods
    }
</script>
