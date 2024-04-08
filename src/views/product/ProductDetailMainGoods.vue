<template>
    <article class="product_img_box" :data-type="type">
        <div class="goods_img_slider" @click="cycleCase()">
            <div
                id="product_img_slider"
                class="product_slider_swiper swiper-container"
                ref="productSlider"
            >
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" v-for="i in 5" :key="i">
                        <div
                            class="product_img"
                            :style="`background: url(${tmpImg}) center no-repeat;
                                background-size: contain;`"
                        ></div>
                    </li>
                </ul>
                <div class="product_slider_swiper__page_num">
                    <!-- swiper 생성시 엘리먼트 삭제 후 새로 생성 -->
                    <span class="current">1</span> /
                    <span class="total">4</span>
                </div>
            </div>
        </div>

        <div class="product_label" v-if="this.$parent.showCaseNum === 1">
            <div class="product_label__return">무료교환반품</div>
            <div class="product_label__hot_deal">핫딜상품</div>
        </div>
        <div class="product_label" v-if="this.$parent.showCaseNum === 2">
            <div class="product_label__sale">5% 할인</div>
        </div>
        <div class="product_label" v-if="this.$parent.showCaseNum === 3">
            <div class="product_label__sale">30,000원 할인</div>
        </div>
        <div class="product_label" v-if="this.$parent.showCaseNum === 4">
            <div class="product_label__hot_deal">핫딜상품</div>
        </div>
        <div class="product_label" v-if="this.$parent.showCaseNum === 5">
            <div class="product_label__outlet">아울렛</div>
        </div>
        <div class="product_label" v-if="this.$parent.showCaseNum === 6">
            <div class="product_label__outlet">아울렛</div>
            <div class="product_label__hot_deal">핫딜상품</div>
        </div>
        <div class="product_label" v-if="this.$parent.showCaseNum === 7">
            <div class="product_label__outlet">아울렛</div>
            <div class="product_label__sale">기획전 상품</div>
        </div>
        <div class="product_label" v-if="this.$parent.showCaseNum === 8">
            <div class="product_label__return">무료교환반품</div>
            <div class="product_label__outlet">아울렛</div>
            <div class="product_label__hot_deal">핫딜상품</div>
        </div>
        <div class="product_label" v-if="this.$parent.showCaseNum === 9">
            <div class="product_label__return">무료교환반품</div>
            <div class="product_label__outlet">아울렛</div>
            <div class="product_label__sale">기획전 상품</div>
        </div>
        <div class="product_label" v-if="this.$parent.showCaseNum === 10">
            <div class="product_label__outlet">아울렛</div>
            <div class="product_label__sale">기획전 상품</div>
        </div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        props: {
            /*
                type :
                        1 투명 모드
                        2 제휴사 통해서 랜딩 시
             */
            type: { type: Number, required: true, default: 1 }
        },
        data() {
            return {
                tmpImg: 'https://cdn.mustit.co.kr/lib/upload/product/LOUTIQUE-/2020/06/1593418202-28.jpg/_dims_/resize/500x500/extent/500x500',
                swiper: null,
                swiperOpt: {
                    speed: 500,
                    resizeObserver: true,
                    spaceBetween: 0,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    pagination: {
                        el: '.product_slider_swiper__page_num',
                        type: 'fraction'
                    }
                }
            }
        },
        mounted() {
            const _length = this.$refs.productSlider.length
            this.swiperOpt.loop = _length <= 1 ? false : true
            this.swiperOpt.followFinger = _length <= 1 ? false : true
            this.swiper = new Swiper(this.$refs.productSlider, this.swiperOpt)
        },
        methods: {
            cycleCase() {
                this.$parent.showCaseNum++
                if (this.$parent.showCaseNum > 10) this.$parent.showCaseNum = 1
            }
        }
    }
</script>

<style></style>
