<template>
    <article ref="reviewContainer">
        <div
            class="product_review_area box_border_top"
            :class="{ 'seller_review': isSeller }"
        >
            <div class="review_title_box" @click="caseShow()">
                <span class="review_title_box__txt"><slot name="title"></slot></span>
                <span class="review_title_box__num" v-if="isSeller"
                    >(<slot name="count"></slot>)</span
                >
            </div>
            <!-- 별표시 소수점자리까지 -->
            <div class="review_score_box">
                <div class="review_score_header">
                    <div class="review_score_header__inner_box">
                        <div class="module_star_point">
                            <span
                                class="star"
                                v-for="i in 5"
                                :key="i"
                                :class="avgScoreReturn(i)"
                            >
                                <i class="comp_icon_star_20"></i>
                            </span>
                        </div>
                        <span class="review_score_header__num_txt">{{ avgScore }}</span>
                    </div>
                </div>
            </div>
            <!-- 그래프 영역 -->
            <div class="review_score_detail">
                <div class="review_score_detail__inner_box">
                    <dl v-for="(progress, index) in reviewProgress" :key="index">
                        <dt>{{ progress.name }}</dt>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">
                                {{ progress.text }}
                            </span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    :value="progress.percent"
                                    max="100"
                                ></progress>
                            </span>
                            <span class="review_score_detail__percent"
                                >{{ progress.percent }}%</span
                            >
                        </dd>
                    </dl>
                </div>
            </div>

            <!-- swiper -->
            <div
                id="product_review_slider"
                class="product_slider swiper-container"
                ref="product_review_slider"
            >
                <div class="scroll_inner_box swiper-wrapper">
                    <!-- [D] case : review 1개 일 때 
                        item_box add class single_slide
                    -->
                    <div
                        class="item_box swiper-slide"
                        :class="{ 'single_slide': isSingle }"
                        v-for="(list, index) in swiperList"
                        :key="`swiper_${index}`"
                    >
                        <div class="module_star_point">
                            <i
                                class="module_star_point__icon"
                                v-for="i in 5"
                                :key="`star_${i}`"
                                :class="[list.score < i ? 'off' : '']"
                            ></i>
                            <div class="txt01" v-if="list.text.bold">
                                {{ list.text.bold }}
                            </div>
                        </div>
                        <p class="size_add" v-if="list.height || list.weight">
                            {{ list.height }}cm / {{ list.weight }}kg
                        </p>
                        <div class="txt_box01">
                            <div class="txt_inner_box">
                                <div class="txt02">{{ list.text.desc }}</div>
                            </div>
                            <div class="img_box" v-if="list.img">
                                <span
                                    class="img"
                                    :style="`background: url(${list.img}) center center no-repeat;`"
                                ></span>
                            </div>
                        </div>
                        <div class="txt_box02">
                            <ul>
                                <li>{{ list.id }}</li>
                                <li>{{ list.date }}</li>
                            </ul>
                        </div>
                        <div class="brand_info" v-if="isSeller">
                            <p class="name">GOLDEN GOOSE</p>
                            <p class="desc">
                                [럭스앤홀릭] 골든구스 P000597 톤온톤 골든구스 P000597
                                톤온톤 골든구스 P000597 톤온톤
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="btn_link_box">
                <a href="#">리뷰 전체보기</a>
            </div>
        </div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        props: {
            isType: { type: String, default: '' }
        },
        data() {
            return {
                avgScore: 3.7,
                swiperOpt: {
                    speed: 500,
                    resizeObserver: true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    slideToClickedSlide: true,
                    observer: true,
                    observeParents: true,
                    on: {
                        init: function () {
                            //swiper-slides fix size of wrapper size
                            const hei = this.height - 4
                            for (let i in this.slides) {
                                if (typeof this.slides[i] == 'object') {
                                    this.slides[i].style.height = hei + 'px'
                                }
                            }
                        }
                    }
                },
                reviewProgress: [
                    { name: '사이즈', text: '생각보다 작아요', percent: 79 },
                    { name: '핏', text: '적당해요', percent: 61 },
                    { name: '착용감', text: '편해요', percent: 65 }
                ],
                swiperList: [
                    {
                        score: 4,
                        text: {
                            bold: '정사이즈예요',
                            desc: '어디에나 잘 어울리는 가방이에요. 실물 진짜 대박이고 물건도 넉넉히 들어가서 자 어디에나 잘 어울리는 가방이에요. 실물 진짜 대박이고 물건도 넉넉히 들어가서 자'
                        },
                        id: '93***',
                        date: '2022.02.18',
                        height: '168',
                        weight: '48',
                        img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500'
                    },
                    {
                        score: 4,
                        text: {
                            desc: '어디에나 잘 어울리는 가방이에요.'
                        },
                        id: 'K@2273634***',
                        date: '2022.02.18',
                        height: '168',
                        weight: '48',
                        img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500'
                    },
                    {
                        score: 4,
                        text: {
                            bold: '생각보다 작아요',
                            desc: '허리 사이즈 문제는 크게 안되네요 ㅎㅎ 마지막 매물 예쁘게 잘 입겠습니다'
                        },
                        id: '93***',
                        date: '2022.02.18',
                        img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500'
                    },
                    {
                        score: 4,
                        text: {
                            bold: '생각보다 작아요',
                            desc: '어디에나 잘 어울리는 가방이에요. 실물 진짜 대박이고 물건도 넉넉히 들어가서 자 어디에나 잘 어울리는 가방이에요. 실물 진짜 대박이고 물건도 넉넉히 들어가서 자'
                        },
                        id: '93***',
                        date: '2022.02.18',
                        height: '168',
                        weight: '48'
                    },
                    {
                        score: 4,
                        text: {
                            desc: '어디에나 잘 어울리는 가방이에요ㅠㅠ'
                        },
                        id: '93***',
                        date: '2022.02.18',
                        height: '168',
                        weight: '48'
                    },
                    {
                        score: 4,
                        text: {
                            bold: '생각보다 작아요',
                            desc: '허리 사이즈 문제는 크게 안되네요 ㅎㅎ 마지막 매물 예쁘게 잘 입겠습니다'
                        },
                        id: '93***',
                        date: '2022.02.18'
                    }
                ],
                singleData: {
                    score: 4,
                    text: {
                        bold: '정사이즈예요',
                        desc: '어디에나 잘 어울리는 가방이에요. 실물 진짜 대박이고 물건도 넉넉히 들어가서 자 어디에나 잘 어울리는 가방이에요. 실물 진짜 대박이고 물건도 넉넉히 들어가서 자'
                    },
                    id: '93***',
                    date: '2022.02.18',
                    height: '168',
                    weight: '48',
                    img: 'https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500'
                },
                isSeller: false,
                isSingle: false,
                swiper: null
            }
        },
        created() {
            this.isType == 'seller' ? (this.isSeller = true) : (this.isSeller = false)
        },
        mounted() {
            if (this.swiperList.length > 1) {
                this.swiper = new Swiper(this.$refs.product_review_slider, this.swiperOpt)
            }
        },
        watch: {
            isSingle: function (n) {
                const items =
                    this.$refs.product_review_slider.querySelectorAll('.swiper-slide')
                if (n) {
                    this.swiper.destroy()

                    items.forEach((el, index) => {
                        if (index != 0) {
                            el.style.display = 'none'
                        }
                    })
                } else {
                    if (this.swiperList.length > 1)
                        items.forEach((el) => {
                            el.style.display = 'block'
                        })
                    this.swiper = new Swiper(
                        this.$refs.product_review_slider,
                        this.swiperOpt
                    )
                }
            }
        },
        methods: {
            avgScoreFun() {
                const data = String(this.avgScore)
                const chars = data.split('.')

                return {
                    'int': parseInt(chars[0]),
                    'decimal': chars[1]
                }
            },
            avgScoreReturn(i) {
                const returnData = this.avgScoreFun()
                let returnValue = ''

                if (i <= returnData.int) returnValue = 'score_10'

                if (i == returnData.int + 1) returnValue = `score_${returnData.decimal}`

                return returnValue
            },
            caseShow() {
                this.isSingle = !this.isSingle
            }
        }
    }
</script>
